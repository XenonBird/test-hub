'use server';

import { connectToDatabase } from '@/db/conn';

export async function loginAction(state, formData) {
  // await connectToDatabase();
  console.log({
    state,
    formData: {
      email: formData.get('email'),
      password: formData.get('password'),
    },
  });
}
