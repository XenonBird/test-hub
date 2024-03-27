import { z } from 'zod';

export const emailValidation = z
  .string({
    required_error: 'Email is required',
    invalid_type_error: 'Invalid email address',
  })
  .toLowerCase()
  .email({ message: 'Invalid email' })
  .max(50, { message: 'Email is too long' })
  .min(5, { message: 'Email is too short' });

export const passwordValidation = z
  .string({
    required_error: 'Password is required',
    invalid_type_error: 'Invalid password format',
  })
  .min(6, { message: 'Password must be at least 6 characters long' })
  .max(50, { message: 'Password must not exceed 50 characters' });

export const usernameValidation = z
  .string({
    required_error: 'Name is required',
    invalid_type_error: 'Invalid name format',
  })
  .min(3, { message: 'Name must be at least 3 characters long' })
  .max(50, { message: 'Name must not exceed 50 characters' });

export const roleValidation = z
  .enum(['student', 'teacher', 'both', 'admin'], {
    invalid_type_error: 'Invalid role',
  })
  .default('student');
