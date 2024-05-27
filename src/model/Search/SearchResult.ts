import { Album } from "../Album/Album";
import { Artist } from "../Artist/Artist";
import { Playlist } from "../Playlist/Playlist";
import { Track } from "../Track/Track";
import { CommonSearchResponse } from "../common/Common";

export interface SearchBestResults {
  image: string, 
  name: string, 
  type: string, 
  tracks: Array<Track>
}

export interface SearchResults {
  albums: CommonSearchResponse<Album>
  artists: CommonSearchResponse<Artist>
  audiobooks: CommonSearchResponse<Album>
  episodes: CommonSearchResponse<Album>
  playlists: CommonSearchResponse<Playlist>
  shows: CommonSearchResponse<Album>
  tracks: CommonSearchResponse<Track>
}

// export interface SearchResultFetch {
//   result: SearchResults
//   loading: boolean
// }