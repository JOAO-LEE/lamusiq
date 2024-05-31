import { RefObject, SetStateAction } from "react";
import { Track } from "../Track/Track";

export interface TrackContext {
  track: Track
  playTrack: (track: Track) => void
  togglePlay: (playerRef: RefObject<HTMLAudioElement>) => void
  isPlaying: boolean
  player: {
    audioPlayer: RefObject<HTMLAudioElement> | null
    setAudioPlayer: React.Dispatch<SetStateAction<RefObject<HTMLAudioElement> | null>>
  }
}