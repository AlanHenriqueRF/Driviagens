import { postCity, verifyCity } from "../repositories/cities.repository.js";

async function cityService(name) {
    const lista = (await verifyCity(name)).rows

    if (lista.length > 0) {
        throw {
            type: "conflict",
            message: "Esta cidade já foi cadastrada no banco de dados!"
        }
    }

    postCity(name);

}

export const citiesService = { cityService } 