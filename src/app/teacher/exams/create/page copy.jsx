'use client';

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
        <Card className="col-span-full w-full">
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
              <label htmlFor="examDescription" className="block font-bold mb-2">
                Exam Description
              </label>
              <textarea
                id="examDescription"
                name="examDescription"
                value={formData.examDescription}
                onChange={(e) =>
                  setFormData({ ...formData, examDescription: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
          </CardContent>
        </Card>

        {/* <h2 className="text-xl font-bold mb-4">Questions</h2> */}

        {formData.questions.map((question, questionIndex) => (
          <Card key={'q_' + questionIndex}>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <label
                  htmlFor={`question-${questionIndex}`}
                  className="font-bold"
                >
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
                    onChange={(e) =>
                      handleChange(e, questionIndex, optionIndex)
                    }
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
                    onChange={(e) =>
                      handleChange(e, questionIndex, optionIndex)
                    }
                    className="hidden"
                  />

                  <Button
                    variant="destructive"
                    size="sm"
                    type="button"
                    onClick={() =>
                      handleRemoveOption(questionIndex, optionIndex)
                    }
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
          </Card>
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
