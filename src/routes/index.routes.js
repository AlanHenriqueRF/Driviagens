import express from "express";
import passengerRoute from "./passengers.routes.js";

const router = express()

router.use(passengerRoute)

export default router