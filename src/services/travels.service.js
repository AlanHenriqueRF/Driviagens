import { postTravel, verifyFlight, verifyPassger } from "../repositories/travel.repository.js";

async function NewTravel(passengerId, flightId) {

    const existPassenger = await verifyPassger(passengerId);
    const existFlight = await verifyFlight(flightId);

    if (existFlight.rowCount === 0 || existPassenger.rowCount === 0) throw { type: 'not found', message: 'Passageiro ou voo inexistente' }
    await postTravel(passengerId, flightId);

}

export const serviceTravel = {NewTravel}