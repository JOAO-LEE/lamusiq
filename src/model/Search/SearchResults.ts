import { TracksTreatedResult } from "../Track/Track";
import { CommonSearchResponse } from "../common/Common";

export interface SearchBestResults {
  image: string, 
  name: string, 
  type: string, 
  tracks: Array<TracksTreatedResult>
}

export interface SearchResultsDTO {
  albums: CommonSearchResponse
  artists: CommonSearchResponse
  audiobooks: CommonSearchResponse
  episodes: CommonSearchResponse
  playlists: CommonSearchResponse
  shows: CommonSearchResponse
  tracks: CommonSearchResponse
}
