import { TestReportCard } from '@/components/custom-cards/report-card';
import { MaxWidthDivFrame } from '@/components/frames';
import { Button } from '@/components/ui/button';
import { TypographyH2, TypographyLead } from '@/components/ui/typography';
import Link from 'next/link';

const studentData = {
  name: 'Jhon doe',
  upcomingExams: [
    {
      id: '12345',
      name: 'history chapter 1',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      marks: 100,
      from: 'The Good Teacher',
      date: '12 April',
    },
    {
      id: '12345',
      name: 'history chapter 1',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      marks: 100,
      from: 'The Good Teacher',
      date: '12 April',
    },
    {
      id: '12345',
      name: 'history chapter 1',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      marks: 100,
      from: 'The Good Teacher',
      date: '12 April',
    },
  ],
  performance: { average: 45.67 },
};

const StudentDashboardPage = () => {
  const { name, upcomingExams, performance } = studentData;

  return (
    <main>
      <MaxWidthDivFrame className="pb-0">
        <TypographyH2 className="p-0 border-b-0">
          <span className="text-slate-500">Welcome,</span>{' '}
          <strong className="text-slate-900">{name}</strong>
        </TypographyH2>
      </MaxWidthDivFrame>

      <MaxWidthDivFrame className="pb-0 mt-8">
        <TypographyLead>Upcoming Exams</TypographyLead>
      </MaxWidthDivFrame>
      <MaxWidthDivFrame className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
        {upcomingExams.map((exam, index) => (
          <TestReportCard
            key={'exam_' + index}
            title={exam.name}
            description={exam.description}
            from={exam.from}
            href={`/student/exams/${exam.id}`}
            fields={[
              { name: 'Full marks', value: exam.marks || 0 },
              { name: 'Date', value: exam.date },
            ]}
          />
        ))}
      </MaxWidthDivFrame>
      <MaxWidthDivFrame className="pt-0">
        <Button variant="secondary" asChild>
          <Link href="/student/exams/upcomings">more...</Link>
        </Button>
      </MaxWidthDivFrame>
    </main>
  );
};

export default StudentDashboardPage;
