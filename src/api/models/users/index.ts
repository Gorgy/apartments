import { Schema, model } from 'mongoose';

const UsersSchema = new Schema({
  apartment: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  account: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

export const Users = model('Users', UsersSchema);
