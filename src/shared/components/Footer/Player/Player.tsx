import { Shuffle, SkipBack, Play, SkipForward, Repeat, Heart, EllipsisVertical } from "lucide-react";

export default function Player() {
  return (
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
      <div className="group flex justify-between items-center gap-2 w-full">
        <Heart className="md:hidden" />
        <span className="text-zinc-500 text-xs group-hover:text-zinc-300 transition-colors">0:31</span>
        <div className="h-1 w-60 lg:w-96 bg-zinc-600 group-hover:bg-zinc-700 rounded-full">
          <div className="w-12 lg:w-40 bg-zinc-200 h-1 rounded-full"></div>
        </div>
        <span className="text-zinc-500 text-xs group-hover:text-zinc-300 transition-colors">4:19</span>
        <EllipsisVertical className="md:hidden"/>
      </div>
    </div>
  )
}