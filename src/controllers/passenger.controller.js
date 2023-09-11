import httpStatus from "http-status";
import { getpassTravel, postPassenger } from "../repositories/passenger.repositoy.js"

export async function NewPassenger(req, res) {
    try {
        const { firstName, lastName } = req.body
        await postPassenger(firstName, lastName);
        res.sendStatus(httpStatus.CREATED);

    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}

export async function getallPassgenrsTravels(req,res){
    try{
        const lista = (await getpassTravel()).rows
        console.log(lista)
        res.status(httpStatus.OK).send(lista)
    }catch(err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}
