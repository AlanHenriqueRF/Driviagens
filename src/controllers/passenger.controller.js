import { postPassenger } from "../repositories/passenger.repositoy.js"

export async function NewPassenger(req, res) {
    try {
        const {firstName,lastName} = req.body
        await postPassenger(firstName,lastName); 
        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message)
    }
}
