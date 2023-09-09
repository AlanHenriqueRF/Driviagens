import express from "express";
import passengerRoute from "./passengers.routes.js";
import citiesRoute from "./cities.routes.js";
import flightRoutes from "./flights.routes.js";
import travelsRoutes from "./travels.routes.js";

const router = express()

router.use(passengerRoute);
router.use(citiesRoute);
router.use(flightRoutes);
router.use(travelsRoutes);

export default router