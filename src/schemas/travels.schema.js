import joi from "joi";

export const travelsSchema = joi.object({
    passengerId: joi.number().required(),
    flightId: joi.number().required()
    
})