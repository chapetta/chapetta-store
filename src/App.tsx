import { Router } from './routes'
import { cartContext } from './contexts/CartContext'
import { useEffect, useState } from 'react'
import { getCategories, getProducts, getProductsFromQuery } from './services/api'
import { CategorieContext } from './contexts/CategoriesContext'
import { ProductContext } from './contexts/ProductContext'
import type { Products } from './types/ProductTypes'
function App() {

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [listCategories, setListCategories] = useState([])
  const [ products, setProducts] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ cartList, setCartList ] = useState<Products[] | []>([])


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

  const handleSearchForCategory = async (category:string) => {
    const productsList = await getProducts()

     const newListByCategory =  productsList.filter((item: Products) => item.category === category)

     setProducts(newListByCategory)
  }

  const handleButtonAddToCart = (product: Products) => {

  
    setCartList((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id)

      if (existingProduct) {
        return prevCart.map((item) => {
         return item.id === product.id ? 
         {...item, quantity: item.quantity +1} : item
        })
      }

      console.log(existingProduct , 'exiting products aqui');
      console.log(prevCart, 'prev cart aqui');
      
      
      return [...prevCart, {...product, quantity: 1}]
    })

    console.log(cartList, 'cartlist aqui');
    
    
  }

  const handleButtonAddQuantity = (id: number) => {
   
    setCartList((prevCart) => 
      prevCart.map((item) => {
        return item.id === id ? {...item, quantity: item.quantity +1} : item
      })
    )
  }


  return (
    <>
    <ProductContext.Provider value={{products, handleButtonSearch, loading }}>
      <cartContext.Provider value={{ 
        isCartOpen, setIsCartOpen, handleButtonAddToCart, cartList, handleButtonAddQuantity,
        }}>
        <CategorieContext.Provider value={{ listCategories, handleSearchForCategory }}>
          <Router />
        </CategorieContext.Provider>
      </cartContext.Provider>
    </ProductContext.Provider>
    </>
  )
}

export default App
