import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-6 p-24">
      <Link href={'/teacher'} className={buttonVariants()}>
        <span>Explore teacher page </span> <i className="fi fi-rr-officer"></i>
      </Link>

      <Link href={'/student'} className={buttonVariants()}>
        <span>Explore student page </span> <i className="fi fi-rr-group"></i>
      </Link>

      <Link href={'/auth'} className={buttonVariants()}>
        <span>Login / Signup </span> <i className="fi fi-rr-group"></i>
      </Link>
    </main>
  );
}
