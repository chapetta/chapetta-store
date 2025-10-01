import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons'

export const UserButtons = () => {
  return (
    <div>
      <button className='px-2'>
        <FontAwesomeIcon icon={faBagShopping} />
      </button>
      <a className='px-2'>
        <FontAwesomeIcon icon={faUser} />
      </a>
    </div>
  );
};