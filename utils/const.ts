import { Category, CategoryProps, Gallery, GalleryProps, Image, SlideshowItem } from './types'

const ROOT = process.env.NEXT_PUBLIC_STATIC_URL

export const coverHome = `${ROOT}/gallery/home`

export const aboutHome = 'https://littleeagle.s3.eu-central-1.amazonaws.com/hi-3-3-2.jpg'

export const canvasHome = '/images/canvas.png'

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
      url: 'https://littleeaglephoto.s3.eu-central-1.amazonaws.com/portfolio/cover/events.jpg', //`${ROOT}/portfolio/cover/${categoryId}.jpg`,
      href: `/portfolio/${categoryId}`,
      galleries: galleries.map(({ galleryId, n }) => generateGallery({ categoryId, galleryId, n })),
    }
  })
}

export const portfolio = generatePortfolio([
  <CategoryProps>{
    categoryId: 'weddings',
    galleries: [
      <GalleryProps>{ galleryId: 'at-home-with-m-a', n: 64 },
      <GalleryProps>{ galleryId: 'sea-session', n: 23 },
      <GalleryProps>{ galleryId: 'baptism-andrija', n: 49 },
    ],
  },
  <CategoryProps>{
    categoryId: 'portraits',
    galleries: [
      <GalleryProps>{ galleryId: 'at-home-with-m-a', n: 64 },
      <GalleryProps>{ galleryId: 'sea-session', n: 23 },
      <GalleryProps>{ galleryId: 'baptism-andrija', n: 49 },
    ],
  },
  <CategoryProps>{
    categoryId: 'family',
    galleries: [
      <GalleryProps>{ galleryId: 'at-home-with-m-a', n: 64 },
      <GalleryProps>{ galleryId: 'sea-session', n: 23 },
      <GalleryProps>{ galleryId: 'baptism-andrija', n: 49 },
    ],
  },
  <CategoryProps>{
    categoryId: 'events',
    galleries: [
      <GalleryProps>{ galleryId: 'crikvenica-2021', n: 71 },
      <GalleryProps>{ galleryId: 'goddess-awakening', n: 41 },
      <GalleryProps>{ galleryId: 'eestec-meetings', n: 47 },
      <GalleryProps>{ galleryId: 'chill-vibez-battles', n: 47 },
    ],
  },
  <CategoryProps>{
    categoryId: 'travel',
    galleries: [
      <GalleryProps>{ galleryId: 'crikvenica-2021', n: 71 },
      <GalleryProps>{ galleryId: 'goddess-awakening', n: 41 },
      <GalleryProps>{ galleryId: 'eestec-meetings', n: 47 },
      <GalleryProps>{ galleryId: 'chill-vibez-battles', n: 47 },
    ],
  },
  <CategoryProps>{
    categoryId: 'editorial',
    galleries: [
      <GalleryProps>{ galleryId: 'at-home-with-m-a', n: 64 },
      <GalleryProps>{ galleryId: 'sea-session', n: 23 },
      <GalleryProps>{ galleryId: 'baptism-andrija', n: 49 },
    ],
  },
])

export const latestGalleries = [portfolio[2].galleries[0], portfolio[2].galleries[1], portfolio[2].galleries[2]]

export const testimonials = [
  <SlideshowItem>{
    id: 'home.testimonials.bovani',
    url: `${ROOT}/testimonials/bovani.jpg`,
    author: 'Vanda B. @Bovani design',
  },
  <SlideshowItem>{
    id: 'home.testimonials.nikolina',
    url: `${ROOT}/testimonials/nikolina.jpg`,
    author: 'Nikolina & Ivan',
  },
  <SlideshowItem>{
    id: 'home.testimonials.lucija',
    url: `${ROOT}/testimonials/lucija.jpg`,
    author: 'Lucija G. K.',
  },
  <SlideshowItem>{
    id: 'home.testimonials.lucija',
    url: `${ROOT}/testimonials/lucija.jpg`,
    author: 'Lucija G. K.',
  },
]
