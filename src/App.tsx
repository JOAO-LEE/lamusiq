import './App.css'
import { ChevronLeft, ChevronRight, Heart, Home, Search, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, SquareMenu, MonitorSpeaker, Volume2, Maximize2 } from 'lucide-react';


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
              <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="group-hover:scale-[1.02] transition duration-500 ease-in-out rounded-lg"/>
              <strong className="group-hover:scale-[1.02] transition duration-500">Daily Mix 1</strong> 
              <span className="text-sm text-zinc-700 group-hover:text-zinc-50 transition-colors duration-500">Josman, Nekfeu, Arma Jackson and more</span> 
            </a>
          </div>
        </main>
      </div>
      <footer className='bg-neutral-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
        <div className="flex items-center gap-2">
          <img src="https://source.boomplaymusic.com/group10/M00/5D/77/ced718d43eef461ca50c192e4125cc11_320_320.jpg" alt="Album cover" className="size-14"/>
          <div className="flex flex-col">
            <strong className="font-normal">Elevador</strong>
            <span className="text-xs text-zinc-500">JoãoLee</span>
          </div>
          <Heart className="ml-4 size-5"/>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <Shuffle size={20}
            className="text-zinc-200"/>
            <SkipBack size={20}
            className="text-zinc-200"/>
            <button className="p-2 rounded-full bg-zinc-200 text-black"><Play fill="true"/></button>
            <SkipForward size={20}
            className="text-zinc-200"/>
            <Repeat size={20}
            className="text-zinc-200"/>
          </div>
          <div className="group flex justify-between items-center gap-2">
            <span className="text-zinc-500 text-xs group-hover:text-zinc-300 transition-colors">0:31</span>
            <div className="h-1 w-96 bg-zinc-600 group-hover:bg-zinc-700 rounded-full">
              <div className="w-40 bg-zinc-200 h-1 rounded-full"></div>
            </div>
            <span className="text-zinc-500 text-xs group-hover:text-zinc-300 transition-colors">4:19</span>
          </div>


        </div>
      
        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <SquareMenu size={20}/>
          <MonitorSpeaker size={20} />
          <div className="flex items-center gap-2">
            <Volume2 size={20} />
            <div className="h-1 w-24 bg-zinc-600 group-hover:bg-zinc-700 rounded-full">
              <div className="w-20 bg-zinc-200 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer>
    </div>
  )
}

export default App
