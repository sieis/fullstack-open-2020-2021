import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'


const App = () => {
  const courses = [
    {
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: 'Three.js',
      id: 3,
      parts: [
        {
          name: 'Another one',
          exercises: 3,
          id: 1
        },
        {
          name: 'Yet Another',
          exercises: 17,
          id: 2
        }
      ]
    }
  ]
  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map(name =>
        <Course key={name.id} course={name} />
      )}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))