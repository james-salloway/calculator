import express from 'express';
import CalculatorController from './Controllers/CalculatorController';

const app = express();

app.get('/Add', (req:express.Request, res:express.Response) => {
    const result = CalculatorController.add('1,2,3');
    return res.send({ result });
});

app.get('/Subtract', (req:express.Request, res:express.Response) => {
    const result = CalculatorController.subtract('10,5,1');
    return res.send({ result });
});


app.get('/Multiply', (req:express.Request, res:express.Response) => {
    const result = CalculatorController.multiply('2,3,4');
    return res.send({ result });
});

app.get('/Divide', (req:express.Request, res:express.Response) => {
    const result = CalculatorController.divide('20,2,2');
    return res.send({ result });
});

export default app;