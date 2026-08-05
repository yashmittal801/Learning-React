import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(15);
  // let counter=15;
  const addvalue = () => {
    if (counter < 20) {
      counter += 1;
      setCounter(counter);
      console.log("Clicked", counter);
    }
  }

  const removevalues = () => {
    if (counter>0) {
      counter -= 1;
      setCounter(counter);
      console.log("clicked", counter);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addvalue}>Add Values</button>
      <br />
      <button onClick={removevalues}>Remove Values</button>
      <footer>footer {counter}</footer>
    </>
  )
}
export default App
