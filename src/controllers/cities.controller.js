import { postCity, verifyCity } from "../repositories/cities.repository.js";

export async function NewCity(req, res) {
    try {
        const { name } = req.body
        const lista = await verifyCity(name)

        if (lista.rowCount > 0) return res.sendStatus(409)

        await postCity(name);
        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message)
    }
}
