export interface Item {
  id: string
  href: string
  name: string
  type: string
  images: ItemImages
}

export interface CommonSearchResponse {
  next: string
  items: Array<Item> | []
}

export type ItemImages = Array<{height: number, width: number, url: string}>


