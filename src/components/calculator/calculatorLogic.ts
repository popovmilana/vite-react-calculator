import type { Operator, RezultatIzracunavanja } from '../../types/types';
export function izracunaj(
  broj1: number,
  broj2: number,
  operator: Operator
): RezultatIzracunavanja {
  switch (operator) {
    case '+':
      return { vrednost: broj1 + broj2, greska: null };
    case '-':
      return { vrednost: broj1 - broj2, greska: null };
    case '*':
      return { vrednost: broj1 * broj2, greska: null };
    case '/':
      if (broj2 === 0) {
        return { vrednost: null, greska: 'Deljenje nulom nije dozvoljeno!' };
      }
      return { vrednost: broj1 / broj2, greska: null };
  }
}

export function formatirajRezultat(vrednost: number): string {
  if (Number.isInteger(vrednost)) return vrednost.toString();
  return parseFloat(vrednost.toFixed(10)).toString();
}