import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import { handleError, ValidationError } from "./uttils/errors";
import rateLimit from "express-rate-limit";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(json());
app.use(
  rateLimit({
    windowMs: 5 * 60 * 1000, // 5minutes
    max: 100, // limit each IP to 100 requests per 5min
  })
);

// Routes

app.get("/", async (req, res) => {
  throw new ValidationError("Deam!!!");
});
app.use(handleError);

app.listen(3001, "0.0.0.0", () => {
  console.log("Listining on port http://localhost:3001");
});
