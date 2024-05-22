import { PageType } from "../../../enum/PageType.enum";
import { Album } from "../../../model/Album/Album";
import { AlbumDemonstration } from "../Demonstration/AlbumDemonstration";

export function AlbumsMapper({ albums, pageType }: { albums: Array<Album>, pageType: PageType }) {
  return (
    <>
        {
          albums.map((record, index) => {  
            if (record.images[0]?.url) {
              return (
                <AlbumDemonstration
                pageType={pageType} 
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