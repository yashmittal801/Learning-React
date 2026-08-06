import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myobj={
    "name": "yash",
    "surname": "Mittal",
    "roll no": 2300970100213
  }

  return (
    <div>
      <h1 className='bg-green-400 text-white p-4 rounded'>Tailwind css</h1>
      <Card channel="chai aur code" someobj={myobj}/>
      <Card username="YashMittal"/>
    </div>
  )
}

export default App
