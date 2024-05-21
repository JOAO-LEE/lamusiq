export interface Item {
  id: string
  href: string
  name: string
  type: string
  images: ItemImages
}

export interface CommonSearchResponse<T> {
  next: string
  items: Array<T> | []
}

export type ItemImages = Array<{height: number, width: number, url: string}>


