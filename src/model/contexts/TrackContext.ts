import { RefObject } from "react";
import { Track } from "../Track/Track";

export interface TrackContext {
  track: Track
  playTrack: (track: Track) => void
  togglePlay: () => void
  isPlaying: boolean
  audioPlayerRef: RefObject<HTMLAudioElement>
  currentTime: number
  duration: number
}