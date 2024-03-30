import { z } from 'zod';
import mongoose from 'mongoose';

const questionSchema = z.object({
  question: z.string().min(1, 'Question is required'),
  options: z
    .array(
      z.object({
        option: z.string().min(1, 'Option is required'),
        isCorrect: z.boolean().default(false),
      })
    )
    .min(2, 'At least two options are required'),
  // difficulty: z.enum(['easy', 'medium', 'hard'], {
  //   errorMap: (issue, ctx) => {
  //     return { message: `Difficulty must be one of 'easy', 'medium', or 'hard'` };
  //   },
  // }),
  explanation: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const examSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  subject: z.string().optional(),
  questions: z
    .array(questionSchema)
    .min(1, 'At least one question is required'),
  createdBy: z.instanceof(mongoose.Types.ObjectId, {
    errorMap: (issue, ctx) => {
      return { message: 'Invalid createdBy value' };
    },
  }),
  examinees: z
    .array(
      z.instanceof(mongoose.Types.ObjectId, {
        errorMap: (issue, ctx) => {
          return { message: 'Invalid examinee value' };
        },
      })
    )
    .optional(),
  // created_at: z.date().default(() => new Date()),
  // updated_at: z.date().default(() => new Date()),
});

export { questionSchema, examSchema };
