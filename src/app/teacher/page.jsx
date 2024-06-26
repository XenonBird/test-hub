import { CustomCardForView } from '@/components/custom-cards/custom-card-for-view';
import { MaxWidthDivFrame } from '@/components/frames';
import { Button } from '@/components/ui/button';
import { TypographyH2 } from '@/components/ui/typography';
import Link from 'next/link';

const DashboardPage = () => {
  return (
    <main>
      <MaxWidthDivFrame className="pb-0">
        <TypographyH2 className="p-0 border-b-0">
          <span className="text-slate-500">Welcome,</span>{' '}
          <strong className="text-slate-900">Issac Newton</strong>
        </TypographyH2>
      </MaxWidthDivFrame>

      <MaxWidthDivFrame className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
        <CustomCardForView
          title="Geography test - class VIII"
          description="India, Asia & South Africa"
          from="Sir Issac Newton"
          fields={[
            { name: 'questions', value: '100' },
            { name: 'attendees', value: '17' },
            { name: 'average', value: '45.78' },
            { name: 'date', value: '13 July' },
          ]}
          buttonBox={
            <Button className="w-full">
              <Link href="/teacher/exams/1234">Open</Link>
            </Button>
          }
        />
        <CustomCardForView
          title="Geography test - class VIII"
          description="India, Asia & South Africa"
          from="Sir Issac Newton"
          fields={[
            { name: 'questions', value: '100' },
            { name: 'attendees', value: '17' },
            { name: 'average', value: '45.78' },
            { name: 'date', value: '13 July' },
          ]}
          buttonBox={
            <Button className="w-full">
              <Link href="/teacher/exams/1234">Open</Link>
            </Button>
          }
        />
        <CustomCardForView
          title="Geography test - class VIII"
          description="India, Asia & South Africa"
          from="Sir Issac Newton"
          fields={[
            { name: 'questions', value: '100' },
            { name: 'attendees', value: '17' },
            { name: 'average', value: '45.78' },
            { name: 'date', value: '13 July' },
          ]}
          buttonBox={
            <Button className="w-full">
              <Link href="/teacher/exams/1234">Open</Link>
            </Button>
          }
        />
      </MaxWidthDivFrame>

      <MaxWidthDivFrame className="pt-0">
        <Button size="lg" className="w-full" asChild>
          <Link href="/teacher/exams">View all</Link>
        </Button>
      </MaxWidthDivFrame>
    </main>
  );
};

export default DashboardPage;
