import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import { requestBody } from './utils/fetchRelated';
import Layout from './shared/Layout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  

  useEffect(() => {
    
    
  

  }, []);

  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
      </Route>
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  )
}

export default App
 