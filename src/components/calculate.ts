import type { Operator, RezultatIzracunavanja } from '../types/types';

export function calculate(
  a: number,
  b: number,
  operator: Operator
): RezultatIzracunavanja {
  switch (operator) {
    case '+':
      return { vrednost: a + b, greska: null };
    case '-':
      return { vrednost: a - b, greska: null };
    case '*':
      return { vrednost: a * b, greska: null };
    case '/':
      if (b === 0) {
        return { vrednost: null, greska: 'Deljenje nulom nije dozvoljeno!' };
      }
      return { vrednost: a / b, greska: null };
  }
}

export function formatResult(value: number): string {
  if (Number.isInteger(value)) 
    return value.toString();
  return parseFloat(value.toFixed(10)).toString();
}