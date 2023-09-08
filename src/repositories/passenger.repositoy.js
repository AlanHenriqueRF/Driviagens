import { db } from '../database/db.connection.js';

export function postPassenger(firstName,lastName){
    return db.query('INSERT INTO passengers ("firstName","lastName") VALUES ($1,$2)',[firstName,lastName])
}