import mongoose from 'mongoose';

// Define user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [50, 'Username must not exceed 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        // Basic email format validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Invalid email address',
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
  },
  role: {
    type: String,
    enum: ['student', 'teacher'],
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
export const User = mongoose.model('User', userSchema);
