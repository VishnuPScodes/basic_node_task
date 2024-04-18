import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export const User = mongoose.model('user', userSchema);
