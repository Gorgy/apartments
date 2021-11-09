import type { IResolvers } from '@graphql-tools/utils';
import { ApolloError } from 'apollo-server-hapi';

import { Users } from '../models';

import type { IResolversArguments } from './types';

/**
 * Resolvers function:
 * (source: TSource, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TReturn;
 */
const resolvers: IResolvers<
  unknown,
  unknown,
  IResolversArguments,
  Promise<unknown>
> = {
  Query: {
    getUsers: async () => {
      try {
        const response = await Users.find();
        return response;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  Mutation: {
    addUser: async (_, { data }) => {
      const user = new Users({
        apartment: data.apartment,
        firstName: data.firstName,
        lastName: data.lastName,
        account: data.account,
        isAdmin: data.isAdmin || false,
      });

      return new Promise((resolve, reject) =>
        user.save((err: Error) =>
          err
            ? reject({
                code: 404,
                message: JSON.stringify(err),
                success: false,
                user: null,
              })
            : resolve({
                code: 200,
                message: JSON.stringify(err),
                success: true,
                user,
              }),
        ),
      );
    },
  },
};

export default resolvers;
