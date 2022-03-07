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
        // Can't shorthand this map function otherwise parseInt will take the index from each map iteration as a radix!
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

        // Could refactor this into a ternary statement but I find this more readable
        if(parsedValues.findIndex((value) => value === 0) > -1) {
            return 0;
        }

        return CalculatorController.operate('multiply', parsedValues);
    }

    static divide(values: string): number {
        const parsedValues = CalculatorController.parseInput(values);

        if(parsedValues.findIndex((num) => num === 0) > -1) {
            throw new ValidationError('Cannot divide by 0.');
        } 

        return CalculatorController.operate('divide', parsedValues);
    }

}


export default CalculatorController;