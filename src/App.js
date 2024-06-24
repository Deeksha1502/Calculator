/* eslint-disable no-eval */
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

  const handleChange = (e) => {};

  const handleClick = (e) => {};

  const handleSubmit = (e) => {};
  return (
    <div className='App'>
      <div>
        <h1>Calculator</h1>
      </div>
      <div className='outer-container'>
        <form onSubmit={handleSubmit}>
          <input type='text' className='input-box' onChange={handleChange} value={value}></input>
        </form>
        <div className='inner-container' onClick={handleClick}>
          {arr.map((item, index) => {
            return (
              <div key={index}>
                <button className='cells' id={index}>
                  {item}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
