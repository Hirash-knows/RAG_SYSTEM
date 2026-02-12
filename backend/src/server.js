import "dotenv/config";
import {Command} from "commander";
import app from "./app.js";

// import { connectMongo } from '../db/mongo.js';
import { connectNATS } from '../nats/client.js';

const program = new Command();

const PORT = process.env.NODE_PORT || 5000;
const URL = process.env.NODE_URL || "localhost";
const NATS_PORT=process.env.NAT_PORT;


program
    .option("-p, --port <number>", "Port Number")
    .option("-i --ip <string>", "Server IP")
    

program.parse(process.argv);
const options = program.opts();


export const finalPort = Number(options.port) || PORT;
export const finalIP = options.ip || URL;
const userNAT_IP = `nats://${finalIP}:${NATS_PORT}`;

// await connectMongo(
//   process.env.MONGO_URI,
//   process.env.MONGO_DB
// );

const natsIP = userNAT_IP || process.env.NATS_URL;

await connectNATS(natsIP);
console.log("Connected to NATS");


app.listen(finalPort, finalIP, ()=>{
    console.log(`Server listening on http://${finalIP}:${finalPort}`)
});


 
