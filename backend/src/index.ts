import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import dotenv from "dotenv";
import { startServer } from "./utils/start";
import { schema } from "./graphql/schema";
import { context } from "./graphql/context";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config();

// Intialize the server
const server = new ApolloServer({
    schema,
    context,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

// Starting Server
startServer(server);
