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
  total: number
}

export type ItemImages = Array<{height: number, width: number, url: string}>


