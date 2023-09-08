import { db } from "../database/db.connection.js";

export function postCity(name){
    return db.query('INSERT INTO cities (name) VALUES ($1)',[name])
}

export function verifyCity(name){
    return db.query('SELECT * FROM cities WHERE (name = $1)',[name])
}