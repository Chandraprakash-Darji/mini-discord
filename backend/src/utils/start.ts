import { ApolloServer } from "apollo-server";
import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function startServer(server: ApolloServer) {
    if (!process.env.DB_URL) return;
    mongoose
        .connect(process.env.DB_URL, {
            //   these are options to ensure that the connection is done properly
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions)
        .then(() => {
            console.log("Successfully connected to MongoDB Atlas!");
            return server.listen({ port: process.env.PORT || 5000 });
        })
        .then((res) => {
            console.log(`Server running at ${res.url}`);
        })
        .catch((error) => {
            console.log("Unable to connect to MongoDB Atlas!");
            console.error(error);
        });
}
