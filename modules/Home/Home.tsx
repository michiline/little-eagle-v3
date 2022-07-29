import dynamic from 'next/dynamic'

import { latestGalleries, portfolio, testimonials } from 'utils/const'
import HomeCover from './components/HomeCover'

const DynamicLatestGalleries = dynamic(() => import('./components/LatestGalleries'), { suspense: true })
const DynamicTestimonials = dynamic(() => import('./components/Testimonials'), { suspense: true })
const DynamicAbout = dynamic(() => import('./components/HomeAbout'), { suspense: true })
const DynamicCanvas = dynamic(() => import('./components/Canvas'), { suspense: true })

const Home = () => {
  return (
    <>
      <HomeCover />
      <DynamicLatestGalleries latestGalleries={latestGalleries} />
      <DynamicTestimonials testimonials={testimonials} />
      <DynamicAbout />
      <DynamicCanvas categories={portfolio.slice(0, 4)} />
    </>
  )
}

export default Home
