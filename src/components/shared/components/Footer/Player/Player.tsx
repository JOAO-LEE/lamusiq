import { Shuffle, SkipBack, Play, SkipForward, Repeat, Heart, Volume2, Pause } from "lucide-react";
import { useContext, useEffect } from "react";
import { TrackContext } from "../../../../../context/TrackContext/TrackContext";
import "../../../../../styles/progressBar.css";
import { calculateDuration } from "../../../../../utils/calculateDuration";

export default function Player() {
  const { track, togglePlay, isPlaying, duration, audioPlayerRef, changeRange, progressBar } = useContext(TrackContext);

  useEffect(() => {
  }, [audioPlayerRef]);

  return (
    <div className="flex flex-col-reverse items-center flex-1 w-1/3">
      <div className="flex items-center gap-4">
        <Shuffle size={20}
        className="text-zinc-200"/>
        <SkipBack size={20}
        className="text-zinc-200"/>
        <button 
        className="p-2 rounded-full bg-zinc-200 text-black" 
        onClick={() => togglePlay()}
        >
          {
            !isPlaying 
            ? 
              (
                <Play fill="true"/> 
              )
            : 
              (
                <Pause fill="true"/> 
              )
          }
        </button>
        <SkipForward size={20}
        className="text-zinc-200"/>
        <Repeat size={20}
        className="text-zinc-200"/>
      </div>
      <audio 
      src={track?.preview_url}
      preload="metadata"
      ref={audioPlayerRef}
      >
      </audio>
      {
        (track !== null)
        && 
          (
            <div className="flex justify-between items-center gap-2 relative">
              <p>{calculateDuration(audioPlayerRef.current?.currentTime ?? 0)}</p>
              <input 
              type="range" 
              className="progress-bar"
              defaultValue="0"
              onChange={changeRange}
              ref={progressBar}
              />
              <p>{calculateDuration(duration)}</p>
            </div>
          )
      }
    </div>
  )
}