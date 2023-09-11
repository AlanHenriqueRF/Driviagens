import { db } from "../database/db.connection.js";

export async function postCity(name){
    await db.query('INSERT INTO cities (name) VALUES ($1)',[name])
}

export async function verifyCity(name){
    return db.query('SELECT * FROM cities WHERE (name = $1)',[name]);
}