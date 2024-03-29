import {
  TypographyH4,
  TypographyP,
  TypographySmall,
} from '@/components/ui/typography';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function CustomCardForView({
  title,
  description,
  from,

  fields,

  buttonBox,
}) {
  return (
    <Card className="w-full">
      {title && description && from && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
          {from && (
            <TypographySmall className="text-right">~ {from}</TypographySmall>
          )}
        </CardHeader>
      )}

      {fields?.length && (
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
      )}

      {buttonBox && <CardFooter>{buttonBox}</CardFooter>}
      {/* <CardFooter className="flex justify-between p-0">
          <Button className="w-full">
            <Link href={href}>Open</Link>
          </Button>
        </CardFooter> */}
    </Card>
  );
}
