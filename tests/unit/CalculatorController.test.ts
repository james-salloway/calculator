import CalculatorController from "../../src/Controllers/CalculatorController";


describe('Calculator Controller', () => {

    describe('internal methods', () => {
        describe('operator method', () => {
            test('Should execute an operation based on the provided action parameter', () => {
                expect(CalculatorController.operate('add', [1,2,3])).toEqual(6);
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
        });
    
        describe('Divide method', () => {
            test('should add a list of values correctly', () => {
                expect(CalculatorController.divide('20,2,2')).toEqual(2);
            });
        });
    });
});