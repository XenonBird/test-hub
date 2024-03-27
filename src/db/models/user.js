import mongoose from 'mongoose';

// Define user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  hash: {
    type: String,
    required: [true, 'Hashed password is required'],
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'both', 'admin'],
    default: 'student',
  },
  exams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exam',
    },
  ],
  teacherIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  studentIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// Create User model
export const User = mongoose.models.User || mongoose.model('User', userSchema);
