export interface Stylable {
  className?: string
  style?: React.CSSProperties
}

export interface CategoryProps {
  categoryId: string
  galleries: Array<GalleryProps>
}

export interface Category extends Image {
  galleries: Array<Gallery>
}

export interface Gallery extends Image {
  images: {
    low: Array<Image>
    high: Array<string>
  }
}

export interface GalleryProps {
  galleryId: string
  categoryId: string
  n: number
  hidden?: boolean
}

export interface Image {
  id: string
  url: string
  href: string
  hidden?: boolean
}

export interface SlideshowItem {
  id: string
  url: string
  author: string
}
