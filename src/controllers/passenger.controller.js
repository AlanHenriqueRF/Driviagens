import httpStatus from "http-status";
import { getpassTravel, postPassenger } from "../repositories/passenger.repositoy.js"
import { servicePassenger } from "../services/passenger.service.js";

export async function NewPassenger(req, res) {
    const { firstName, lastName } = req.body
    try {
        await servicePassenger.NewPassenger(firstName,lastName);
        res.sendStatus(httpStatus.CREATED);

    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}

export async function getallPassgenrsTravels(req,res){
    const name = req.query.name
    try{
        const lista = await servicePassenger.getallPassgenrsTravels(name);
        res.status(httpStatus.OK).send(lista)
    }catch(err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}
