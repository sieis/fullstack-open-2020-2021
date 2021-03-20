import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  return (
    <button className='button' onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)

  const randomSelected = () => Math.floor(Math.random() * anecdotes.length)
  console.log("selected", selected)

  const setNewSelected = (newSelected) => () => {
    setSelected(newSelected)
  }


  return (
    <section className='section'>
      <div className='container'>
        {anecdotes[selected]}
      </div>
      <div className='container'>
        <Button handleClick={setNewSelected(randomSelected)} text='next anecdote!' />
      </div>
    </section>)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App