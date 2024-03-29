'use client';

import { useFormStatus, useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

import { logoutAction } from '@/server-actions/logout';
import { Button } from './ui/button';
import toast from 'react-hot-toast';

export function LogoutButton() {
  const router = useRouter();
  const [logoutState, logoutFormAction] = useFormState(logoutAction, null);

  if (logoutState) {
    router.push('/auth');
    toast.success('Logged out successfully');
  }

  return (
    <form action={logoutFormAction} style={{ all: 'unset' }}>
      <Btn />
    </form>
  );
}

function Btn() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-20" variant="destructive" type="submit">
      Logout{' '}
      {pending && (
        <i className="fi fi-rr-spinner animate-spin flex justify-center items-center ml-4"></i>
      )}
    </Button>
  );
}
