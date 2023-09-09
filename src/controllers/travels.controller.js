import { postTravel, verifyFlight, verifyPassger } from "../repositories/travel.repository.js";

export async function NewTravel(req, res) {
    try {
        const { passengerId, flightId } = req.body
        console.log(passengerId)
        const existPassenger = await verifyPassger(passengerId);
        const existFlight = await verifyFlight(flightId);

        if (existFlight.rowCount === 0 || existPassenger.rowCount === 0) return res.sendStatus(404);
        await postTravel(passengerId, flightId);
        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message)
    }
}
