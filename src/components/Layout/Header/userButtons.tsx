import Person3Icon from '@mui/icons-material/Person3'
import { Link } from 'react-router-dom'
import { useCart } from '../../../hooks/useCart'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'

export const UserButtons = () => {
  const { quantity } = useCart()

  return (
    <div>
      <button className="relative px-2">
        <Link to="/checkout" className="px-2">
          <ShoppingBagIcon />
        </Link>
        <div className="absolute -top-2 -right-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 font-bold text-white">
          {quantity}
        </div>
      </button>
      <Person3Icon />
    </div>
  )
}
