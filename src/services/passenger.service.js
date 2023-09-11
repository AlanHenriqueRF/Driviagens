import httpStatus from "http-status";
import { getpassTravel, postPassenger } from "../repositories/passenger.repositoy.js"

export async function NewPassenger(firstName, lastName) {
    await postPassenger(firstName, lastName);
}

export async function getallPassgenrsTravels(req, res) {
    return (await getpassTravel()).rows
    
}

export const servicePassenger = { getallPassgenrsTravels, NewPassenger }