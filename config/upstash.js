import { Client } from "@upstash/qstash";
import { QSTASH_TOKEN, STASH_URL } from "./env.js";

export const workFlowClient = new Client({
  token: QSTASH_TOKEN,
  baseUrl: STASH_URL,
});
