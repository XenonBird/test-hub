import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export function NavBar({ links, className }) {
  return (
    <nav className={cn('flex justify-between items-center gap-4', className)}>
      {links.map((link, index) => (
        <Button
          key={'link_' + index}
          variant="secondary"
          className="ml-4 hover:bg-primary hover:text-primary-foreground"
          asChild
        >
          <Link href={link.address}>{link.text}</Link>
        </Button>
      ))}
    </nav>
  );
}
