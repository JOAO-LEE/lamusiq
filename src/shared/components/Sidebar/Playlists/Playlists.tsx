import { ListMusic } from "lucide-react"

function Playlists() {
  return (
    <>
    <nav className="hidden lg:flex flex-col mt-6 pt-10 border-t border-zinc-800 gap-3">
      <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Hot Today!</a>
      <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Daily Pop</a>
      <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">French Rap</a>
      <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Gym Soundtrack</a>
      <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">90's R&B</a>
      <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Best of MPB</a>
      <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Club Hits</a>
    </nav>
    <div className="mt-6 pt-5 border-t border-zinc-800  lg:hidden">
      <a href=""><ListMusic /></a>
    </div>
    </>
  )
}

export default Playlists