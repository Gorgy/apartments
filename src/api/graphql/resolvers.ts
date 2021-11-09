import { IResolvers } from '@graphql-tools/utils';

import { IUserItem } from '../routes/users';
import { Users } from '../models';

const resolvers: IResolvers = {
  Query: {
    getUsers: () =>
      new Promise((resolve, reject) =>
        Users.find((err, users) => (err ? reject(err) : resolve(users))),
      ),
  },
  Mutation: {
    addUser: async (_: unknown, { data }: { data: IUserItem }) => {
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
