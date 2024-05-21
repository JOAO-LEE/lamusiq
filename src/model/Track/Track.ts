import { Album } from "../Album/Album";
import { Artist } from "../Artist/Artist";
import { Item, CommonSearchResponse } from "../common/Common";

export interface Track extends Item { 
  duration_ms: number, 
  explicit: boolean, 
  artists: Array<Artist>, 
  preview: string  
  album: Album
}

export interface TracksResult {
  tracks: Array<Track>
}

export interface TracksTreatedResult {
  explicit: boolean
  album?: {
    images: CommonSearchResponse
  }
  name: string
  artist: string
  duration_ms: number
}
