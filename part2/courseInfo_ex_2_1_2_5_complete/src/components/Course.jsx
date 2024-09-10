const Course = (course) =>{
    const text = course.course.name
    const parts = [...course.course.parts]
    //debugger
    console.log("In course. Text and parts:", text, parts);
    return(
      <div>
        <Header text = {text}/>
        <Content parts = {parts}/>
      </div>
    )
  }
  const Header = ({text}) => {
    //debugger
    return (
      <h1>
        {text}
      </h1>
    )
  }
  
  const Part = ({name, exercises}) =>{
    //debugger
    console.log("in part");
    
    return(
      <p>{name} {exercises}</p>
    )
  }
  
  const Total = ({parts}) =>{
    console.log("in total:", parts);
    
    const total = parts.reduce(function(sum, part){
      console.log(sum, part.exercises)
      
      return sum + part.exercises
    }, 0)
  
    return(
      <b>Total of {total} exercises</b>
    )
    
  }
  const Content = ({parts}) =>{
    console.log("in content");
    //debugger
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} name ={part.name} exercises ={part.exercises}/>
        )}
        <Total parts = {parts}/>
      </div>
    )
  }

export default Course
  