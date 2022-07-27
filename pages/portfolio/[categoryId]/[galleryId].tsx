import GalleryFull from 'modules/GalleryFull'
import GalleryJustified from 'modules/GalleryJustified'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { portfolio } from 'utils/const'
import { Gallery } from 'utils/types'
import Head from 'next/head'
import { useIntl } from 'react-intl'

export async function getStaticProps(context) {
  const categoryId = context.params.categoryId
  const galleryId = context.params.galleryId
  const gallery = portfolio.filter(elem => elem.id === categoryId)[0].galleries.filter(elem => elem.id === galleryId)[0]
  return {
    props: {
      gallery,
      galleryId,
      categoryId,
    },
  }
}

export async function getStaticPaths() {
  const paths = portfolio.reduce((res, category) => {
    const hr = category.galleries.map(gallery => {
      return {
        params: {
          categoryId: category.id,
          galleryId: gallery.id,
          gallery,
        },
        locale: 'hr',
      }
    })
    const hrImg = hr.reduce((res, h) => {
      const gImg = h.params.gallery.images.high.map((_, index) => {
        return {
          params: {
            categoryId: h.params.categoryId,
            galleryId: h.params.galleryId,
            gallery: h.params.gallery,
            img: `${index + 1}`,
          },
          locale: 'hr',
        }
      })
      return res.concat(gImg)
    }, [])
    const en = category.galleries.map(gallery => {
      return {
        params: {
          categoryId: category.id,
          galleryId: gallery.id,
          gallery,
        },
        locale: 'en',
      }
    })
    const enImg = en.reduce((res, h) => {
      const gImg = h.params.gallery.images.high.map((_, index) => {
        return {
          params: {
            categoryId: h.params.categoryId,
            galleryId: h.params.galleryId,
            gallery: h.params.gallery,
            img: `${index + 1}`,
          },
          locale: 'en',
        }
      })
      return res.concat(gImg)
    }, [])
    return res.concat(hr).concat(hrImg).concat(en).concat(enImg)
  }, [])
  return {
    paths,
    fallback: false,
  }
}

interface GalleryPageProps {
  gallery: Gallery
  categoryId: string
}

const GalleryPage = ({ gallery, categoryId }: GalleryPageProps) => {
  const router = useRouter()
  const { query, pathname } = router
  const [img, setImg] = useState<number>(null)
  const intl = useIntl()
  useEffect(() => {
    if (typeof query.img === 'string') {
      setImg(parseInt(query.img))
    } else if (!query.img) {
      setImg(null)
    }
  }, [gallery.images.high, query.img])
  const handleOpen = (i: number) =>
    router.replace({
      pathname,
      query: { ...query, img: `${i + 1}` },
    })
  const handleClose = () => {
    if (img) {
      delete query.img
      router.replace({
        pathname,
        query,
      })
    }
  }
  const handleNext = () => {
    if (img) {
      const nextImg = (img % gallery.images.high.length) + 1
      router.replace({
        pathname,
        query: { ...query, img: `${nextImg}` },
      })
    }
  }
  const handlePrevious = () => {
    if (img) {
      const nextImg = ((img - 1 + gallery.images.high.length - 1) % gallery.images.high.length) + 1
      router.replace({
        pathname,
        query: { ...query, img: `${nextImg}` },
      })
    }
  }
  return (
    <>
      <Head>
        <title>{`${intl.formatMessage({ id: gallery.id })} - ${intl.formatMessage({
          id: categoryId,
        })} - ${intl.formatMessage({
          id: 'head.portfolio',
        })} - ${intl.formatMessage({ id: 'head.base' })}`}</title>
        <meta
          name="og:title"
          content={`${intl.formatMessage({ id: gallery.id })} - ${intl.formatMessage({
            id: categoryId,
          })} - ${intl.formatMessage({
            id: 'head.portfolio',
          })} - ${intl.formatMessage({ id: 'head.base' })}`}
        />
        <meta name="og:url" content={`https://www.littleeaglephoto.com/portfolio/${categoryId}/${gallery.id}`} />
        <meta
          name="og:image"
          content={`https://littleeaglephoto.s3.eu-central-1.amazonaws.com/og/portfolio/${gallery.id}.jpg`}
        />
        <meta name="og:image:width" content="320" />
        <meta name="og:image:height" content="213" />
      </Head>
      <GalleryJustified images={gallery.images.low} handleClick={handleOpen} />
      <GalleryFull
        url={gallery.images.high[img - 1]}
        handleClose={handleClose}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </>
  )
}

export default GalleryPage
