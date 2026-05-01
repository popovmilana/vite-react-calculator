import { useState } from 'react';
import './App.css';

function App() {
  const [broj1, setBroj1] = useState('');
  const [broj2, setBroj2] = useState('');
  const [operacija, setOperacija] = useState('');
  const [rezultat, setRezultat] = useState<number | string | null>(null);

  const izracunaj = () => {
    const a = parseFloat(broj1);
    const b = parseFloat(broj2);

    if (broj1 === '' || broj2 === '' || operacija === '') {
      setRezultat('Popuni sva polja!');
      return;
    }

    let konacno: number | string;
    switch (operacija) {
      case '+': konacno = a + b; break;
      case '-': konacno = a - b; break;
      case '*': konacno = a * b; break;
      case '/': 
        konacno = b !== 0 ? a / b : 'Ne može se deliti nulom!'; 
        break;
      default: konacno = 0;
    }

    setRezultat(konacno);
  };

  const resetuj = () => {
    setBroj1('');
    setBroj2('');
    setOperacija('');
    setRezultat(null);
  };

  return (
    <div className="card">
      <h1>KALKULATOR</h1>

      <div className="inputs">
        <input 
          className="input"
          type="number" 
          value={broj1} 
          onChange={(e) => setBroj1(e.target.value)} 
          placeholder="Prvi broj"
        />
        <input 
          className="input"
          type="number" 
          value={broj2} 
          onChange={(e) => setBroj2(e.target.value)} 
          placeholder="Drugi broj"
        />
      </div>

      <div className="ops">
        <button className={operacija === '+' ? 'op-btn--active' : 'op-btn'} onClick={() => setOperacija('+')}>+</button>
        <button className={operacija === '-' ? 'op-btn--active' : 'op-btn'} onClick={() => setOperacija('-')}>-</button>
        <button className={operacija === '*' ? 'op-btn--active' : 'op-btn'} onClick={() => setOperacija('*')}>*</button>
        <button className={operacija === '/' ? 'op-btn--active' : 'op-btn'} onClick={() => setOperacija('/')}>/</button>
      </div>

      <div className="actions">
        <button className="btn btn--primary" onClick={izracunaj}>Izračunaj</button>
        <button className="btn btn--ghost" onClick={resetuj}>Reset</button>
      </div>

      {rezultat !== null && (
        <div className="result-box">
          <p className="result-value">{rezultat}</p>
        </div>
      )}
    </div>
  );
}

export default App;