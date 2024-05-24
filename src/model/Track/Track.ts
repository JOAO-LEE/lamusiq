import { Album } from "../Album/Album";
import { Artist } from "../Artist/Artist";
import { Item, ItemImages } from "../common/Common";

export interface Track extends Item { 
  duration_ms: number, 
  explicit: boolean, 
  artists: Array<Artist>, 
  preview: string  
  album: Album
  images: ItemImages
  track_number: number
  added_at? : string
}

export interface TracksResult {
  tracks: Array<Track>
}

export interface TrackFromPlaylist {
  track: Track
}

export interface TracksTreatedResult {
  explicit: boolean
  album?: {
    images: ItemImages
  }
  name: string
  artist: string
  duration_ms: number
}
