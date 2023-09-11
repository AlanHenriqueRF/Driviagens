import { existCity, postFlight, takeallFlights } from "../repositories/flight.repository.js";
import httpStatus from "http-status";
import { serviceFlight } from "../services/flights.service.js";

export async function newflight(req, res) {
    const { origin, destination, date } = req.body
    try {
        await serviceFlight.neflight(origin, destination, date);
        res.sendStatus(httpStatus.CREATED);

    } catch (err) {
        if (err.type === 'not found') return res.status(httpStatus.NOT_FOUND).send(err.message);
        if (err.type === 'conflict') return res.status(httpStatus.CONFLICT).send(err.message);

        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}

export async function takeFlights(req, res) {
    const { origin, destination, BigDate, SmallDate } = res.locals.Queries

    try {
        const lista = await serviceFlight.takFlights(origin, destination, BigDate, SmallDate)
        res.status(httpStatus.OK).send(lista)
    } catch (err) {
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}