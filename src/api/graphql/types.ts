import { IUsersItem } from '../models';

export type IMutationCreateUserData = IUsersItem;

export interface IResolversArguments {
  data: IMutationCreateUserData;
}
