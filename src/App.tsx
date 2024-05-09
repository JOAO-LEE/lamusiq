import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './shared/Layout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { Me } from './pages/Me';
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider } from './context/AuthContext/AuthProvider';

export default function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
          <Route element={ <PrivateRoutes /> }>
            <Route  element={ <Layout /> }>
              <Route path="/" index  element={<Home />} />
              <Route  path="/me" element={<Me />}  />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}