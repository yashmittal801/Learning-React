import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div className="w-full, h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2 ">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-3 py-1 text-white rounded-full' style={{ backgroundColor: "red" }}
            onClick={() => setcolor("red")}>Red</button>
          <button className='outline-none px-3 py-1 text-white rounded-full' style={{ backgroundColor: "green" }}
            onClick={() => setcolor("green")}>Green</button>
          <button className='outline-none px-3 py-1 text-white rounded-full' style={{ backgroundColor: "blue" }}
            onClick={() => setcolor("blue")}>Blue</button>
            <button className='outline-none px-3 py-1 text-white rounded-full' style={{ backgroundColor: "yellow" }}
            onClick={() => setcolor("yellow")}>Yellow</button>
        </div>
      </div>


    </div>
  )
}

export default App
