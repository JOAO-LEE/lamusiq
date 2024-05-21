import { Album as AlbumDTO } from "../../../model/Album/Album";
import { AlbumDemonstration } from "../Demonstration/AlbumDemonstration";

export function AlbumsMapper({ albums, artistId }: { albums: Array<AlbumDTO>, artistId?: string }) {
  return (
    <>
        {
          albums.map((record, index) => {  
            if (record.images[0]?.url) {
              return (
                <AlbumDemonstration key={index} album={record} artistId={artistId}/>
              )
            }     
          })
        }
    </>
  )
}