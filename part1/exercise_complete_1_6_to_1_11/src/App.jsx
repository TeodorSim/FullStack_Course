import { useState } from 'react'

const Headline = ({text}) => {
  return (
      <h1>{text}</h1>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => {
  return(
    <td>{text} {value}</td>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive}) =>{
  if(good != 0 || neutral != 0 || bad != 0){
    return(
      <div>
        <h1>statistics</h1>
        <table>
          <thead>
            <tr>
              <StatisticLine text='good' value={good}/>
            </tr>
            <tr>
              <StatisticLine text='neutral' value={neutral}/>
            </tr>
            <tr>
              <StatisticLine text='bad' value={bad}/>
            </tr>
            <tr>
              <StatisticLine text='all' value={all}/>
            </tr>
            <tr>
              <StatisticLine text='average' value={average}/>
            </tr>
            <tr>
              <StatisticLine text='positive' value={positive + '%'}/>
            </tr>
          </thead>
          </table>
      </div>
    )
  }
  else{
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}
const Anecdote = ({handleClick, text_anecdote}) => {
  return(
    <div>
      <p>{text_anecdote}</p>
      <Button handleClick={handleClick} text = {"next anecdote"}/> 
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  
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

  const handleClickGood = () =>{
    //debugger
    const new_all = all + 1
    const new_good = good + 1
    setGood(new_good)
    setAll(new_all)
    setAverage((new_good - bad)/new_all)
    setPositive(new_good/new_all)
    //updateAverage()
    console.log('Good feedback received')
  }
  const handleClickNeutral = () =>{
    //debugger
    const new_neutral = neutral + 1
    const new_all = all + 1
    setNeutral(new_neutral)
    setAll(new_all)
    setAverage((good - bad)/new_all)
    setPositive(good/new_all)
    //updateAverage()
    console.log('Neutral feedback received')
  }
  const handleClickBad = () =>{
    //debugger
    const new_bad = bad + 1
    const new_all = all + 1
    setBad(new_bad)
    setAll(new_all)
    setAverage((good- new_bad)/new_all)
    setPositive(good/new_all)
    console.log('Bad feedback received')
  }

  const handleClickAnecdote = () =>{
    const new_state = Math.floor(Math.random()*anecdotes.length)
    setSelected(new_state)
  }

  const updateAverage = () => {
    debugger
    const new_average = good - bad
    new_average = new_average / 100
    setAverage(new_average)
  }

  return (
    <div>
      <Headline text = "give feedback"></Headline>
      <Button text='Good' handleClick={handleClickGood}/>
      <Button text='Neutral' handleClick={handleClickNeutral}/>
      <Button text='Bad' handleClick={handleClickBad}/>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive}/>
      
    </div>
    )

    //<Anecdote text_anecdote={anecdotes[selected]} handleClick={handleClickAnecdote}/>
}

export default App