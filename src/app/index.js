import { useState, useRef } from 'react'

function App() {
  const [animals, setAnimals] = useState(['Dog'])
  const nameInputRef = useRef()

  const onClick = (event) => {
    const form = event.target
    event.preventDefault()

    setAnimals([ ...animals, nameInputRef.current.value ]) // Spread operator
    form.reset()
  }

  return (
    <>
      <header>List of animals</header>
      <form onSubmit={onClick}>
        <label htmlFor='name'>Animal name</label>
        <input id='name' placeholder="Type in animal name" ref={nameInputRef}></input>
        <button type="submit">Click to add animal</button>
      </form>

      {animals.map((animal) => {
        return (
          <p>{animal}</p>
        )
      })}
    </>
  );
}

export default App;
