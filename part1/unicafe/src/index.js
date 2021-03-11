import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = (props) => <p>{props.text}: {props.value}</p>

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => {
  return (
    <>
      <Display text={props.text} value={props.value} />
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const positive = good / all + ' %'

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
      <Statistics text='good' value={good} />
      <Statistics text='neutral' value={neutral} />
      <Statistics text='bad' value={bad} />
      <Statistics text='all' value={all} />
      <Statistics text='positive' value={positive} />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
