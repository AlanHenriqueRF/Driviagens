
import { getpassTravel, getpassTravelWithName, postPassenger } from "../repositories/passenger.repositoy.js"

export async function NewPassenger(firstName, lastName) {
    await postPassenger(firstName, lastName);
}

export async function getallPassgenrsTravels(name) {
    if (!name){
        return (await getpassTravel()).rows
    } 
    return (await getpassTravelWithName(name)).rows
    
}

export const servicePassenger = { getallPassgenrsTravels, NewPassenger }