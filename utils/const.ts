import { Category, CategoryProps, Gallery, GalleryProps, Image, SlideshowItem } from './types'

const ROOT = process.env.NEXT_PUBLIC_STATIC_URL

export const coverHome = `${ROOT}/gallery/home`

const generateGallery = ({ categoryId, galleryId, n }: GalleryProps): Gallery => {
  return {
    id: galleryId,
    url: `${ROOT}/portfolio/cover/${galleryId}.jpg`,
    href: `/portfolio/${categoryId}/${galleryId}`,
    images: {
      low: [...Array(n)].map((_, index) => {
        return <Image>{
          url: `${ROOT}/portfolio/${galleryId}-low/img${index + 1}.jpg`,
          href: `/portfolio/${categoryId}/${galleryId}/img${index + 1}.jpg`,
        }
      }),
      high: [...Array(n)].map((_, index) => {
        return `${ROOT}/portfolio/${galleryId}-high/img${index + 1}.jpg`
      }),
    },
  }
}

const generatePortfolio = (categories: Array<CategoryProps>): Array<Category> => {
  return categories.map(({ categoryId, galleries }) => {
    return <Category>{
      id: categoryId,
      url: `${ROOT}/portfolio/cover/${categoryId}.jpg`,
      href: `/portfolio/${categoryId}`,
      galleries: galleries.map(({ galleryId, n }) => generateGallery({ categoryId, galleryId, n })),
    }
  })
}

export const portfolio = generatePortfolio([
  <CategoryProps>{
    categoryId: 'family',
    galleries: [
      <GalleryProps>{ galleryId: 'at-home-with-m-a', n: 64 },
      <GalleryProps>{ galleryId: 'sea-session', n: 23 },
      <GalleryProps>{ galleryId: 'baptism-andrija', n: 49 },
    ],
  },
])

export const latestGalleries = [portfolio[0].galleries[0], portfolio[0].galleries[1], portfolio[0].galleries[2]]

export const testimonials = [
  <SlideshowItem>{
    id: 'testimonials.bovani',
    url: `${ROOT}/testimonials/bovani.jpg`,
    author: 'Vanda B. @Bovani design',
  },
  <SlideshowItem>{
    id: 'testimonials.nikolina',
    url: `${ROOT}/testimonials/nikolina.jpg`,
    author: 'Nikolina & Ivan',
  },
  <SlideshowItem>{
    id: 'testimonials.lucija',
    url: `${ROOT}/testimonials/lucija.jpg`,
    author: 'Lucija G. K.',
  },
  <SlideshowItem>{
    id: 'testimonials.lucija',
    url: `${ROOT}/testimonials/lucija.jpg`,
    author: 'Lucija G. K.',
  },
]
