import express from "express";
import validateSchema from "../middlewares/validateschema.js";
import { flightsSchema } from "../schemas/flights.schema.js";
import { newflight } from "../controllers/flights.controller.js";

const flightRoutes = express();

flightRoutes.post('/flights', validateSchema(flightsSchema), newflight)

export default flightRoutes