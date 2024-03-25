import cookieParser from "cookie-parser";
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import morgan from 'morgan'; 

import userRoutes from './routes/user.Routes.js'

config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        "origin": "https://lms-client-50l0.onrender.com",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204,
        "credentials": true,
    })
  );

app.use(cookieParser());

app.use(morgan('dev'));


app.use('./api/v1/user',userRoutes)


export default app;