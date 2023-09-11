import httpStatus from "http-status";
import { postTravel, verifyFlight, verifyPassger } from "../repositories/travel.repository.js";
import { serviceTravel } from "../services/travels.service.js";

export async function NewTravel(req, res) {
    const { passengerId, flightId } = req.body
    try {
        await serviceTravel.NewTravel(passengerId,flightId)
        res.sendStatus(httpStatus.CREATED);

    } catch (err) {
        if (err.type === 'not found') return res.status(httpStatus.NOT_FOUND).send(err.message)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}
