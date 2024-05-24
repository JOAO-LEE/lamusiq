import { Artist } from "../Artist/Artist"
import { Item } from "../common/Common"

export interface Album extends Item {
  album_type: string
  total_tracks: number
  release_date: string
  artists: Array<Artist>
  album_group: string
  label?: string
}

export interface ArtistAlbumsResponse {
  items: Array<Album>
}