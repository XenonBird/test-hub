'use server';

import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';

import { sign } from '@/lib/jose';
import { connectToDatabase } from '@/db/conn';
import {
  emailValidation,
  usernameValidation,
  passwordValidation,
} from '@/zod/schema';
import { User } from '@/db/models/user';

export async function signupAction(state, formData) {
  try {
    const username = usernameValidation.parse(formData.get('username'));
    const email = emailValidation.parse(formData.get('email'));
    const password = passwordValidation.parse(formData.get('password'));
    const password2 = passwordValidation.parse(formData.get('password2'));

    if (password !== password2) throw new Error('Passwords did not match');

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    await connectToDatabase();

    const emailExist = await User.findOne({ email });
    if (emailExist) throw new Error('Email is already registered');

    const newUser = new User({ username, email, hash });
    await newUser.save();

    const payload = {
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
      _id: newUser._id.toString(),
    };
    const token = await sign(payload, process.env.JWT_SECRET);

    const expires = Date.now() + 1000 * 60 * 60 * 24 * 30;
    cookies().set('token', token, { expires });
    cookies().set('user', JSON.stringify(payload), { expires });

    console.log(`🟢 Signup: ${newUser.username} (${newUser.email})`);

    return { message: 'Okay', data: payload };
  } catch (error) {
    console.log({ error: { message: error?.message || 'Validation error' } });
    if (error?.errors?.length) {
      return { error: { message: error.errors[0].message } };
    } else {
      return { error: { message: error.message } };
    }
  }
}
