import { Album } from "../../../model/Album/Album";
import { AlbumDemonstration } from "../Demonstration/AlbumDemonstration";

export function AlbumsMapper({ albums }: { albums: Array<Album> }) {
  return (
    <>
        {
          albums.map((record, index) => {  
            if (record.images[0]?.url) {
              return (
                <AlbumDemonstration 
                key={index} 
                album={record} 
                />
              )
            }     
          })
        }
    </>
  )
}