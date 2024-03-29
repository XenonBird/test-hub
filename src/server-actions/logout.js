'use server';

import { getTokenDataFromCookies } from '@/lib/token';
import { cookies } from 'next/headers';

export async function logoutAction(state, formData) {
  const tokenData = await getTokenDataFromCookies();

  cookies().delete('token');
  cookies().delete('user');

  console.log(
    `🔵 Logout: ${tokenData?.data?.username} (${tokenData?.data?.email})`
  );

  return { message: 'Logout out successfully' };
}
