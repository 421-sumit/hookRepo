import  { useCallback, useRef, useState } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import React, {useEffect } from 'react';
import useText from './hooks/useCounter';
import './App.css';
import useCounter from './hooks/useCounter';

function App() {


  const {counter, handleOnclick } = useCounter();

  // useEffect(() => {
  //   localStorage.setItem('userName', text);
  // }, [text]);

  return (
    <div className='displaydiv'>
      <h1>This is custom hook demo</h1>
      <button onClick={handleOnclick}>Click me</button>
        <p>Counter = {counter}</p>
    </div>
  );
}


export default App;
