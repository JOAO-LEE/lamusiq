import { ReactNode, useEffect, useRef, useState } from "react";
import { TrackContext } from "./TrackContext";
import { Track } from "../../model/Track/Track";

export function TrackProvider({ children }: { children: ReactNode }) {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const animationRef = useRef<number | null>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [track, setTrack] = useState<Track | null >(null);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);


  useEffect(() => {
    const audioPlayer = audioPlayerRef.current;
    const progressBar = progressBarRef.current;
    
    if (audioPlayer && progressBar) {
      const seconds = Math.floor(audioPlayer.duration)
      progressBar.max = seconds.toString();
      console.log(progressBar.max)
      setDuration(seconds);
    }

  }, [audioPlayerRef]);

  useEffect(() => {
    const audioPlayer = audioPlayerRef.current;
    
    if (audioPlayer) {
      audioPlayer.ontimeupdate = () => {
        setCurrentTime(Math.floor(audioPlayer.currentTime));
      };
    }

  }, [audioPlayerRef]);

  const togglePlay = () => {

    if (!track) return;

    if (!isPlaying) {
    const playPromise = audioPlayerRef?.current?.play();
    animationRef.current = requestAnimationFrame(whilePlaying)

    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true);
      });
    }

  } else {
    setIsPlaying(false);
    audioPlayerRef?.current?.pause();
    cancelAnimationFrame(animationRef.current!)
  }
}

const playTrack = (selectedTrack: Track): void => {
  if (!selectedTrack.preview_url) return;

  if (track?.id !== selectedTrack.id) {
    setIsPlaying(false);
    setTrack(selectedTrack);

    const audioPlayer = audioPlayerRef.current;
    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer.src = selectedTrack.preview_url || "";
      audioPlayer.load();
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

const changeRange = () => {
  if (audioPlayerRef.current && progressBarRef.current) {
    const progressBarValueNum = +progressBarRef.current.value
    audioPlayerRef.current.currentTime = progressBarValueNum;
    const value = (progressBarValueNum / duration * 100);
    progressBarRef.current.style.setProperty('--seek-before-width', `${value}%`);
    setCurrentTime(progressBarValueNum);
  }
};


const whilePlaying = () => {
  const progressBar = progressBarRef.current;
  const audioPlayer = audioPlayerRef.current;

  if (progressBar && audioPlayer) {
    progressBar.value = audioPlayer.currentTime.toString();
    const progressBarValueNum = +progressBarRef.current.value
    const value = (progressBarValueNum / duration * 100);
    progressBarRef.current.style.setProperty('--seek-before-width', `${value}%`);
    setCurrentTime(progressBarValueNum);
    animationRef.current = requestAnimationFrame(whilePlaying)

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
      audioPlayerRef,
      progressBar: progressBarRef,
      changeRange,
    }}
    >
      {children}
    </TrackContext.Provider>
  )
}

