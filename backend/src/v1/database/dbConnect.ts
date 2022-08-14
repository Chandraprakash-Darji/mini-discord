import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function dbConnect() {
    if (!process.env.DB_URL) return;
    mongoose
        .connect(process.env.DB_URL, {
            //   these are options to ensure that the connection is done properly
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions)
        .then(() => {
            console.log("Successfully connected to MongoDB Atlas!");
        })
        .catch((error) => {
            console.log("Unable to connect to MongoDB Atlas!");
            console.error(error);
        });
}

export default dbConnect;
