import logo from '../assets/logo/hashtag.svg'
import { UserButtons } from './userButtons';

export const Header = () => {
  return (
    <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200'>
      <a href="/home"><img className='h-16 px-2' src={logo} alt="imagem de logo"  /></a>
      <UserButtons />
    </header>
  );
};