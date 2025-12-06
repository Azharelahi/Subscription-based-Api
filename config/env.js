import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, DATABASE_URI, NODE_ENV, JWT_SECRET, EXPIRY_TIME,ARCJET_KEY,ARCJET_ENV,STASH_URL,QSTASH_TOKEN } =
  process.env;
