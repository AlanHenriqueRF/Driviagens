import { existCity, postFlight, takeallFlights } from "../repositories/flight.repository.js";
import httpStatus from "http-status";

async function neflight(origin, destination, date) {
    let { origin_exists, destination_exists } = (await existCity(origin, destination)).rows[0]

    origin_exists = !origin_exists
    destination_exists = !destination_exists

    if (origin_exists || destination_exists) throw { type: 'not found', message: 'Voo não encontrado!' };
    if (origin === destination) throw { type: 'conflict', message: 'Voo de origem e destino iguais!' };

    await postFlight(origin, destination, date);

}

async function takFlights(origin, destination, BigDate, SmallDate) {
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

        const newlist = lista.filter((i) => new Date(i.date) < dataBig && new Date(i.date) > dataSmal)
        lista = newlist
    }
    return lista;
}

export const serviceFlight = { takFlights, neflight }