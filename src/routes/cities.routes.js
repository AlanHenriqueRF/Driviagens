import express from "express";
import validateSchema from "../middlewares/validateschema.js";
import { citiesSchema } from "../schemas/citie.schema.js";
import { NewCity } from "../controllers/cities.controller.js";

const citiesRoute = express();

citiesRoute.post('/cities',validateSchema(citiesSchema),NewCity)

export default citiesRoute