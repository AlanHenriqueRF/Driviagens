import httpStatus from "http-status";
import { citiesService } from "../services/cities.service.js";

export async function NewCity(req, res) {
    const { name } = req.body
    try {
        await citiesService.cityService(name)
        res.sendStatus(httpStatus.CREATED);

    } catch (err) {
        if (err.type==='conflict') return res.status(httpStatus.CONFLICT).send(err.message)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}
