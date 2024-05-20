interface Artists {
  id: string
  name: string
  href: string
}

export type ImagesSearchResult = Array<{height: number, width: number, url: string}>

export interface SearchResult {
  id: string
  href: string
  album_type: string
  artists: Array<Artists>
  release_date: string
  name: string
  external_urls: {
    spotify: string
  }
  images: ImagesSearchResult
  type: string
  album?: {
    images: ImagesSearchResult
  }
  owner?: {
    display_name: string
  }
  followers?: {
    href?: string | null
    total: number
  }
  explicit: boolean
  duration_ms: number

}

export interface TracksTreatedResult {
  explicit: boolean
  album?: {
    images: ImagesSearchResult
  }
  name: string
  artist: string
  duration_ms: number
}

export interface CommonSearchResults {
  next: string
  items: Array<SearchResult> | []
}

export interface BestResultsDTO {
  image: string, 
  name: string, 
  type: string, 
  tracks: Array<TracksTreatedResult>
}

export interface SearchResultsDTO {
  albums: CommonSearchResults
  artists: CommonSearchResults
  audiobooks: CommonSearchResults
  episodes: CommonSearchResults
  playlists: CommonSearchResults
  shows: CommonSearchResults
  tracks: CommonSearchResults
}
