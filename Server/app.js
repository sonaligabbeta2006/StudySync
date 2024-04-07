import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import morgan from "morgan";

import errorMiddlware from "./middlewares/error.middleware.js";
import userRoutes from "./routes/user.Routes.js";
import courseRoutes from "./routes/course.Routes.js";
import miscRoutes from "./routes/miscellanous.routes.js";
import paymentRoutes from './routes/payment.routes.js'

config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/ping", function (_req, res) {
  res.send("Pong");
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1", miscRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.all("*", (_req, res) => {
  res.status(404).send("OOPS!!  404 page not found ");
});

app.get("/", (req, res) => {
  res.send("<h1>hii</h1>");
});
app.use(errorMiddlware);
export default app;
