'use client';

import { QuestionAddingCard } from '@/components/custom-cards/custom-card-for-question';
import { MaxWidthDivFrame } from '@/components/frames';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  TypographyH3,
  TypographyLarge,
  TypographyLead,
} from '@/components/ui/typography';
import { useState } from 'react';

const CreateExamPage = () => {
  const [formData, setFormData] = useState({
    examTitle: '',
    examDescription: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit the form data to the server
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ all: 'unset' }}>
      <MaxWidthDivFrame className="pb-0">
        <TypographyH3 className="w-full text-center">
          Create New Exam
        </TypographyH3>
      </MaxWidthDivFrame>

      <MaxWidthDivFrame className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center items-start">
        {/* <QuestionAddingCard /> */}
        <div className="col-span-full w-full">
          <Card className="mx-auto max-w-md">
            <CardContent>
              <div className="mb-4">
                <label htmlFor="examTitle" className="block font-bold mb-2">
                  Exam Title
                </label>
                <input
                  type="text"
                  id="examTitle"
                  name="examTitle"
                  value={formData.examTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, examTitle: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label
                  htmlFor="examDescription"
                  className="block font-bold mb-2"
                >
                  Exam Description
                </label>
                <textarea
                  id="examDescription"
                  name="examDescription"
                  value={formData.examDescription}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      examDescription: e.target.value,
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
          <Button
            size="lg"
            type="submit"
            className="my-8 bg-green-600 hover:bg-green-700"
          >
            Create Exam
          </Button>
        </div>
      </MaxWidthDivFrame>
    </form>
  );
};

export default CreateExamPage;
