import express from "express";
import postRoute from "../routes/postRoute.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const imgPath = path.join(__dirname,"../../project_root_v2/project_root_v2/data/qwen2_q4_vit_14/images");

app.use(express.json());
app.use(cors());
app.use("/photos", express.static(imgPath));

app.use(postRoute);

export default app;
