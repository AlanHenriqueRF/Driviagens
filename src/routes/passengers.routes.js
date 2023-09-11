import express from "express";
import validateSchema from "../middlewares/validateschema.js";
import { passengersSchema } from "../schemas/passengers.schema.js";
import { NewPassenger, getallPassgenrsTravels } from "../controllers/passenger.controller.js";
import { limiter } from "../middlewares/ratelimit.js";

const passengerRoute = express()

passengerRoute.post('/passengers',validateSchema(passengersSchema),NewPassenger)
passengerRoute.use(limiter)
passengerRoute.get('/passengers/travels',getallPassgenrsTravels)


export default passengerRoute