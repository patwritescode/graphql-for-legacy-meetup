import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";

const app = express();
app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    graphqlExpress((req) => ({
        schema: null,
        context:  () => {
            return null;
        }
    }))
);
app.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
app.listen(3000);