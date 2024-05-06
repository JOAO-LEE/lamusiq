import { Home, Search, Heart } from "lucide-react";

export default function Sidebar() {

  return (
    <aside className="w-72 bg-zinc-950 p-6">
        <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-red-500"/>
            <div className="size-3 rounded-full bg-yellow-500"/>
            <div className="size-3 rounded-full bg-green-500"/>
        </div>
        <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200"><Home />Home</a>
            <p href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200"><Search />Search</p>
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
  )
}