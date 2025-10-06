import { Router } from './routes'
import { cartContext } from './contexts/CartContext'
import { useState } from 'react'
function App() {
  const [isCartOpen, setIsCartOpen ] = useState(false)
  return (
    <>
      <cartContext.Provider value={{isCartOpen, setIsCartOpen}}>
        <Router />
      </cartContext.Provider>
    </>
  )
} 

export default App
