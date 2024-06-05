import { RefObject } from "react";
import { Track } from "../Track/Track";

export interface TrackContext {
  track: Track
  playTrack: (track: Track) => void
  togglePlay: () => void
  changeRange: () => void
  isPlaying: boolean
  audioPlayerRef: RefObject<HTMLAudioElement>
  progressBar: RefObject<HTMLInputElement>
  currentTime: number
  duration: number
}