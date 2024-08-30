const Header = (params) => {
  return (
    <h1>
      {params.course}
    </h1>
  )
}

const Part = (params) =>{
  return(
    <p>{params.part} {params.exercise}</p>
  )
}

const Content = (params) =>{
  return (
    <div>
      <Part part={params.parts[0].name} exercise={params.parts[0].exercises} />
      <Part part={params.parts[1].name} exercise={params.parts[1].exercises} />
      <Part part={params.parts[2].name} exercise={params.parts[2].exercises} />
    </div>
  )
}

const Total = (params) =>{
  return(
    <>
      <p>Number of exercises {params.total[0].exercises+params.total[1].exercises+params.total[2].exercises}</p>
    </>
  )
}

const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/> 
      <Total total={course.parts}/>
    </div>
  )
}

export default App