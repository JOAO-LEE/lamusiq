import { Album } from "../Album/Album";
import { Artist } from "../Artist/Artist";

export interface Tracks {
  name: string, 
  duration_ms: number, 
  explicit: boolean, 
  artists: Array<Artist>, 
  type: string, 
  preview: string  
  album: Album
}
