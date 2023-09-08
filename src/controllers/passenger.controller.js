import { db } from "../database/db.connection.js";
import { postPassenger } from "../repositories/passenger.repositoy.js"

export async function NewPassenger(req, res) {
    try {
        const {firstName,lastName} =req.body
        console.log()
        await postPassenger(firstName,lastName); 
        res.sendStatus(200);

    } catch (err) {
        res.status(500).send(err.message)
    }
}
