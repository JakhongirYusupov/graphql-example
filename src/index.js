import express from "express";
import { ApolloServer } from "apollo-server-express";
import modules from "./modules/index.js";

const PORT = process.env.PORT || 4000;

const app = express();
app.get("/", (req, res) => {
  res.send("okay");
});

(async function () {
  const server = new ApolloServer({ modules });

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });
  console.log(
    `Apollo server is running at http://localhost:${PORT}${server.graphqlPath}`
  );
})();

app.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}`)
);
