import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext/SearchProvider';

function Layout() {
  return (
    <SearchProvider>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 h-full">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </SearchProvider>
  )
}

export default Layout