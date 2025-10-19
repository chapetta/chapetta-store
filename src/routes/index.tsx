import { Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage/HomePage'
import { ShoppingCart } from '@/pages/ShoppingCart'
import { Layout } from '@/components/Layout/Layout'
import { ProductDetails } from '@/pages/ProductDetails'
import { Checkout } from '@/pages/Checkout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
