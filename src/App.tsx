import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import { requestBody } from './utils/fetchRelated';
import Layout from './shared/Layout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import supabase from './config/supabaseConfig';

const getSession = async () => {
  const session = await supabase.auth.getSession();
console.log(session)
}

function App() {
  // const navigate = useNavigate();
  // const session = supabase.auth.ses
  

  useEffect(() => {

    getSession() 
    

    // supabase.auth.getUser().then((data) => {
    //   console.log(data)
    // }).catch(() => {
    //   navigate("/sign-in")
    // });
  

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
 