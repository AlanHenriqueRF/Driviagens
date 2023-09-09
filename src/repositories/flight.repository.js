import { db } from "../database/db.connection.js";

export function postFlight(origin, destination, date) {
    return db.query('INSERT INTO flights (origin,destination,date) VALUES ($1,$2,$3)', [origin, destination, date])
}

export function existCity(origin, destination) {
    return db.query('SELECT EXISTS (SELECT 1 FROM cities WHERE id = $1) AS origin_exists, EXISTS (SELECT 1 FROM cities WHERE id = $2) AS destination_exists;', [origin, destination]);
}

export function takeallFlights(){
    return db.query('SELECT flights.id AS id, origin_cities.name AS origin, destination_cities.name AS destination, flights.date FROM flights INNER JOIN cities AS origin_cities ON flights.origin = origin_cities.id INNER JOIN cities AS destination_cities ON flights.destination = destination_cities.id ORDER BY flights.date;')
}