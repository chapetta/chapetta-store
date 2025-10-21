import { Card } from '@/components/ui/card'
import { CheckoutProducts } from './checkoutComponents/CheckoutProducts'
import { BuyerForm } from './checkoutComponents/BuyerForm'

export const Checkout = () => {
  return (
    <main>
      <CheckoutProducts />
      <BuyerForm />
      <Card></Card>
    </main>
  )
}
