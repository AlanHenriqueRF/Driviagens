import httpStatus from "http-status";
import { postTravel, verifyFlight, verifyPassger } from "../repositories/travel.repository.js";

export async function NewTravel(req, res) {
    try {
        const { passengerId, flightId } = req.body
        const existPassenger = await verifyPassger(passengerId);
        const existFlight = await verifyFlight(flightId);

        if (existFlight.rowCount === 0 || existPassenger.rowCount === 0) return res.sendStatus(404);
        await postTravel(passengerId, flightId);
        res.sendStatus(httpStatus.CREATED);

    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}
