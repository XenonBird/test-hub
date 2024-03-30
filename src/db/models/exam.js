import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [
    {
      option: { type: String, required: true },
      isCorrect: { type: Boolean, required: true, default: false },
    },
  ],
  // difficulty: {
  //   type: String,
  //   enum: ['easy', 'medium', 'hard'],
  //   required: true,
  // },
  explanation: { type: String },
  tags: [{ type: String }],
});

const examSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    subject: { type: String },
    // duration: { type: Number, required: true }, // Duration in minutes
    // passingScore: { type: Number, required: true }, // Minimum score to pass the exam
    questions: [questionSchema],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    examinees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    // created_at: { type: Date, default: Date.now },
    // updated_at: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Create Exam model
export const Exam = mongoose.models.Exam || mongoose.model('Exam', examSchema);
