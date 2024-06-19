import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import SignInButton from '../authentication/SignInButton'
import SignOutButton from '../authentication/SignOutButton'

export default function Sidebar() {
  const { user } = useAuth0()

  return (
    <div className="relative border-box flex h-[90%] w-full flex-col border-4 border-green-300">
      <div className="border-box flex h-auto w-full flex-col border-4 border-purple-300">
        <Link
          to=""
          className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
        >
          About Us
        </Link>
        <Link
          to="posts"
          className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
        >
          Our Work
        </Link>
        <Link
          to="donate"
          className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
        >
          Our Registries
        </Link>
        <Link
          to="playground"
          className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
        >
          Charity Playground
        </Link>
        <Link
          to="sandbox"
          className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
        >
          Charity Sandbox
        </Link>
        <Link
          to="admin"
          className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
        >
          Go to Admin Portal
        </Link>
      </div>
      <div className="absolute border-box border-4 border-sky-300 bottom-0 w-full text-center py-2">
        { user ? <SignOutButton /> : <SignInButton />}
      </div>
    </div>
  )
}
