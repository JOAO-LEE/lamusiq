import './App.css'
import { ChevronLeft, ChevronRight, Heart, Home, Search, Play } from 'lucide-react';


function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className='flex flex-1'>
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-red-500"/>
            <div className="size-3 rounded-full bg-yellow-500"/>
            <div className="size-3 rounded-full bg-green-500"/>
          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200"><Home />Home</a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200"><Search />Search</a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200"><Heart />Favorites</a>
          </nav>
          <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Hot Today!</a>
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Daily Pop</a>
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">French Rap</a>
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Gym Soundtrack</a>
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">90's R&B</a>
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Best of MPB</a>
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Club Hits</a>

          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-6">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="text-3xl font-semibold mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href='' className="group rounded bg-white/5 flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="size-20"/>
              <strong>Album name</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible"><Play fill="true"/></button>
            </a>
            <a href='' className="group rounded bg-white/5 flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="size-20 "/>
              <strong>Album name</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible transition"><Play fill="true"/></button>
            </a>
            <a href='' className="group rounded bg-white/5 flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="size-20"/>
              <strong>Album name</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible transition"><Play fill="true"/></button>
            </a>
            <a href='' className="group rounded bg-white/5 flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="size-20"/>
              <strong>Album name</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible transition"><Play fill="true"/></button>
            </a>
            <a href='' className="group rounded bg-white/5 flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="size-20"/>
              <strong>Album name</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible transition"><Play fill="true"/></button>
            </a>
            <a href='' className="group rounded bg-white/5 flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="size-20"/>
              <strong>Album name</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible transition"><Play fill="true"/></button>
            </a>
          </div>
          <div className="flex justify-between items-center mt-10">
            <h2 className="text-2xl font-semibold">Made for João Lima</h2>
            <a href="" className="text-xs text-zinc-700 hover:text-zinc-100 transition-colors">Show all</a>
          </div>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <a className="group bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="group-hover:scale-105 transition duration-500 ease-in-out rounded-lg"/>
              <strong className="group-hover:scale-[1.02] transition duration-500">Daily Mix 1</strong> 
              <span className="text-sm text-zinc-700 group-hover:text-zinc-50 transition-colors duration-500">Josman, Nekfeu, Arma Jackson and more</span> 
            </a>
            <a className="group bg-white/5 p-3 rounded-md flex flex-col gap-2">
              <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="group-hover:scale-105 transition duration-500 ease-in-out rounded-lg"/>
              <strong className="group-hover:scale-[1.02] transition duration-500">Daily Mix 1</strong> 
              <span className="text-sm text-zinc-700 group-hover:text-zinc-50 transition-colors duration-500">Josman, Nekfeu, Arma Jackson and more</span> 
            </a>
          </div>
        </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 p-6'>
        footer
      </footer>
    </div>
  )
}

export default App
