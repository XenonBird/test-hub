'use client';

import { MaxWidthDivFrame } from '@/components/frames';
import { TypographyLarge } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <MaxWidthDivFrame className="p-12">
      <TypographyLarge>Not found Page</TypographyLarge>
      <Button onClick={goBack}>Go back</Button>
    </MaxWidthDivFrame>
  );
}
