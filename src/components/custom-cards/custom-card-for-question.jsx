import { TypographySmall } from '@/components/ui/typography';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';

export function QuestionAddingCard({
  title,
  description,
  from,

  question,
  questionIndex,
  handleRemoveQuestion,
  handleChange,
  handleRemoveOption,
  handleAddOption,
  handleAddQuestion,

  buttonBox,
}) {
  return (
    <Card className="w-full">
      {(title || description || from) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
          {from && (
            <TypographySmall className="text-right">~ {from}</TypographySmall>
          )}
        </CardHeader>
      )}

      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <label htmlFor={`question-${questionIndex}`} className="font-bold">
            Question {questionIndex + 1}
          </label>
          <Button
            variant="destructive"
            size="sm"
            type="button"
            onClick={() => handleRemoveQuestion(questionIndex)}
            className="aspect-square"
          >
            <i className="fi fi-rr-cross"></i>
          </Button>
        </div>

        <textarea
          id={`question-${questionIndex}`}
          name="question"
          placeholder="Your question ...?"
          value={question.question}
          onChange={(e) => handleChange(e, questionIndex)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
        />

        {question.options.map((option, optionIndex) => (
          <div key={optionIndex} className="flex items-center mb-2">
            <input
              type="text"
              name="option"
              value={option.option}
              onChange={(e) => handleChange(e, questionIndex, optionIndex)}
              placeholder={`Option ${optionIndex + 1}`}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mr-2"
            />

            <Button
              variant={option.isCorrect ? 'default' : 'secondary'}
              className="aspect-square mr-2 cursor-pointer"
              asChild
            >
              <label htmlFor={`id_${questionIndex}_${optionIndex}`}>
                {option.isCorrect ? (
                  <i className="fi fi-rr-check-circle"></i>
                ) : (
                  <i className="fi fi-rr-circle"></i>
                )}
              </label>
            </Button>
            <input
              type="checkbox"
              name="isCorrect"
              id={`id_${questionIndex}_${optionIndex}`}
              checked={option.isCorrect}
              onChange={(e) => handleChange(e, questionIndex, optionIndex)}
              className="hidden"
            />

            <Button
              variant="destructive"
              size="sm"
              type="button"
              onClick={() => handleRemoveOption(questionIndex, optionIndex)}
              className="aspect-square"
            >
              <i className="fi fi-rr-cross"></i>
            </Button>
          </div>
        ))}

        <div className="w-full flex justify-between mt-6">
          <Button
            variant="secondary"
            type="button"
            onClick={() => handleAddOption(questionIndex)}
          >
            <p className="flex items-center">
              <i className="fi fi-rr-plus mr-2"></i>
              <span>Add Option</span>
            </p>{' '}
          </Button>

          <Button type="button" onClick={handleAddQuestion}>
            <p className="flex items-center">
              <i className="fi fi-rr-plus mr-2"></i>
              <span>Add Question</span>
            </p>
          </Button>
        </div>
      </CardContent>

      {buttonBox && <CardFooter>{buttonBox}</CardFooter>}
    </Card>
  );
}
