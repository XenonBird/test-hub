'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import { addQuestion } from '@/server-actions/add-exam';

import { QuestionAddingCard } from '@/components/custom-cards/custom-card-for-question';
import { MaxWidthDivFrame } from '@/components/frames';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  TypographyH3,
  TypographyLarge,
  TypographyLead,
} from '@/components/ui/typography';
import toast from 'react-hot-toast';
import { SubmitButton } from '@/components/custom-button/custom-button-form-submit';
import { useRouter } from 'next/navigation';

const CreateExamPage = () => {
  const router = useRouter();

  const [addQuestionState, addQuestionFormAction] = useFormState(
    addQuestion,
    null
  );

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    questions: [
      {
        question: '',
        options: [{ option: '', isCorrect: false }],
      },
    ],
  });

  const handleChange = (e, index, optionIndex) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData };

    if (name === 'question') {
      updatedFormData.questions[index][name] = value;
    } else if (name === 'option') {
      updatedFormData.questions[index].options[optionIndex][name] = value;
    } else if (name === 'isCorrect') {
      updatedFormData.questions[index].options = updatedFormData.questions[
        index
      ].options.map((opt, i) =>
        i === optionIndex
          ? { ...opt, isCorrect: !opt.isCorrect }
          : { ...opt, isCorrect: false }
      );
    }

    setFormData(updatedFormData);
  };

  const handleAddQuestion = () => {
    setFormData({
      ...formData,
      questions: [
        ...formData.questions,
        {
          question: '',
          options: [{ option: '', isCorrect: false }],
        },
      ],
    });
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions.splice(index, 1);
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleAddOption = (index) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index].options.push({ option: '', isCorrect: false });
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleRemoveOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setFormData({ ...formData, questions: updatedQuestions });
  };

  if (addQuestionState?.data) router.push('/teacher/exams');

  return (
    <form action={addQuestionFormAction} style={{ all: 'unset' }}>
      <textarea
        name="exam-data-json"
        value={JSON.stringify(formData)}
        className="hidden"
        readOnly
      />

      {/* <pre className="m-4 p-2 bg-slate-900 text-slate-200 overflow-x-scroll">
        {JSON.stringify(addQuestionState, null, 2)}
      </pre> */}

      <MaxWidthDivFrame className="pb-0">
        <TypographyH3 className="w-full text-center">
          Create New Exam
        </TypographyH3>
      </MaxWidthDivFrame>

      <MaxWidthDivFrame className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center items-start">
        {/* <QuestionAddingCard /> */}
        <div className="col-span-full w-full">
          {addQuestionState?.error && (
            <p className="text-red-500 text-center p-2">
              {addQuestionState?.error?.message}{' '}
              {/* {addQuestionState?.error?.path[0] === 'questions' &&
                `at question no. ${addQuestionState?.error?.path[1] + 1}`} */}
            </p>
          )}

          <Card className="mx-auto max-w-md">
            <CardContent>
              <div className="mb-4">
                <label htmlFor="title" className="block font-bold mb-2">
                  Exam Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="description" className="block font-bold mb-2">
                  Exam Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* <h2 className="text-xl font-bold mb-4">Questions</h2> */}

        {formData.questions.map((question, questionIndex) => (
          <QuestionAddingCard
            key={'q_' + questionIndex}
            question={question}
            questionIndex={questionIndex}
            handleRemoveQuestion={handleRemoveQuestion}
            handleChange={handleChange}
            handleRemoveOption={handleRemoveOption}
            handleAddOption={handleAddOption}
            handleAddQuestion={handleAddQuestion}
          />
        ))}

        <div className="col-span-full mx-auto">
          <SubmitButton
            size="lg"
            className="my-8 bg-green-600 hover:bg-green-700"
          />
        </div>
      </MaxWidthDivFrame>
    </form>
  );
};

export default CreateExamPage;
