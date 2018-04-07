import queries from "./root/queries";
import productResolver from "./product/resolver";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";

const resolvers = Object.assign(
    queries,
    productResolver
);
const typeDefs = importSchema("./schema/root/schema.graphql");

export default makeExecutableSchema({ resolvers, typeDefs });