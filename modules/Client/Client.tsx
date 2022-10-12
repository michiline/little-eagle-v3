import Container from 'components/Container'
import { IconDownload, IconLogout } from 'components/Icons'
import NavLink from 'components/NavLink'
import GalleryFull from 'modules/GalleryFull'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import SquareImageGrid from './components/SquareImageGrid'
import { Center, Toolbar } from './styles'

const Client = ({ images, url }) => {
  const router = useRouter()
  const { query, pathname } = router
  const [img, setImg] = useState<number>(null)
  useEffect(() => {
    if (typeof query.img === 'string') {
      setImg(parseInt(query.img))
    } else if (!query.img) {
      setImg(null)
    }
  }, [query.img])
  const handleOpen = (i: number) =>
    router.replace(
      {
        pathname,
        query: { ...query, img: `${i + 1}` },
      },
      undefined,
      { scroll: false }
    )
  const handleClose = () => {
    if (img) {
      delete query.img
      router.replace(
        {
          pathname,
          query,
        },
        undefined,
        { scroll: false }
      )
    }
  }
  const handleNext = () => {
    if (img) {
      const nextImg = (img % images.length) + 1
      router.replace(
        {
          pathname,
          query: { ...query, img: `${nextImg}` },
        },
        undefined,
        { scroll: false }
      )
    }
  }
  const handlePrevious = () => {
    if (img) {
      const nextImg = ((img - 1 + images.length - 1) % images.length) + 1
      router.replace(
        {
          pathname,
          query: { ...query, img: `${nextImg}` },
        },
        undefined,
        { scroll: false }
      )
    }
  }
  const intl = useIntl()
  return (
    <Container backgroundColor="primary" minHeight={true}>
      <Center>
        <Toolbar>
          <a href={url} target="_blank" rel={'noreferrer'} style={{ height: '64px' }}>
            <IconDownload title={intl.formatMessage({ id: 'download.all' })} />
          </a>
        </Toolbar>
        <SquareImageGrid images={images} handleClick={handleOpen} />
        <GalleryFull
          url={images[img - 1]}
          handleClose={handleClose}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          enableDownload={true}
        />
      </Center>
    </Container>
  )
}

export default Client
