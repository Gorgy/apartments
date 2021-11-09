import { Schema, model } from 'mongoose';
import { IUsersItem } from './types';

const UsersSchema = new Schema<IUsersItem>({
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

export const Users = model<IUsersItem>('Users', UsersSchema);

export * from './types';
