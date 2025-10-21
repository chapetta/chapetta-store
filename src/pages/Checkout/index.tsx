import { CheckoutProducts } from './checkoutComponents/CheckoutProducts'
import { BuyerForm } from './checkoutComponents/BuyerForm'
import { PaymentMethod } from './checkoutComponents/PaymentMethod'

export const Checkout = () => {
  return (
    <main>
      <CheckoutProducts />
      <BuyerForm />
      <PaymentMethod />
    </main>
  )
}
