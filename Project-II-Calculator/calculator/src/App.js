import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';

const numbers = [7,8,9,4,5,6,1,2,3];
const signs = ['/', 'x', '-', '+', '='];




const App= () => {
  return (
   <div className='calculator-container'>
    <CalcDisplay displayStyle='display' text='0'/>
    
    

     
    
  </div>
  );
}

export default App;
