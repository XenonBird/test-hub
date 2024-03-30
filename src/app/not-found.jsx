'use client';

import { MaxWidthDivFrame } from '@/components/frames';
import { TypographyLarge, TypographySmall } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';

export default function NotFound() {
  const path = usePathname();
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <MaxWidthDivFrame className="p-12">
      <TypographyLarge>Not found Page</TypographyLarge>
      <TypographySmall>
        <pre>{path}</pre>
      </TypographySmall>
      <Button onClick={goBack}>Go back</Button>
    </MaxWidthDivFrame>
  );
}
