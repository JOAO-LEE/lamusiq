import { ArtistPage } from './pages/ArtistPage';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';
import { MePage } from './pages/MePage';
import { AlbumPage } from './pages/AlbumPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { PlaylistPage } from './pages/PlaylistPage';
import { AuthProvider } from './context/auth/AuthContext/AuthProvider';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import PrivateRoutes from './utils/PrivateRoutes';
import './App.css';
import { TrackProvider } from './context/TrackContext/TrackProvider';

export default function App() {
  return (
    <AuthProvider>
      <TrackProvider>
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
                  <Route path="/playlist/:id" element={ <PlaylistPage /> } />
                </Route>
          </Route>
        </Routes>
      </TrackProvider>
    </AuthProvider>
  )
}