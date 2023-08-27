import { useState } from 'react';

export function ReactIfStatmentsMoreOrLess() {
  const [inputValue, SetInputValue] = useState(0);
  const handleChange = (event) => {
    const newValue = event.target.value;
    SetInputValue(newValue);
  };
  const visible = inputValue > 5;

  return (
    <div>
      <input type="number" onChange={handleChange} value={inputValue} />
      {inputValue < 10 ? 'Warunek spełniony' : 'Warunek nie spełniony'}
      {inputValue < 10 && 'Warunek spełniony'}
      {inputValue >= 10 && 'Warunek nie spełniony'}
      {visible && 'Wyrenderuj mnie jeżeli visible jest true'}
    </div>
  );
}
