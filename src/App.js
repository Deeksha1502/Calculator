/* eslint-disable no-eval */
import { evaluate } from 'mathjs';
import { useState } from 'react';
import './App.css';

export const App = () => {
  const arr = [
    'AC',
    '%',
    'DEL',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '00',
    '0',
    '.',
    '=',
  ];

  const [value, setValue] = useState('');

  const handleClick = (item) => {
    if (item === 'AC') {
      setValue('');
    } else if (item === 'DEL') {
      setValue(value.slice(0, -1));
    } else if (item === '=') {
      try {
        setValue(evaluate(value).toString());
      } catch (error) {
        setValue('Error');
      }
    } else {
      const operators = ['%', '/', '*', '-', '+'];
      const lastChar = value.slice(-1);

      if (
        (operators.includes(item) && operators.includes(lastChar)) ||
        (item === '.' && value.includes('.'))
      ) {
        return;
      }

      setValue((prevValue) => prevValue + item);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='App'>
      <div>
        <h1 className='heading'>Calculator</h1>
      </div>
      <div className='outer-container'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='input-box'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        <div className='inner-container'>
          {arr.map((item, index) => (
            <div key={index}>
              <button className='cells' id={index} onClick={() => handleClick(item)}>
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
