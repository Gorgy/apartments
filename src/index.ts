import { config as configDotenv } from 'dotenv';
import * as Hapi from '@hapi/hapi';
import {
  ApolloServer,
  ApolloServerPluginStopHapiServer,
} from 'apollo-server-hapi';

import dbConnect from './database';
import { resolvers, typeDefs } from './api/graphql';

configDotenv();
dbConnect();

async function startApolloServer() {
  const app = Hapi.server({
    port: process.env.PORT || 4000,
    host: process.env.HOST || 'localhost',
  });
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginStopHapiServer({ hapiServer: app })],
  });
  await server.start();
  await server.applyMiddleware({ app, path: '/' });
  await app.start();
  // console.log(`Server running at: ${server.uri}:${server.port}`);
  console.log(`App running at: ${app.info.uri}`);
  console.log(`Apollo Studio running at: ${app.info.uri}`);
}

startApolloServer();
