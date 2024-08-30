import { useState } from 'react'

const Headline = ({text}) => {
  return (
      <h1>{text}</h1>
  )
}

const Button = ({handleClick, text}) => {
  console.log("in button " + text)
  return(
  <button onClick={handleClick}>
    {text}
  </button>
  )
}

const Anecdote_1 = ({handleClickAnecdote, handleClickVote, text_anecdote, points}) => {
  console.log("in anecdote object")
  return(
    <div>
      <p>{text_anecdote}</p>
    </div>
  )
}

const Anecdote = ({title, text}) => {
  console.log("in BestAnecdote")
  return(
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  //const points = Array(anecdotes.length).fill(0)
  const [best_anecdote_position, setBestAnecdote] = useState(0)
  const [points_state, setPoints] =useState(Array(anecdotes.length).fill(0))


  const handleClickVote = () => {
    const copy_state = [...points_state]
    copy_state[selected] = copy_state[selected] + 1
    setPoints(copy_state)
    
    // best index
    const new_best_value = Math.max(...copy_state)
    const new_best_position = copy_state.indexOf(new_best_value)
    

    if(new_best_value>copy_state[best_anecdote_position]){
      setBestAnecdote(new_best_position)
    }
  }
  

  const handleClickAnecdote = () =>{
    console.log("in handleClickAnecdote")
    const new_state = Math.floor(Math.random()*anecdotes.length)
    setSelected(new_state)
  }

  return (
    <div>
      <Anecdote title="Anecdote of the day" text={anecdotes[selected]}></Anecdote>
      <p>Has {points_state[selected]} votes.</p>
      <Button text="vote" handleClick={handleClickVote}/>
      <Button text="next one" handleClick={handleClickAnecdote}/>
      <Anecdote title="Anecdote with most votes" text={anecdotes[best_anecdote_position]} />
      <p>Has {points_state[best_anecdote_position]} votes.</p>
    </div>
    )
}

export default App