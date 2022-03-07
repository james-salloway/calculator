import CalculatorController from "../../src/Controllers/CalculatorController";
import ValidationError from './../../src/ErrorHandlers/ValidationError';

describe('Calculator Controller', () => {

    describe('internal methods', () => {
        describe('operator method', () => {
            test('Should execute an operation based on the provided action parameter', () => {
                expect(CalculatorController.operate('add', [1,2,3])).toEqual(6);
            });
        });


        describe('parseInput method', () => {
            test('Should convert a string of comma separated numbers into an array of numbers', () => {
                expect(CalculatorController.parseInput('1,2,3')).toEqual([1,2,3]);
            });

            test('Should throw a validation error if a non-number value is found', () => {
                try {
                    CalculatorController.parseInput('1,2,test,3')
                } catch (err) {
                    expect(err).toBeInstanceOf(ValidationError);
                    expect(err).toHaveProperty('message', 'Invalid input type provided. All values should be numbers.');
                }
            });
        });

    });

    describe('public methods', () => {
        describe('Add method', () => {
            test('should add a list of values correctly', () => {
                expect(CalculatorController.add('1,2,3')).toEqual(6);
            });
        });
    
        describe('Subtract method', () => {
            test('should add a list of values correctly', () => {
                expect(CalculatorController.subtract('10,5,1')).toEqual(4);
            });
        });
    
        describe('Multiply method', () => {
            test('should add a list of values correctly', () => {
                expect(CalculatorController.multiply('2,3,4')).toEqual(24);
            });

            test('Passing 0 as any of the values should not call operate method', () => {
                const operateSpy = jest.spyOn(CalculatorController, 'operate');

                CalculatorController.multiply('2,3,4,0,6,7,8')
                expect(operateSpy).toHaveBeenCalledTimes(0);
            });
        });
    
        describe('Divide method', () => {
            test('should add a list of values correctly', () => {
                expect(CalculatorController.divide('20,2,2')).toEqual(5);
            });

            test('Passing 0 as any of the values should throw a validation error', () => {
                try {
                    CalculatorController.divide('1,2,0,3');
                } catch (err) {
                    expect(err).toBeInstanceOf(ValidationError);
                    expect(err).toHaveProperty('message', 'Cannot divide by 0.');
                }
            });
        });
    });
});