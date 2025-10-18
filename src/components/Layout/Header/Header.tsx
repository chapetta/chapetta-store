import { Link } from 'react-router-dom'
import { UserButtons } from './userButtons'
import { Store } from 'lucide-react'

export const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-10 flex items-end justify-between bg-slate-950 px-9 py-4 text-xl text-slate-200 shadow-xl shadow-slate-400">
        <Link to="/">
          <h2 className="flex gap-1 font-semibold text-blue-600">
            <Store className="text-white" />
            Chapetta<span className="font-sbold text-white">Store</span>
          </h2>
        </Link>
        <UserButtons />
      </header>
    </>
  )
}
