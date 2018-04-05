import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import container from "./container";
import { ContextProviderType, IContextProvider } from "../core";

const app = express();
app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    graphqlExpress((req) => ({
        schema: null,
        context:  () => {
            return container.get<IContextProvider>(ContextProviderType);
        }
    }))
);
app.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
app.listen(3000);