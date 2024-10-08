import { useState } from 'react'

const Person = ({ name, number}) => {
  return <div>{name} {number}</div>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phone: '040-1234567'
    }
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const addPerson = (event) => {
    event.preventDefault()

    if(newName.length > 0) {
      
      //check is new
      const allOccurences =  persons.filter(person => person.name === newName)

      if(allOccurences.length > 0){
        alert(`${newName} + is alreay used!`)
        setNewName('')
      }
      else{
        const newObject = {
          name: newName,
          phone: newNumber,
        }
        setPersons(persons.concat(newObject))
        setNewName('')
        setNewNumber('')
      }
    }
  }

  const handleNewName = (event) => {
      setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {persons.map((person, id) => (
          <Person key={id} name={person.name} number={person.phone}/>
        ))}
      </div>

      <div>
        debug: {newName}
      </div>
    </div>
  )
}

export default App
