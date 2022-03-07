import ValidationError from './../ErrorHandlers/ValidationError'
type operator = 'add' | 'subtract' | 'multiply' | 'divide';

class CalculatorController {

    static operate(action: operator, values: number[]): number {
        const operations = {
            add: (values: number[]) => values.reduce((total, num) => total + num),
            subtract: (values: number[]) => values.reduce((total, num) => total - num),
            multiply: (values: number[]) => values.reduce((total, num) => total * num),
            divide: (values: number[]) => values.reduce((total, num) => total / num),
        }

        return operations[action](values);
    }

    static parseInput(values:string): number[] {
        // Can't shorthand this map function otherwise parseInt will take the index from map as radix!
        const returnValues: number[] = values.split(',').map((value) => parseInt(value, 10));

        // Use Number.isNaN instead of the isNaN function as that has ambiguous results
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#description
        if(returnValues.findIndex((value) => Number.isNaN(value)) > -1) {
            throw new ValidationError('Invalid input type provided. All values should be numbers.')
        };

        return returnValues;
    }

    static add(values: string): number {
        const parsedValues = CalculatorController.parseInput(values);
        return CalculatorController.operate('add', parsedValues);
    }

    static subtract(values: string): number {
        const parsedValues = CalculatorController.parseInput(values);
        return CalculatorController.operate('subtract', parsedValues);
    }

    static multiply(values: string): number {
        const parsedValues = CalculatorController.parseInput(values);
        return CalculatorController.operate('multiply', parsedValues);
    }

    static divide(values: string): number {
        const parsedValues = CalculatorController.parseInput(values);
        return CalculatorController.operate('divide', parsedValues);
    }

}


export default CalculatorController;