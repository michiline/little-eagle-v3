import { Category, CategoryProps, Gallery, GalleryProps, Image, SlideshowItem } from './types'

const ROOT = process.env.NEXT_PUBLIC_STATIC_URL

export const homeCoverWeb = `${ROOT}/cover/home.jpg`
export const homeCoverMobile = `${ROOT}/cover/home-768px.jpg`
export const homeAbout = 'https://littleeagle.s3.eu-central-1.amazonaws.com/hi-3-3-2.jpg'
export const homeCanvas = '/images/canvas.png'

export const HomeLogo = '/images/home-logo.png'
export const FooterLogo = '/images/footer-logo.png'

export const footerLogo = '/images/footer-logo.png'

export const aboutImage1 = `${ROOT}/about1.jpg`
export const aboutImage2 = `${ROOT}/about2.jpg`

export const aboutLogo = '/images/cam-logo-paint.png'
export const aboutTripodImage = '/images/cam-logo-tripod.png'

export const email = 'ana_orlic@yahoo.com'
export const facebook = 'https://www.facebook.com/littleeaglephoto'
export const instagram = 'https://www.instagram.com/littleeaglephoto'

export const copyright = 'Ana Orlić © LittleEagle Photography'

const generateGallery = ({ categoryId, galleryId, n, hidden = false }: GalleryProps): Gallery => {
  return {
    id: galleryId,
    url: `${ROOT}/cover/portfolio/${galleryId}.jpg`,
    href: `/portfolio/${categoryId}/${galleryId}`,
    hidden: hidden,
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
      url: `${ROOT}/cover/category/${categoryId}.jpg`,
      href: `/portfolio/${categoryId}`,
      galleries: galleries.map(({ galleryId, n, hidden }) => generateGallery({ categoryId, galleryId, n, hidden })),
    }
  })
}

export const portfolio = generatePortfolio([
  <CategoryProps>{
    categoryId: 'weddings',
    galleries: [
      <GalleryProps>{ galleryId: 'wedding-ia', n: 275 },
      <GalleryProps>{ galleryId: 'wedding-md', n: 79 },
      <GalleryProps>{ galleryId: 'wedding-ni', n: 58 },
      <GalleryProps>{ galleryId: 'wedding-istria', n: 88 },
      <GalleryProps>{ galleryId: 'khl', n: 99 },
      <GalleryProps>{ galleryId: 'aal', n: 74 },
      <GalleryProps>{ galleryId: 'wedding-mt', n: 99 },
      <GalleryProps>{ galleryId: 'wedding-mp', n: 118 },
      <GalleryProps>{ galleryId: 'wedding-rm', n: 62 },
      <GalleryProps>{ galleryId: 'engagement-jk', n: 40 },
      <GalleryProps>{ galleryId: 'engagement-jk', n: 40, hidden: true },
      <GalleryProps>{ galleryId: 'engagement-jk', n: 40, hidden: true },
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
      <GalleryProps>{ galleryId: 'i-a-a', n: 21, hidden: true },
    ],
  },
  <CategoryProps>{
    categoryId: 'portraits',
    galleries: [
      <GalleryProps>{ galleryId: 'in-studio', n: 26 },
      <GalleryProps>{ galleryId: 'on-location', n: 38 },
      <GalleryProps>{ galleryId: 'on-location', n: 38, hidden: true },
    ],
  },
  <CategoryProps>{
    categoryId: 'collaborations',
    galleries: [
      <GalleryProps>{ galleryId: 'lilium', n: 36 },
      <GalleryProps>{ galleryId: 'studio-zimat', n: 45 },
      <GalleryProps>{ galleryId: 'bovani-design', n: 29 },
      <GalleryProps>{ galleryId: 'brave-phone', n: 14 },
      <GalleryProps>{ galleryId: 'lifestyle-istria', n: 43 },
      <GalleryProps>{ galleryId: 'equilibrium-counselling', n: 17 },
      <GalleryProps>{ galleryId: 'website-dina', n: 11 },
      <GalleryProps>{ galleryId: 'website-josipa', n: 14 },
      <GalleryProps>{ galleryId: 'yoni', n: 40 },
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
    categoryId: 'travels',
    galleries: [
      <GalleryProps>{ galleryId: 'croatia', n: 84 },
      <GalleryProps>{ galleryId: 'mexico', n: 94 },
      <GalleryProps>{ galleryId: 'zanzibar', n: 47 },
      <GalleryProps>{ galleryId: 'srilanka', n: 30 },
      <GalleryProps>{ galleryId: 'soca-valley', n: 12 },
      <GalleryProps>{ galleryId: 'balkan', n: 10 },
      <GalleryProps>{ galleryId: 'usa', n: 19 },
      <GalleryProps>{ galleryId: 'europe', n: 16 },
      <GalleryProps>{ galleryId: 'cuba', n: 16 },
    ],
  },
])

export const latestGalleries = [portfolio[0].galleries[0], portfolio[1].galleries[0], portfolio[1].galleries[2]]

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
    id: 'home.testimonials.anja',
    url: `${ROOT}/testimonials/anja.jpg`,
    author: 'Anja K.',
  },
]
