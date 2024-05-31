import { ReactNode, RefObject, useState } from "react";
import { TrackContext } from "./TrackContext";
import { Track } from "../../model/Track/Track";

export function TrackProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [track, setTrack] = useState<Track | null >(null);
  const [audioPlayer, setAudioPlayer] = useState<RefObject<HTMLAudioElement> | null>(null);

  const togglePlay = () => {
    if(!track) {
      console.log('no track')
      return;
    }

    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    
    if (!prevValue) {
      audioPlayer?.current?.play();
      console.log("tá tocando")
      return;
    }
    audioPlayer?.current?.pause();
    
  }

  const playTrack = (selectedTrack: Track): void => {
    if (track) {
      setTrack(null);
      setTrack(selectedTrack);
      togglePlay();
      return;
    }
    togglePlay();
    setTrack(selectedTrack);
  }

  return (
    <TrackContext.Provider 
    value={{playTrack, track: track!, togglePlay, isPlaying, 
      player: {
      audioPlayer, setAudioPlayer
    }}}
    >
      {children}
    </TrackContext.Provider>
  )
}

