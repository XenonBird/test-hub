import { cookies } from 'next/headers';
import Link from 'next/link';

import { CustomCardForView } from '@/components/custom-cards/custom-card-for-view';
import { MaxWidthDivFrame } from '@/components/frames';
import { User } from '@/db/models/user';
import { getTokenDataFromCookies } from '@/lib/token';
import { Button } from '@/components/ui/button';
// import { monthNames } from '@/lib/utils';

export function CardComponent({ exam, name }) {
  const dateString = new Date(exam.createdAt).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: '2-digit',
  });

  const ButtonsList = (
    <Button className="w-full" asChild>
      <Link href={`/teacher/exams/${exam.id}`}>Open</Link>
    </Button>
  );

  return (
    <CustomCardForView
      title={exam.title}
      description={exam.title}
      from={name + ' (You)'}
      fields={[
        { name: 'Questions', value: exam.questions.length },
        { name: 'Examinees', value: exam.examinees.length },
        { name: 'Time/question', value: '1 minute' },
        {
          name: 'Date',
          value: dateString,
        },
      ]}
      buttonBox={ButtonsList}
    />
  );
}

export default async function TeacherExamsListPage() {
  cookies();
  const tokenData = await getTokenDataFromCookies();
  const user = await User.findById(tokenData?.data?._id).populate('exams');

  return (
    <main>
      {/* <pre className="m-4 p-2 bg-slate-900 text-slate-200 overflow-x-scroll">
        {JSON.stringify(user, null, 2)}
      </pre> */}

      <MaxWidthDivFrame className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
        {user.exams.map((exam, i) => (
          <CardComponent key={i} exam={exam} name={user.username} />
        ))}
      </MaxWidthDivFrame>
    </main>
  );
}
