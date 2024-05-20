import { Artist } from "../Artist/Artist"
import { ImagesSearchResult } from "../Search/SearchResults"

export interface Album {
  id: string
  name: string
  album_type: string
  total_tracks: number
  images: ImagesSearchResult
  type: string
  release_date: string
  artists: Array<Artist>
}