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