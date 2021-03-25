import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const arr = course.parts.map(part => part.exercises)
  const sum = arr.reduce((s, p) => s + p)
  console.log(arr);
  return (
    <p>Number of exercises {sum}</p>
  )
}
// const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises

const Part = ({ name, exercise }) => {
  return (
    <p>{name} {exercise}</p>
  )
}


const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part =>
        <Part key={part.id} name={part.name} exercise={part.exercises} />
      )}
    </div>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Added Part!??',
        exercises: 15,
        id: 4
      }
    ]
  }

  return (
    <Course course={course} />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))