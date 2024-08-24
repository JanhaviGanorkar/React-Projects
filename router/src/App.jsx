import { useState } from 'react'
import { Button } from './components/ui/button'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className='w-full h-screen bg-black text-white'>
      {/* <Header/> */}
      {/* <Footer/> */}
    <Button>Submit</Button>
    </div>
    
  )
}

export default App
