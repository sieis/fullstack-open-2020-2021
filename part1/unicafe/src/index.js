import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = (newValue) => () => {
    setGood(newValue)
  }
  const setNeutralValue = (newValue) => () => {
    setNeutral(newValue)
  }
  const setBadValue = (newValue) => () => {
    setBad(newValue)
  }


  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={setGoodValue(good + 1)} text='good' />
      <Button handleClick={setNeutralValue(neutral + 1)} text='neutral' />
      <Button handleClick={setBadValue(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
