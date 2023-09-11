import { db } from '../database/db.connection.js';

export function postPassenger(firstName, lastName) {
    return db.query('INSERT INTO passengers ("firstName","lastName") VALUES ($1,$2)', [firstName, lastName])
}

export function getpassTravel() {
    return db.query(`
    SELECT 
        passengers."firstName" || ' ' || passengers."lastName" AS passenger,
        COUNT(travels."passengerId") AS travels
    FROM 
        passengers
    LEFT JOIN 
        travels ON passengers.id = travels."passengerId"
    GROUP BY 
        passengers.id, passengers."firstName", passengers."lastName"
    ORDER BY 
        travels DESC
`)
}

export function getpassTravelWithName(name) {
    return db.query(`
    SELECT 
    passengers."firstName" || ' ' || passengers."lastName" AS passenger,
    COUNT(travels."passengerId") AS travels
FROM 
    passengers
LEFT JOIN 
    travels ON passengers.id = travels."passengerId"
WHERE 
passengers ILIKE $1
GROUP BY 
    passengers.id, passengers."firstName", passengers."lastName"
ORDER BY 
    travels DESC;
`, [name])
}