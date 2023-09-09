import { existCity, postFlight } from "../repositories/flight.repository.js";

export async function newflight(req, res) {
    try {
        const { origin, destination, date } = req.body

        let { origin_exists, destination_exists } = (await existCity(origin, destination)).rows[0]

        origin_exists = !origin_exists

        destination_exists = !destination_exists

        if (origin_exists || destination_exists) return res.sendStatus(404)
        if (origin === destination) return res.sendStatus(409);

        await postFlight(origin, destination, date);
        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message)
    }
}
