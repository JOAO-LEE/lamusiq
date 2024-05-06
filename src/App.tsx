// import Sidebar from './components/Sidebar';
// import ActionButtons from './components/ActionButtons';
// import AlbumSuggestions from './components/AlbumSuggestions/AlbumSuggestions';
// import PlaylistsSuggestions from './components/PlaylistsSuggestions/PlaylistsSuggestions';
// import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import { requestBody } from './utils/fetchRelated';
import Layout from './shared/Layout';
import Home from './pages/Home';


function App() {
  const [token, setToken] = useState<string>()

  useEffect(() => {
    const getToken = async (): Promise<void> => {
      const response = await fetch("https://accounts.spotify.com/api/token", 
        {
          method: 'POST', 
          body: requestBody,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          }
        }
      );
      
      const result = await response.json();
      setToken(result)
      console.log(result)
    };

    if(!token) {

      getToken()
    }

  }, [token]);

  return (

    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Route>
  </Routes>
  )
}

export default App
