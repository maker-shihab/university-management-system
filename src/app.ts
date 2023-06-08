import cors from "cors";
import express, { Application, Request, Response } from "express";
const app: Application = express();
const port = 5000;

app.use(cors());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Working successfully");
});

export default app;
