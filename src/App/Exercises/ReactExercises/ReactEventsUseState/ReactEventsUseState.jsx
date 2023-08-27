import { useState } from 'react';
export function ReactEventsUseState() {
  const test = 'test';
  const [count, setCount] = useState(0);
  const handleClick = (event) => {
    const [inputValue, setInputValue] = useState('Placeholder');
    console.log('coś zostało kliknięte!!', event);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const handleCountClick = (event) => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>Test zmienna</div>
      <div>useState count:</div>
      <button onClick={handleCountClick}>Zwiększ o jeden</button>

      <h1>Cześć!</h1>
      <p>Wpisz tekst</p>
      <input type="number" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Reset</button>
      <button></button>
      <p>{inputValue}- tutaj będzie wpisany nasz tekst</p>
    </div>
  );
}
