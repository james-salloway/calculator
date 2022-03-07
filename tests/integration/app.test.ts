import supertest from 'supertest';
import CalculatorController from '../../src/Controllers/CalculatorController';
import app from './../../src/app';


describe('app', () => {
    describe('/Add', () => {
        test('calling /Add with valid parameters should return correct value', async () => {
            const addSpy = jest.spyOn(CalculatorController, 'add');
    
            await supertest(app)
                .get('/Add?values=9,8,7')
                .expect(200, { result: 24 });
    
            expect(addSpy).toHaveBeenCalledTimes(1);
            expect(addSpy).toHaveBeenCalledWith('9,8,7');
        });
    });

    describe('/Subtract', () => {
        test('calling /Subtract with valid parameters should return correct value', async () => {
            const subtractSpy = jest.spyOn(CalculatorController, 'subtract');
    
            await supertest(app)
                .get('/Subtract?values=100,30,6')
                .expect(200, { result: 64 });
    
            expect(subtractSpy).toHaveBeenCalledTimes(1);
            expect(subtractSpy).toHaveBeenCalledWith('100,30,6');
        });
    });

    describe('/Multiply', () => {
        test('calling /Multiply with valid parameters should return correct value', async () => {
            const multiplySpy = jest.spyOn(CalculatorController, 'multiply');
    
            await supertest(app)
                .get('/Multiply?values=10,10,10')
                .expect(200, { result: 1000 });
    
            expect(multiplySpy).toHaveBeenCalledTimes(1);
            expect(multiplySpy).toHaveBeenCalledWith('10,10,10');
        });
    });


    describe('/Divide', () => {
        test('calling /Divide with valid parameters should return correct value', async () => {
            const divideSpy = jest.spyOn(CalculatorController, 'divide');
    
            await supertest(app)
                .get('/Divide?values=2500,1000,1.25')
                .expect(200, { result: 2 });
    
            expect(divideSpy).toHaveBeenCalledTimes(1);
            expect(divideSpy).toHaveBeenCalledWith('2500,1000,1.25');
        });
    });
});