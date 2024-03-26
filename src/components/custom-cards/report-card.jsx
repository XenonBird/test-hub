import {
  TypographyH4,
  TypographyP,
  TypographySmall,
} from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

export function TestReportCard({ title, description, from, fields, href }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <TypographySmall className="text-right">~ {from}</TypographySmall>
      </CardHeader>

      {fields?.length ? (
        <CardContent>
          {/* <Progress value={percentage} className="mb-4" /> */}
          <div className="grid grid-cols-2 gap-4">
            {fields.map((field, index) => (
              <Card
                key={'field' + index}
                className="text-center flex flex-col items-center p-2 gap-0"
              >
                <TypographyH4>{field.value}</TypographyH4>
                <TypographyP className="mt-0">{field.name}</TypographyP>
              </Card>
            ))}
          </div>
        </CardContent>
      ) : (
        <></>
      )}

      <CardFooter className="flex justify-between">
        {/* <Button variant="outline">
          <i className="fi fi-rr-menu-dots"></i>
        </Button> */}
        <Button className="w-full">
          <Link href={href}>
            Open
            {/* <i className="fi fi-rr-overview"></i> */}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
