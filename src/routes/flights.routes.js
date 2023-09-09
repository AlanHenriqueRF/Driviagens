import express from "express";
import validateSchema from "../middlewares/validateschema.js";
import { flightsSchema } from "../schemas/flights.schema.js";
import { newflight, takeFlights } from "../controllers/flights.controller.js";
import Takequeries from "../middlewares/takequery.js";

const flightRoutes = express();

flightRoutes.post('/flights', validateSchema(flightsSchema), newflight)
flightRoutes.get('/flights',Takequeries,takeFlights)

export default flightRoutes