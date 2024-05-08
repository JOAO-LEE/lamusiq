import { Link } from "react-router-dom"
import supabase from "../config/supabaseConfig"
import { FormEvent } from "react";

function SignIn() {

  const handleGoogleSignIn = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: "/" } });
  }

  return (
    <div className="flex flex-col justify-between h-screen">
      <header className='flex flex-col gap-0.5 items-center'>
        <h1 className="text-6xl text-green-500">Hello!</h1>
        <h2 className='text-5xl'>Welcome to</h2>
        <span className='text-7xl text-green-400 hover:scale-110 transition-all duration-700 delay-150 font-extralight'>lamusiq</span>
        <p className="text-4xl">A Spotify Clone</p>
      </header>
      <main className="flex justify-center items-center p-4 h-1/2">
        <form className="flex items-center justify-center p-2 bg-zinc-800 rounded-xl h-1/3 w-1/2 border-zinc-700 border">
          <button 
          onClick={(e) => handleGoogleSignIn(e)}
          className="border border-zinc-100 rounded-lg p-3 text-center hover:border-green-300 transition-all ease-in-out duration-700 hover:scale-105">
            <img 
            src="src/assets/images/google-logo.png" alt="Google Logo" className="size-6 inline mr-2"/>
              Sign in with Google
          </button>
        </form>
      </main>
      <footer className="flex flex-col gap-2 items-center p-2 text-sm text-zinc-600">
        <p>This project was created for portfolio purposes only.</p>
        <div className="flex gap-3">
          <Link to="/about">About</Link>
          <Link to="https://twitter.com/joaumlee">More</Link>
          <Link to="https://github.com/JOAO-LEE/lamusiq">See this project on Github</Link>
        </div>
      </footer>
    </div>
  )
}

export default SignIn