import { Card, CardContent } from '@/components/ui/card';
import {
  TypographyH3,
  TypographyLarge,
  TypographyLead,
} from '@/components/ui/typography';
import { MaxWidthDivFrame } from '@/components/frames';
import { Exam } from '@/db/models/exam';

export default async function ExamViewPage({ params }) {
  const { examId } = params;

  const examData = await Exam.findById(examId);

  if (!examData) {
    return <div>Error fetching exam data.</div>;
  }

  return (
    <MaxWidthDivFrame>
      <TypographyH3 className="w-full text-center mb-4">
        {examData.title}
      </TypographyH3>
      <Card>
        <CardContent>
          <TypographyLead className="mb-4">
            {examData.description}
          </TypographyLead>
          {examData.questions.map((question, index) => (
            <div key={index} className="mb-8">
              <TypographyLarge className="mb-2">{`${index + 1}. ${
                question.question
              }`}</TypographyLarge>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="ml-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`question${index}`}
                      value={option.option}
                      disabled
                      checked={option.isCorrect}
                      className="mr-2"
                    />
                    {option.option}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </CardContent>
      </Card>
    </MaxWidthDivFrame>
  );
}
