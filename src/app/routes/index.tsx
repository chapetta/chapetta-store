import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/shared/components/layout/Layout'
import { Checkout } from '@/features/checkout/pages/CheckoutPage'
import { HomePage } from '@/features/home/pages/HomePage'
import { ProductDetails } from '@/features/product/pages/ProductDetailsPage'
import { ShoppingCart } from '@/features/cart/pages/ShoppingCartPage'

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
