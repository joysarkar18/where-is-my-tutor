import { useState } from 'react'
import AppBar from './componants/appBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppBar></AppBar>
    <h1 className="text-5xl font-bold underline text-blue-700 bg-slate-800 h-screen w-screen text-center">
      where is my tutor
    </h1>
    </>
  )
}

export default App
