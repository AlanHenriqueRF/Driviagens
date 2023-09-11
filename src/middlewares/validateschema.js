import httpStatus from "http-status"

export default function validateSchema(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })

        if (validation.error) {
            /* console.log(req.body) */
            const errors = validation.error.details.map(detail => detail.message)
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors)
        }
        next()
    }
}