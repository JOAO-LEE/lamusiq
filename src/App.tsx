import { ArtistPage } from './pages/ArtistPage';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';
import { MePage } from './pages/MePage';
import { AlbumPage } from './pages/AlbumPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { AuthProvider } from './context/auth/AuthContext/AuthProvider';
import { Routes, Route } from 'react-router-dom';
import Layout from './shared/Layout';
import PrivateRoutes from './utils/PrivateRoutes';
import './App.css';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/sign-in" element={ <SignInPage /> } />
          <Route path="/" element={ <PrivateRoutes /> }>
            <Route element={ <Layout /> }>
              <Route path="/" index element={ <HomePage /> } />
              <Route path="/me" element={ <MePage /> }  />
              <Route path="/search">
                <Route path="results" element={ <SearchResultsPage /> } />
              </Route>
              <Route path="/artist/:id" element={ <ArtistPage /> } />
              <Route path="/album/:id" element={ <AlbumPage /> } />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}