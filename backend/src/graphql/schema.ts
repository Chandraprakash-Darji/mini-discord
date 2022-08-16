import { makeSchema } from "nexus";
import * as types from "./types";

export const schema = makeSchema({
    types, // GraphQL schema types
    outputs: {
        schema: `${process.cwd()}/src/graphql/config/schema.graphql`, // GraphQL schema file of type .graphql
        typegen: `${process.cwd()}/src/graphql/config/nexus-typegen.ts`, // typeScript type definitions for all types in your GraphQL schema.
    },
});
