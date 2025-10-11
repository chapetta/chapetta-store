import { Link } from 'react-router-dom'
import logo from '../assets/logo/chapettaLogo.png'
import { UserButtons } from './userButtons'

export const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-10 flex items-end justify-between bg-slate-950 px-9 py-4 text-xl text-slate-200 shadow-xl shadow-slate-400">
        <Link to="/">
          <img className="h-16 px-2" src={logo} alt="imagem de logo" />
        </Link>
        <UserButtons />
      </header>
    </>
  )
}
