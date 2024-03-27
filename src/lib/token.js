'use server';

import { cookies } from 'next/headers';
import { verify } from './jose';

export async function getTokenDataFromCookies() {
  try {
    const token = cookies().get('token')?.value;
    if (!token) throw new Error('Token not found');
    const decodedToken = await verify(token, process.env.JWT_SECRET);
    return { data: decodedToken };
  } catch (error) {
    return { error: { message: error.message } };
  }
}
