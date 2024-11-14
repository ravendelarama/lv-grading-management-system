import env from "@/constants/environment";
import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

const client = global.prisma || new PrismaClient();

if (env.mode == "development") {
    global.prisma = client;
}

export const db = client;