import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: 'Too many results',
    handler: (req, res) => {
        res.status(500).send('Too many results');}
  });