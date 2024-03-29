import Head from 'next/head'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import { theme } from 'styles/theme'
import { websiteName, ROOT, ogImageWidth, ogImageHeight, ogType, BASE_URL } from 'utils/const'

interface MetaProps {
  id: string
  categoryId?: string
  galleryId?: string
}

const prepareSpecificMetaTags = ({ intl, id, categoryId, galleryId }) => {
  let url: string, title: string, image: string
  switch (id) {
    case 'home': {
      url = BASE_URL
      title = `${intl.formatMessage({ id: `head.${id}` })} - ${intl.formatMessage({ id: 'head.base' })}`
      image = `${ROOT}/cover/home.jpg`
      break
    }
    case 'about': {
      url = `${BASE_URL}/${id}`
      title = `${intl.formatMessage({ id: `head.${id}` })} - ${intl.formatMessage({ id: 'head.base' })}`
      image = `${ROOT}/cover/home.jpg`
      break
    }
    case 'portfolio': {
      url = `${BASE_URL}/${id}`
      title = `${intl.formatMessage({ id: `head.${id}` })} - ${intl.formatMessage({ id: 'head.base' })}`
      image = `${ROOT}/cover/home.jpg`
      break
    }
    case 'category': {
      url = `${BASE_URL}/portfolio/${categoryId}`
      title = `${intl.formatMessage({ id: categoryId })} - ${intl.formatMessage({
        id: 'head.portfolio',
      })} - ${intl.formatMessage({ id: 'head.base' })}`
      image = `${ROOT}/cover/category/${categoryId}.jpg`
      break
    }
    case 'gallery': {
      url = `${BASE_URL}/portfolio/${categoryId}/${galleryId}`
      title = `${intl.formatMessage({ id: galleryId })} - ${intl.formatMessage({
        id: categoryId,
      })} - ${intl.formatMessage({
        id: 'head.portfolio',
      })} - ${intl.formatMessage({ id: 'head.base' })}`
      image = `${ROOT}/cover/portfolio/${galleryId}.jpg`
      break
    }
    default:
      break
  }
  return { url, title, image }
}

const Meta = ({ id, categoryId, galleryId }: MetaProps) => {
  const intl = useIntl()
  const router = useRouter()

  // general
  const charSet = 'utf-8'
  const themeColor = theme.colors.background.primary
  const description = intl.formatMessage({ id: 'description' })
  const siteName = websiteName
  const type = ogType
  const alt = intl.formatMessage({ id: 'alt' })
  const width = ogImageWidth
  const height = ogImageHeight
  // specific
  const { url, title, image } = prepareSpecificMetaTags({ intl, id, categoryId, galleryId })
  return (
    <Head>
      <meta charSet={charSet} />
      <meta name="theme-color" content={themeColor} />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta name="og:type" content={type} />
      <meta name="og:site_name" content={siteName} />

      <meta name="og:title" content={title} />
      <meta name="og:url" content={url} />
      <meta name="og:image" content={image} />
      <meta name="og:image:width" content={width} />
      <meta name="og:image:height" content={height} />
      <meta name="og:image:alt" content={alt} />

      <title>{title}</title>
    </Head>
  )
}

export default Meta
