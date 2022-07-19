import { Category, CategoryProps, Gallery, GalleryProps, Image, SlideshowItem } from './types'

const ROOT = process.env.NEXT_PUBLIC_STATIC_URL

export const homeCover = `${ROOT}/gallery/home`
export const homeAbout = 'https://littleeagle.s3.eu-central-1.amazonaws.com/hi-3-3-2.jpg'
export const homeCanvas = '/images/canvas.png'
export const homeLogo = '/images/home-logo.png'

export const footerLogo = '/images/footer-logo.png'

export const aboutImage1 = 'https://littleeagle.s3.eu-central-1.amazonaws.com/hi-3-3-2.jpg'

export const aboutLogo = '/images/cam-logo-paint.png'
export const aboutTripodImage = '/images/cam-logo-tripod.png'

export const email = 'ana_orlic@yahoo.com'

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
      <GalleryProps>{ galleryId: 'wedding-md', n: 79 },
      <GalleryProps>{ galleryId: 'wedding-istria', n: 88 },
      <GalleryProps>{ galleryId: 'khl', n: 99 },
      <GalleryProps>{ galleryId: 'aal', n: 74 },
      <GalleryProps>{ galleryId: 'wedding-mt', n: 99 },
      <GalleryProps>{ galleryId: 'wedding-mp', n: 118 },
      <GalleryProps>{ galleryId: 'wedding-rm', n: 62 },
      <GalleryProps>{ galleryId: 'engagement-jk', n: 40 },
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
      <GalleryProps>{ galleryId: 'baptism-ivan', n: 53 },
      <GalleryProps>{ galleryId: 'baptism-tamara', n: 39 },
      <GalleryProps>{ galleryId: 'brothers-n-m', n: 34 },
      <GalleryProps>{ galleryId: 'baptism-karla', n: 35 },
      <GalleryProps>{ galleryId: 'christmas-time', n: 29 },
      <GalleryProps>{ galleryId: 'autumn-with-t', n: 28 },
      <GalleryProps>{ galleryId: 'maternity-sara', n: 36 },
      <GalleryProps>{ galleryId: 'i-a-a', n: 21 },
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
    categoryId: 'collaborations',
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
