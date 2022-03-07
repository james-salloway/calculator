import express from 'express';
import CalculatorController from './Controllers/CalculatorController';
import ValidationError from './ErrorHandlers/ValidationError';

const app = express();
const INVALID_QS_MESSAGE = 'Invalid input specified. Pass a single querystring parameter (values) as a comma separated list of numbers';

app.get('/Add', (req:express.Request, res:express.Response) => {
    try {
        if(!Object.prototype.hasOwnProperty.call(req.query, 'values') || typeof req.query.values !== 'string') {
            throw new ValidationError(INVALID_QS_MESSAGE);
        }

        const result = CalculatorController.add(req.query.values);
        return res.send({ result });
    } catch (err: unknown) {
        if(err instanceof ValidationError) {
            return res.status(400).send(err.message);
        }

        return res.status(500);
    }
});

app.get('/Subtract', (req:express.Request, res:express.Response) => {
    try {
        if(!Object.prototype.hasOwnProperty.call(req.query, 'values') || typeof req.query.values !== 'string') {
            throw new ValidationError(INVALID_QS_MESSAGE);
        }

        const result = CalculatorController.subtract(req.query.values);
        return res.send({ result });
    } catch (err: unknown) {
        if(err instanceof ValidationError) {
            return res.status(400).send(err.message);
        }

        return res.status(500);
    }
});

app.get('/Multiply', (req:express.Request, res:express.Response) => {
    try {
        if(!Object.prototype.hasOwnProperty.call(req.query, 'values') || typeof req.query.values !== 'string') {
            throw new ValidationError(INVALID_QS_MESSAGE);
        }

        const result = CalculatorController.multiply(req.query.values);
        return res.send({ result });
    } catch (err: unknown) {
        if(err instanceof ValidationError) {
            return res.status(400).send(err.message);
        }

        return res.status(500);
    }
});

app.get('/Divide', (req:express.Request, res:express.Response) => {
    try {
        if(!Object.prototype.hasOwnProperty.call(req.query, 'values') || typeof req.query.values !== 'string') {
            throw new ValidationError(INVALID_QS_MESSAGE);
        }

        const result = CalculatorController.divide(req.query.values);
        return res.send({ result });
    } catch (err: unknown) {
        if(err instanceof ValidationError) {
            return res.status(400).send(err.message);
        }

        return res.status(500);
    }
});

export default app;