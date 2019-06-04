import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const numbers1 = [7,8,9];
const numbers2 =[4,5,6];
const numbers3 =[1,2,3];
const signs = ['/', 'x', '-', '+', '='];




const App= () => {
  return (
   <div className='calculator-container'>
    <div className='calculatorDisplay'>
      <CalculatorDisplay />

    </div>
    <div className='row'>
      <ActionButton text='clear' buttonStyle='buttonStyle actionButton bigButton' />
      <ActionButton text='&#247;' buttonStyle='buttonStyle actionButton'/>
    </div>
    <div className='row'>

      {numbers1.map(number => {
        return(
          <NumberButton buttonStyle='buttonStyle numberButton' text={number}/>
        )
      })}
      {/* <NumberButton text='7' buttonStyle='buttonStyle numberButton' />
      <NumberButton text='8' buttonStyle='buttonStyle numberButton' />
      <NumberButton text='9' buttonStyle='buttonStyle numberButton' /> */}
      <ActionButton text='&#215;' buttonStyle='buttonStyle actionButton' />
    </div>
    <div className='row'>
    {numbers2.map(number => {
        return(
          <NumberButton buttonStyle='buttonStyle numberButton' text={number}/>
        )
      })}
      {/* <NumberButton text='4' buttonStyle='buttonStyle numberButton' />
      <NumberButton text='5' buttonStyle='buttonStyle numberButton' />
      <NumberButton text='6' buttonStyle='buttonStyle numberButton' /> */}
      <ActionButton text='&#43;' buttonStyle='buttonStyle actionButton' />
    </div>
    <div className='row'>
    {numbers3.map(number => {
        return(
          <NumberButton buttonStyle='buttonStyle numberButton' text={number}/>
        )
      })}
      {/* <NumberButton text='1' buttonStyle='buttonStyle numberButton' />
      <NumberButton text='2' buttonStyle='buttonStyle numberButton' />
      <NumberButton text='3' buttonStyle='buttonStyle numberButton' /> */}
      <ActionButton text='&#61;' buttonStyle='buttonStyle actionButton' />
    </div>
  </div>
  );
}

export default App;
