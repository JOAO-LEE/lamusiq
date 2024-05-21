import { Track } from "../Track/Track";
import { Album } from  "../Album/Album";
import { Item } from "../common/Common";

export interface Artist extends Item {
  id: string
  name: string
  followers: {
    total: number
  }
}

export interface ArtistResult {
  artists: Array<Artist>
}

export interface ArtistPageInfo extends Artist {
  id: string
  tracks: Array<Track>
  discography: Array<Album>
  related_artists?: Array<Artist> 
  appears_on?: Array<Album>
}