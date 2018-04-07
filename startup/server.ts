import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import container from "./container";
import { IContextProviderType, IContextProvider } from "../core";
import schema from "../schema";

const app = express();
app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    graphqlExpress((req) => ({
        schema,
        context:  () => {
            return container.get<IContextProvider>(IContextProviderType);
        }
    }))
);
app.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
app.listen(3000);