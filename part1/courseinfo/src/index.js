import React from 'react';
import ReactDOM, { render } from 'react-dom';

const Header = (props) =>{
  return(
   <h1>{props.name}</h1>
  )
}
const Part = (props) =>{
  return(
    <p>{props.part}: {props.exercise}</p>
  )
}
const Content = (props) =>{
  return(
    <>
      <Part part='Fundamentals of React' exercise={10} />
      <Part part='Using props to pass data' exercise={7}/>
      <Part part='State of a component' exercise={14}/>
    </>
  )
}

const Total = (props) =>{
  return(
    <p>Number of exercises: {props.total}</p>
  )
}

const App = () =>{
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <>
      <Header name={course}/>
      <Content />
      <Total total={exercises1+exercises2+exercises3} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
