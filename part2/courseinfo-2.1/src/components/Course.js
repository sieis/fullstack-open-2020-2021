import React from 'react'

const Header = ({ course }) => {
  return (
    <h2>{course}</h2>
  )
}

const Total = ({ course }) => {
  const arr = course.parts.map(part => part.exercises)
  const sum = arr.reduce((s, p) => s + p)
  return (
    <p>Number of exercises {sum}</p>
  )
}

const Part = ({ name, exercise }) => {
  return (
    <p>{name} {exercise}</p>
  )
}


const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
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

export default Course