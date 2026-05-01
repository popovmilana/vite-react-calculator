export type Operator = '+' | '-' | '*' | '/'


export interface CalculatorStatus{
    firstNumber: string
    secondNumber: string
    operator: Operator | null
    result: string | null
    error: string | null

}