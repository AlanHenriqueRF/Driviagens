import Joi from "joi";
import coreJoi from "joi";
import joiDate from "@joi/date";

const joi = coreJoi.extend(joiDate)


export const flightsSchema = joi.object({
    origin: Joi.number().required(),
    destination: Joi.number().required(),
    date: joi.date().format('DD-MM-YYYY').greater('now').required()
})

