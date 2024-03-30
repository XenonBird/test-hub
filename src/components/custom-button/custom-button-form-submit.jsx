'use client';

import { useFormStatus } from 'react-dom';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export const SubmitButton = ({
  text = 'Submit',
  type = 'submit',
  variant = 'default',
  className = '',
  size = 'default',
}) => {
  const status = useFormStatus();
  return (
    <Button
      variant={status.pending ? 'disabled' : variant}
      type={type}
      className={cn(className)}
      size={size}
    >
      <span>{text}</span>{' '}
      {status.pending && (
        <i className="fi fi-rr-spinner animate-spin flex justify-center items-center ml-4"></i>
      )}
    </Button>
  );
};
