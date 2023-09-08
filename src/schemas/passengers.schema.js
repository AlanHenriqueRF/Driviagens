import joi from "joi";

export const passengersSchema = joi.object({
    firstName: joi.string().min(2).max(100).trim().required(),
    lastName: joi.string().min(2).max(100).trim().required()
})