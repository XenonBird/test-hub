import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { TypographyP } from './ui/typography';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LogoutButton } from '@/components/logout-button';

export function Menu({ links, className, logoutButton }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className={cn(
            'p-0 aspect-square rounded-full flex justify-center items-center',
            className
          )}
        >
          <i className="fi fi-rr-employee-man-alt"></i>
          {/* <i className="fi fi-rr-menu-bars"></i> */}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <TypographyP className="flex justify-center mb-3">
              <i className="fi fi-rr-user text-3xl p-4 aspect-square outline rounded-full"></i>
            </TypographyP>
          </SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {links.map((link, index) => (
            <SheetClose key={'link_' + index} asChild>
              <Button variant="secondary" asChild>
                <Link href={link.address}>{link.text}</Link>
              </Button>
            </SheetClose>
          ))}

          {/* {logoutButton && (
            <SheetClose asChild>
              <LogoutButton />
            </SheetClose>
          )} */}
        </div>
        <SheetFooter>
          {logoutButton && (
            <SheetClose asChild>
              <LogoutButton />
            </SheetClose>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
