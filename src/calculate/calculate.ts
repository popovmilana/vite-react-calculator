import type { Operator } from '../types'
export function calculate(a: number, b:number, operator: Operator): number | string{
    switch(operator){
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b   
        case '/':
            if(b === 0){
                return 'Error: Division by zero'
            }
            return a / b
        default:
            return 'Error: Invalid operator'
    }
}

export function formatResult(value: number): string{
    if(Number.isInteger(value))
    {
        return value.toString()
    }
    return parseFloat(value.toFixed(10)).toString()
}