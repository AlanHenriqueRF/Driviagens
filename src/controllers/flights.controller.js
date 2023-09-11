import { existCity, postFlight, takeallFlights } from "../repositories/flight.repository.js";
import httpStatus from "http-status";

export async function newflight(req, res) {
    try {
        const { origin, destination, date } = req.body

        let { origin_exists, destination_exists } = (await existCity(origin, destination)).rows[0]

        origin_exists = !origin_exists

        destination_exists = !destination_exists

        if (origin_exists || destination_exists) return res.sendStatus(httpStatus.NOT_FOUND)
        if (origin === destination) return res.sendStatus(httpStatus.CONFLICT);

        await postFlight(origin, destination, date);
        res.sendStatus(httpStatus.CREATED);

    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}

export async function takeFlights(req, res) {
    const { origin, destination, BigDate, SmallDate } = res.locals.Queries

    try {
        let lista = (await takeallFlights()).rows
        if (origin) {
            const newlist = lista.filter((i) => i.origin === origin)
            lista = newlist
        }
        if (destination) {
            const newlist = lista.filter((i) => i.destination === destination)
            lista = newlist
        }
        if (BigDate) {
            const dataBig = new Date(`${BigDate.slice(3, 5)}-${BigDate.slice(0, 2)}-${BigDate.slice(6)}`)
            const dataSmal = new Date(`${SmallDate.slice(3, 5)}-${SmallDate.slice(0, 2)}-${SmallDate.slice(6)}`)

            const newlist = lista.filter((i) => new Date(i.date) < dataBig && new Date(i.date) > dataSmal  )
            lista = newlist
        }
        res.status(httpStatus.OK).send(lista)
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}