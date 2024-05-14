import { Mic2, LayoutList, SquareMenu, MonitorSpeaker, Volume2, Maximize2 } from 'lucide-react'

export default function PlayerActions() {
  return (
    <div className="hidden md:flex items-center justify-end gap-4 w-1/3">
      <div className="hidden lg:flex gap-2">
        <Mic2 size={20}/>
        <LayoutList size={20} />
        <SquareMenu size={20}/>
        <MonitorSpeaker size={20} />
      </div>
      <div className="flex items-center gap-2">
          <Volume2 size={20} />
          <div className="h-1 w-24 bg-zinc-600 group-hover:bg-zinc-700 rounded-full">
              <div className="w-20 bg-zinc-200 h-1 rounded-full"></div>
          </div>
      </div>
      <Maximize2 size={20} className="hidden lg:inline"/>
    </div>
  )
}

