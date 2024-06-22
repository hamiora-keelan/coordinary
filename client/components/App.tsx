import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function App() {
  return (
    <div className="app bg-background w-screen h-screen">
      <Nav />
      <Outlet />
    </div>
  )
}
