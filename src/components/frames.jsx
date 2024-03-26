import { cn } from '@/lib/utils';

export const MaxWidthDivFrame = ({ children, className }) => (
  <section
    className={cn(
      'max-w-7xl mx-auto flex flex-col justify-center items-center gap-4 p-4',
      className
    )}
  >
    {children}
  </section>
);

// export const SectionFrame = ({ children, className }) => {
//   <section className={cn('p-4 bg-muted', className)}>{children}</section>;
// };
