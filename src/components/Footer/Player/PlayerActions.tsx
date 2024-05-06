import { Mic2, LayoutList, SquareMenu, MonitorSpeaker, Volume2, Maximize2 } from 'lucide-react'

export default function PlayerActions() {
  return (
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
  )
}

