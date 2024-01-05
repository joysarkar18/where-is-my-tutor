import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<div className='bg-indigo-600 w-full h-screen'></div>
    </>
  )
}

export default App
