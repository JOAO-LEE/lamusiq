import { ReactNode, useEffect, useRef, useState } from "react";
import { TrackContext } from "./TrackContext";
import { Track } from "../../model/Track/Track";

export function TrackProvider({ children }: { children: ReactNode }) {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [track, setTrack] = useState<Track | null >(null);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);


  useEffect(() => {
    const audioPlayer = audioPlayerRef.current;
    
    if (audioPlayer) {
      console.log("tem audio")
      // const updateDuration = () => setDuration(Math.floor(audioPlayer.duration));
     
      audioPlayer.onloadedmetadata = () => {
        console.log('oi')
        setDuration(Math.floor(audioPlayer.duration))
      };
    }

  }, [])

  useEffect(() => {
    const audioPlayer = audioPlayerRef.current;
    
    if (audioPlayer) {
      console.log("tem audio")
      // const updateDuration = () => setDuration(Math.floor(audioPlayer.duration));
     
      // audioPlayer.onloadedmetadata = () => {
      //   console.log('oi')
      //   // setDuration(Math.floor(audioPlayer.duration))
      // };
      audioPlayer.ontimeupdate = () => {
        setCurrentTime(Math.floor(audioPlayer.currentTime));
      };
    }

  }, [audioPlayerRef]);

  const togglePlay = () => {

    if (!track) return;

    if (!isPlaying) {
    const playPromise = audioPlayerRef?.current?.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        // const prevValue = isPlaying;
        setIsPlaying(true);
      });
    }

  } else {
    // const prevValue = isPlaying;
    setIsPlaying(false);
    audioPlayerRef?.current?.pause();
  }
}

const playTrack = (selectedTrack: Track): void => {
  if (track?.id !== selectedTrack.id) {
    setIsPlaying(false);
    setTrack(selectedTrack);

    const audioPlayer = audioPlayerRef.current;
    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer.src = selectedTrack.preview_url || ""; // Garantir que o src seja atualizado
      audioPlayer.load();
      // setDuration(Math.floor(audioPlayer.duration))
      audioPlayer.onloadeddata = () => {

        const playPromise = audioPlayer.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
          }).catch(error => console.error(error));
        }
      };
    }
  } else {
    togglePlay();
  }
};

  return (
    <TrackContext.Provider 
    value={{
      playTrack, 
      track: track!, 
      togglePlay, 
      isPlaying,
      duration,
      currentTime, 
      audioPlayerRef
    }}
    >
      {children}
    </TrackContext.Provider>
  )
}

