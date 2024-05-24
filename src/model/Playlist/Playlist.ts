import { Track } from "../Track/Track";
import { Item } from "../common/Common";

export interface Playlist extends Item {
  collaborative: boolean
  owner?: {
    display_name: string
  }
  tracks?: {
    items?: Array<{added_at: string, track: Track}>
    total: number
  }
  description: string
  followers: {
    total: number
  }
}