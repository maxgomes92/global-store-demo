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

  const removeElement = (index) => {
    return () => {
      const newList = [...animals]

      newList.splice(index, 1)

      setAnimals(newList)
    }
  }

  return (
    <>
      <header>List of animals</header>
      <form onSubmit={onClick}>
        <label htmlFor='name'>Animal name</label>
        <input id='name' placeholder="Type in animal name" ref={nameInputRef}></input>
        <button type="submit">Click to add animal</button>
      </form>

      {animals.map((animal, index) => {
        return (
          <p>{animal} <button onClick={removeElement(index)}>Remove</button></p>
        )
      })}
    </>
  );
}

export default App;
