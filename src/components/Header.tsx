import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo/chapettaLogo.png'
import { UserButtons } from './userButtons';

export const Header = () => {
  const { pathname } = useLocation();
  const completeHeader = (
    <header className='flex sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-9 py-4 items-end justify-between text-xl z-10 '>
      <Link to="/home"><img className='h-16 px-2' src={logo} alt="imagem de logo"  /></Link>
      <UserButtons />
    </header>
  );
  
  const simpleHeader = (
    <header className='flex sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-9 py-4 items-end justify-between text-xl z-10 '>
      <Link to="/home"><img className='px-2 w-[100px]' src={logo} alt="imagem de logo"  /></Link>
    </header>
 )

 return (
  <>
   {pathname === '/' ? completeHeader : simpleHeader}
  </>
 )
 
};