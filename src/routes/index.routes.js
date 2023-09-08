import express from "express";
import passengerRoute from "./passengers.routes.js";
import citiesRoute from "./cities.routes.js";

const router = express()

router.use(passengerRoute);
router.use(citiesRoute);

export default router