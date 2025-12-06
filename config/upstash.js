import {Client as workerClient}  from '@upstash/qstash/workers'


import {QSTASH_TOKEN, STASH_URL} from './env.js';
export const qstashWorker = workerClient ({
baseUrl: STASH_URL,
token:QSTASH_TOKEN



})