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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import Link from 'next/link';

export function CardWithDialog({ title, description, from, fields, href }) {
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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">
              Open
              {/* <i className="fi fi-rr-overview"></i> */}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
              <TypographySmall>~ {from}</TypographySmall>
              <TypographyH4 className="py-4">Are you ready?</TypographyH4>
            </DialogHeader>
            <DialogFooter>
              <Button className="w-full" asChild>
                <Link href={href}>
                  Start
                  {/* <i className="fi fi-rr-overview"></i> */}
                </Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
