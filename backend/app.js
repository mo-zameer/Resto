import express from "express"
import dotenv from "dotenv";
import cors from "cors"; //connecting BE with FE
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express()
dotenv.config({path:'./config/config.env'})

//Middlewares
app.use(
    cors({
      origin: [process.env.FRONTEND_URL], //writing the frontend url
      methods: ["POST"], //we are sending data to frontend 
      credentials: true, //sending data through POST
    })
);
app.use(express.json()); //converts string data to json object
app.use(express.urlencoded({ extended: true })); //type of data should be urlencoded
app.use("/api/v1/reservation", reservationRouter); //path can be anything - here e=were using the route

/*
app.get("/", (req, res, next)=>{
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  })
})*/

//DB Connect
dbConnection();

//ErrorHandler
app.use(errorMiddleware);

export default app