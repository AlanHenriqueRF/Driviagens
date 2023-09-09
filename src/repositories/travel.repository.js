import { db } from "../database/db.connection.js";

export function postTravel(passengerId, flightId) {
    return db.query('INSERT INTO travels ("passengerId","flightId")  VALUES ($1,$2)', [passengerId, flightId])
}

export function verifyPassger(passengerId) {
    return db.query('SELECT * FROM passengers WHERE (id = $1)', [passengerId])
}

export function verifyFlight(flightId) {
    return db.query('SELECT * FROM flights WHERE (id = $1)', [flightId])
}