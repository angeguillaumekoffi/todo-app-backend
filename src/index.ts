import express from "express";
import { ApolloServer } from "apollo-server-express";
import { resolvers, typeDefs } from "./graphql";
import { PORT } from "./config";

/**
 * Create an express server and apply the Apollo Server middleware
 */
const app = express();


/**
 * Create an Apollo server instance.
 */
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}


startServer();

app.get("/", (req, res) => {
  console.log("Apollo GraphQL Express server is ready");
});

app.listen({ port: PORT }, () => {
  console.log(
    `Server is running at http://localhost:${PORT}${server.graphqlPath}`
  );
});
