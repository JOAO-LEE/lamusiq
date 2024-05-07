import { Home, Search, Heart, X } from "lucide-react";
import { useState } from "react";
import InputSearch from './Search/Search';
import CosmeticButtons from "./ComesticButtons/CosmeticButtons";


export default function Sidebar() {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  return (
    <aside className="w-72 bg-zinc-950 p-6">
       <CosmeticButtons />
       {
          !isSearchOpen
          ?
            (
              <>
                <nav className="space-y-5 mt-10">
                  <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200"><Home />Home</a>
                  <p className="flex items-center gap-3 text-sm font-semibold text-zinc-200" onClick={() => setIsSearchOpen(!isSearchOpen)}><Search />Search</p>
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
              </>
            )
          :
          (
            <div className="mt-5">
              <X onClick={() => setIsSearchOpen(!isSearchOpen)} />
              <InputSearch />
            </div>
          )    
       }
    </aside>
  )
}