import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext/SearchProvider';

function Layout() {
  return (
    <SearchProvider>
      <div className="h-dvh flex flex-col">
        <div className="flex flex-1">
          <aside className="h-full bg-slate-950">
            <Sidebar />
          </aside>
          <main className="flex-1 h-full ">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </SearchProvider>
  )
}

export default Layout