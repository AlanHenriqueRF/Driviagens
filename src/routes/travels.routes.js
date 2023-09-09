import express from "express";
import validateSchema from "../middlewares/validateschema.js";
import { travelsSchema } from "../schemas/travels.schema.js";
import { NewTravel } from "../controllers/travels.controller.js";

const travelsRoutes = express()

travelsRoutes.post('/travels',validateSchema(travelsSchema),NewTravel)

export default travelsRoutes