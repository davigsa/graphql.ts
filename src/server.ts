import express from "express";
import cors from "cors";

import { server } from "./graphql";
require("dotenv").config();

const app = express();

app.use("*", cors());

server.applyMiddleware({ app });

app.listen(process.env.PORT, (): void =>
  console.log(
    `\n🚀 GraphQL is now running on http://localhost:${process.env.PORT}${server.graphqlPath}`
  )
);
export default server;
