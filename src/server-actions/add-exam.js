'use server';

import { connectToDatabase } from '@/db/conn';
import { examSchema } from '@/zod/exam-schema';
import { Exam } from '@/db/models/exam';
import { z } from 'zod';
import { getTokenDataFromCookies } from '@/lib/token';
import mongoose from 'mongoose';
import { isValidObjectId } from 'mongoose';
import { User } from '@/db/models/user';

export async function addQuestion(state, formData) {
  try {
    const token = await getTokenDataFromCookies();
    if (token.error) throw new Error('Please login again');

    const userId = token.data._id;
    if (!isValidObjectId(userId)) throw new Error('Invalid id, please login');

    const incomingExam = JSON.parse(formData.get('exam-data-json'));
    incomingExam.createdBy = new mongoose.Types.ObjectId(userId);

    const exam = examSchema.parse(incomingExam);

    // Connect to the database
    await connectToDatabase();

    const newExam = new Exam(exam);
    await newExam.save();

    const user = await User.findById(token.data._id);
    user.exams.push(newExam._id);
    await user.save();

    console.log(`🟢 New Exam: "${newExam.title}" by ${newExam.createdBy}`);

    // console.log({ newExam });
    return {
      message: 'Exam paper added successfully',
      data: { ...exam, _id: newExam._id, createdBy: user.username },
    };
  } catch (error) {
    console.log('🔴 ', JSON.stringify(error, null, 2));
    if (error.name === 'ZodError') {
      // If the error is a Zod validation
      return {
        // error: error.flatten().fieldErrors,
        error: error.issues[0],
        status: 400,
      };
    } else {
      // Handle other errors
      console.error('Error adding exam paper:', error);
      return {
        error: { message: 'An error occurred while adding the exam paper' },
        status: 500,
      };
    }
  }
}
