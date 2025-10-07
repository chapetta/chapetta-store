import { Router } from './routes'
import { cartContext } from './contexts/CartContext'
import { useEffect, useState } from 'react'
import { getCategories } from './services/api'
import { CategorieContext } from './contexts/CategoriesContext'
function App() {

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [listCategories, setListCategories] = useState([])


  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories()
      console.log(data)
      setListCategories(data)
    }
    fetchCategories()
  }, [])

  return (
    <>
      <cartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
        <CategorieContext.Provider value={{ listCategories }}>
          <Router />
        </CategorieContext.Provider>
      </cartContext.Provider>
    </>
  )
}

export default App
