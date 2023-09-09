import { dataSchema } from "../schemas/flights.schema.js";

export default function Takequeries(req, res, next) {
    const origin = req.query.origin
    const destination = req.query.destination
    const SmallDate = req.query['smaller-date']
    const BigDate = req.query['bigger-date']

    try {
        if (BigDate || SmallDate) {
            if (BigDate && SmallDate) {
                const validationBig = dataSchema.validate(BigDate);
                const validationSma = dataSchema.validate(SmallDate);

                if (validationBig.error || validationSma.error) {
                    return res.status(422)
                }
                if ((new Date(`${SmallDate.slice(3,5)}-${SmallDate.slice(0,2)}-${SmallDate.slice(6)}`).getTime()) > (new Date(`${BigDate.slice(3,5)}-${BigDate.slice(0,2)}-${BigDate.slice(6)}`).getTime())) {
                    return res.sendStatus(400);
                }

            }
            else { return res.sendStatus(422); }
        }
        res.locals.Queries = { origin, destination, BigDate, SmallDate }

        next()
    } catch (err) {
        res.status(500).send(err.message);
    }
}