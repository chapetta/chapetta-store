import Person3Icon from '@mui/icons-material/Person3';
import { Link } from 'react-router-dom';
import { useCart } from '../UseHooks/UseCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


export const UserButtons = () => {
  const { setIsCartOpen, cartList } = useCart();

  return (
    <div>
      <button className='px-2 relative' onClick={() => setIsCartOpen(true)}>
        <Link to='/checkout' className='px-2'>
          <ShoppingBagIcon />
        </Link>
        <div className='absolute inline-flex justify-center items-center w-6 h-6 text-white font-bold bg-red-500 border-2 border-white rounded-full -top-2 -right-2'>{cartList.length}</div>
      </button>
      <Person3Icon />
    </div>
  );
};