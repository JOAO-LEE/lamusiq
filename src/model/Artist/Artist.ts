import { Track } from "../Track/Track";
import { Album } from  "../Album/Album";
import { Item, ItemImages } from "../common/Common";

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

export interface RelatedArtist {
  type: string
  images: ItemImages
  id: string
  name: string
}

export interface ArtistPageInfo extends Artist {
  id: string
  tracks: Array<Track>
  discography: Array<Album>
  related_artists?: Array<RelatedArtist> 
  appears_on?: Array<Album>
}