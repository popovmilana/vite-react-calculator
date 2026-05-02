import { useState } from 'react';
import type { Operator, RezultatIzracunavanja } from '../../types/types';
import { izracunaj, formatirajRezultat } from './calculatorLogic';
import './calculator.css';

const OPERACIJE: { simbol: Operator}[] = [
  { simbol: '+'},
  { simbol: '-' },
  { simbol: '*'},
  { simbol: '/'},
];

export default function Kalkulator() {
  const [broj1, setBroj1] = useState<string>('');
  const [broj2, setBroj2] = useState<string>('');
  const [aktivnaOp, setAktivnaOp] = useState<Operator | null>(null);
  const [rezultat, setRezultat] = useState<RezultatIzracunavanja | null>(null);

  const handleIzracunaj = () => {
    const n1 = parseFloat(broj1);
    const n2 = parseFloat(broj2);

    if (isNaN(n1) || isNaN(n2)) {
      setRezultat({ vrednost: null, greska: 'Unesite validne brojeve u oba polja!' });
      return;
    }
    if (!aktivnaOp) {
      setRezultat({ vrednost: null, greska: 'Izaberite operaciju!' });
      return;
    }

    const res = izracunaj(n1, n2, aktivnaOp);
    setRezultat(res);
  };

  const handleReset = () => {
    setBroj1('');
    setBroj2('');
    setAktivnaOp(null);
    setRezultat(null);
  };

  return (
    <div className="card">
      <h1>KALKULATOR</h1>

      <div className="input-group">
        <label htmlFor="broj1" className="input-label">Broj 1</label>
        <input
          id="broj1"
          className="input"
          type="number"
          value={broj1}
          onChange={(e) => { setBroj1(e.target.value); setRezultat(null); }}
        />
      </div>

      <div className="input-group">
        <label htmlFor="broj2" className="input-label">Broj 2</label>
        <input
          id="broj2"
          className="input"
          type="number"
          value={broj2}
          onChange={(e) => { setBroj2(e.target.value); setRezultat(null); }}
        />
      </div>

      <div className="ops">
        {OPERACIJE.map((op) => (
          <button
            key={op.simbol}
            className={`op-btn ${aktivnaOp === op.simbol ? 'op-btn--active' : ''}`}
            onClick={() => { setAktivnaOp(op.simbol); setRezultat(null); }}
          >
            <span className="op-simbol">{op.simbol}</span>
          </button>
        ))}
      </div>

      <div className="actions">
        <button className="btn btn--primary" onClick={handleIzracunaj}>Izračunaj</button>
        <button className="btn btn--ghost" onClick={handleReset}>Reset</button>
      </div>

      {rezultat !== null && (
        <div className={`result-box ${rezultat.greska ? 'result-box--error' : ''}`}>
          {rezultat.greska ? (
            <p className="result-error">{rezultat.greska}</p>
          ) : (
            <p className="result-value">= {formatirajRezultat(rezultat.vrednost!)}</p>
          )}
        </div>
      )}
    </div>
  );
}