import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="h-screen flex flex-col">
      <div className='flex flex-1'>
        <Sidebar />
        <main className="flex-1 p-6">
        <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout