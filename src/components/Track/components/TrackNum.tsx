import { PageType } from "../../../enum/PageType.enum"

export function TrackNum({ pageType, trackNumber, trackIndex }: {pageType: PageType, trackNumber: number, trackIndex: number}) {
  switch(pageType) {
    case PageType.ALBUM:
      return (
        <p className="text-lg">{trackNumber}</p> 
      )
    case PageType.PLAYLIST || PageType.ARTIST:
      return (
        <p className="text-lg">{trackIndex + 1}</p>
      )
      case PageType.ARTIST:
        return (
          <p className="text-lg">{trackIndex + 1}</p>
        )
    default:
      return <></>  
    }
}