import dotenv from "dotenv";
import { Enviroment } from "../types";

dotenv.config();

const env: Enviroment = {
    mode: process.env.NODE_ENV!,
    port: process.env.PORT!,
    database: process.env.DATABASE_URL!,
    appUrl: process.env.APP_URL!,
}

export default env;