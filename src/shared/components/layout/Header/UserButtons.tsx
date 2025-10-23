import { Link } from 'react-router-dom'
import { Button } from '@/shared/components/ui/button'
import { ShoppingBasketIcon, User2Icon } from 'lucide-react'
import { useCartContext } from '@/shared/hooks/useCartContext'

export const UserButtons = () => {
  const { quantity } = useCartContext()

  return (
    <div className="flex items-center gap-5">
      <Button className="relative px-2">
        <Link to="/cart" className="px-2">
          <ShoppingBasketIcon />
        </Link>
        <div className="absolute -top-2 -right-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 font-bold text-white">
          {quantity}
        </div>
      </Button>
      <span>|</span>
      <div className="flex items-center gap-3">
        <User2Icon />
        <p className="text-2 flex flex-col items-start text-center text-[14px]">
          User <span>Account</span>
        </p>
      </div>
    </div>
  )
}
