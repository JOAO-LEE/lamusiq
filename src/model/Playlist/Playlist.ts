import { Item } from "../common/Common";

export interface Playlist extends Item {
  collaborative: boolean
  owner?: {
    display_name: string
  }
  tracks: {
    href: string
    total: number
  }
}

//   album_type: string
//   artists: Array<Artists>
// release_date: string
// external_urls: {
//   spotify: string
// }
// images: ImagesSearchResult


// followers?: {
//   href?: string | null
//   total: number
// }
// explicit: boolean
// duration_ms: number