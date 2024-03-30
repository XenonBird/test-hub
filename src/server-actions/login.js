'use server';

import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

import { sign } from '@/lib/jose';
import { connectToDatabase } from '@/db/conn';
import {
  emailValidation,
  usernameValidation,
  passwordValidation,
} from '@/zod/schema';
import { User } from '@/db/models/user';

export async function loginAction(state, formData) {
  try {
    const email = emailValidation.parse(formData.get('email'));
    const password = passwordValidation.parse(formData.get('password'));

    await connectToDatabase();
    const targetUser = await User.findOne({ email });
    if (!targetUser) throw new Error('Email is not already registered');

    const passwordMatch = bcrypt.compareSync(password, targetUser.hash);
    if (!passwordMatch) throw new Error('Incorrect password');

    const payload = {
      username: targetUser.username,
      email: targetUser.email,
      role: targetUser.role,
      _id: targetUser._id.toString(),
    };
    const token = await sign(payload, process.env.JWT_SECRET);

    const expires = Date.now() + 1000 * 60 * 60 * 24 * 30;
    cookies().set('token', token, { expires });
    cookies().set('user', JSON.stringify(payload), { expires });

    console.log(`🟢 Login: ${targetUser.username} (${targetUser.email})`);

    return { message: 'Okay', data: payload };
  } catch (error) {
    console.log('🔴 ', JSON.stringify(error, null, 2));
    if (error.name === 'ZodError') {
      // If the error is a Zod validation
      return {
        // error: error.flatten().fieldErrors,
        error: error.issues[0],
        status: 400,
      };
    } else {
      // Handle other errors
      console.error('Error Login:', error);
      return {
        error: { message: 'An error occurred while adding the exam paper' },
        status: 500,
      };
    }
  }
}
