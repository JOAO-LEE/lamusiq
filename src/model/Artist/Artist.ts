import { Tracks } from "../Tracks/Tracks"
import { Album } from  "../Album/Album"
import { ImagesSearchResult } from "../Search/SearchResults"

export interface Artist {
  id: string
  name: string
  total_listeners: number
  image: string
}


export interface RelatedArtist {
  type: string
  images: ImagesSearchResult
  id: string
  name: string
}

export interface ArtistPage extends Artist {
  id: string
  tracks: Array<Tracks>
  discography: Array<Album>
  related_artists?: Array<RelatedArtist> 
  appears_on?: Array<Album>
}