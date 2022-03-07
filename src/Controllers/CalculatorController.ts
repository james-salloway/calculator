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
        return values.split(',').map((value) => parseInt(value, 10));
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