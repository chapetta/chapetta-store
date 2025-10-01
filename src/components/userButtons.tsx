import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons'

export const UserButtons = () => {
  return (
    <div>
      <button className='px-2 relative'>
        <FontAwesomeIcon icon={faBagShopping} />
        <div className='absolute inline-flex justify-center items-center w-6 h-6 text-white font-bold bg-red-500 border-2 border-white rounded-full -top-2 -right-2'>3</div>
      </button>
      <a className='px-2'>
        <FontAwesomeIcon icon={faUser} />
      </a>
    </div>
  );
};