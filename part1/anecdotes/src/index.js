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

  const initialVotes = new Array(anecdotes.length).fill(0)

  const [votes, setVotes] = useState(initialVotes)

  const [highestNow, setHighVote] = useState(0)

  const [highestVote, setHigh] = useState(0)

  const [selected, setSelected] = useState(0)

  const randomSelected = () => Math.floor(Math.random() * anecdotes.length)

  const setNewSelected = (newSelected) => () => {
    setSelected(newSelected)
  }

  const setNewVote = (voteSelected) => () => {
    const holder = votes
    holder[voteSelected] += 1
    setVotes(holder)
    const highestNow = Math.max(...holder)
    const highestIndex = holder.findIndex(i => i === highestNow)
    setHighVote(highestNow)
    setHigh(highestIndex)
    console.log('highest vote index: ', highestVote)
    console.log('holder:', holder)
  }

  return (
    <section className='section'>
      {/* display current anecdote */}
      <div className='container'>
        <h2 className='is-size-2'>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
          has Votes: {votes[selected]}
      </div>
      <div className='container'>
        <Button handleClick={setNewVote(selected)} text='vote' />
        <Button handleClick={setNewSelected(randomSelected)} text='next anecdote!' />
        <progress className='progress is-small is-primary'></progress>
      </div>
      <div className='container'>
        <h2 className='is-size-2'>Anecdote with most ({highestNow}) votes:</h2>
        <p>{anecdotes[highestVote]}</p>
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