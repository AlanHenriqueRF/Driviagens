import express from "express";
import validateSchema from "../middlewares/validateschema.js";
import { passengersSchema } from "../schemas/passengers.schema.js";
import { NewPassenger } from "../controllers/passenger.controller.js";

const passengerRoute = express()

passengerRoute.post('/passengers',validateSchema(passengersSchema),NewPassenger)
/* passengerRoute.get('/passengers/travels',) */


export default passengerRoute