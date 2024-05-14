import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext/SearchProvider';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext/SearchContext';

function Layout() {
  const {isSearchOpen} = useContext(SearchContext);

  console.log(isSearchOpen)
  return (
    <SearchProvider>
      <div className="h-dvh flex flex-col">
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 h-full w-[27rem]">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </SearchProvider>
  )
}

export default Layout