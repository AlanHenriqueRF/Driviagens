import express from "express";
import passengerRoute from "./passengers.routes.js";
import citiesRoute from "./cities.routes.js";
import flightRoutes from "./flights.routes.js";

const router = express()

router.use(passengerRoute);
router.use(citiesRoute);
router.use(flightRoutes);

export default router