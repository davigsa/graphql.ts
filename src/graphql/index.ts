import { ApolloServer } from "apollo-server-express";

import typeDefs from "@schemas/index";
import resolvers from "@resolvers/index";

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});
