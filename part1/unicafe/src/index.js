import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = (props) => <p>{props.text}: {props.value}</p>

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => {
  if (props.allValue) {
    console.log(props.all.length)
    return (
      <>
        <Statistic text={props.good} value={props.goodValue} />
        <Statistic text={props.neutral} value={props.neutralValue} />
        <Statistic text={props.bad} value={props.badValue} />
        <Statistic text={props.all} value={props.allValue} />
        <Statistic text={props.positive} value={props.positiveValue} />
      </>
    )
  }
  console.log(props.all)
  return (
    <p>No feedback given</p>
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
      <Statistics good='good' goodValue={good} bad='bad' badValue={bad} neutral='neutral' neutralValue={neutral} all='all' allValue={all} positive='positive' positiveValue={positive} />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
