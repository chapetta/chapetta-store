import { Router } from './routes'
import { cartContext } from './contexts/CartContext'
import { useEffect, useState } from 'react'
import { getCategories, getProducts, getProductsFromQuery } from './services/api'
import { CategorieContext } from './contexts/CategoriesContext'
import { ProductContext } from './contexts/ProductContext'
function App() {

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [listCategories, setListCategories] = useState([])
  const [ products, setProducts] = useState([])
  const [ loading, setLoading ] = useState(false)


  useEffect(() => {
  const fetchInitialData = async () => {
    setLoading(true);
    const [categories, products] = await Promise.all([
      getCategories(),
      getProducts(),
    ]);

    await new Promise((r) => setTimeout(r, 1000));

    setListCategories(categories);
    setProducts(products);
    setLoading(false);
  };

  fetchInitialData();
}, []);

  const handleButtonSearch = async (query: string) => {
    setLoading(true)

    const getProductsFromInputSearch = await getProductsFromQuery(query)
    const delay = new Promise((resolve) => setTimeout(resolve,1000))

    const [results] = await Promise.all([getProductsFromInputSearch, delay])

    setProducts(results)
    setLoading(false)
  }

  return (
    <>
    <ProductContext.Provider value={{products, handleButtonSearch, loading }}>
      <cartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
        <CategorieContext.Provider value={{ listCategories }}>
          <Router />
        </CategorieContext.Provider>
      </cartContext.Provider>
    </ProductContext.Provider>
    </>
  )
}

export default App
