import Container from 'components/Container'
import Cover from 'components/Cover'
import ImageGrid from 'components/ImageGrid'
import NavLink from 'components/NavLink'
import Slideshow from 'components/Slideshow'
import Typography from 'components/Typography'
import { FormattedMessage } from 'react-intl'

import { coverHome, latestGalleries, portfolio, testimonials } from 'utils/const'
import { GalleryButton, LatestPhotoshoots, Subtitle, Testimonials, Title, TitleWrap } from './styles'

const Home = () => {
  return (
    <>
      <Cover imgUrl={coverHome}>
        <TitleWrap>
          <Title variant="h1" fontWeight="normal" color="light">
            little
          </Title>
          <Title variant="h1" fontWeight="normal" color="menu">
            eagle
          </Title>
          <Title variant="h1" fontWeight="normal" color="light">
            photography
          </Title>
        </TitleWrap>
        <Subtitle variant="h2" fontWeight="normal" color="light">
          <FormattedMessage id="home.cover.subtitle" />
        </Subtitle>
        <NavLink href="/gallery">
          <GalleryButton variant="outlined">
            <FormattedMessage id="home.cover.button" />
          </GalleryButton>
        </NavLink>
      </Cover>
      <Container backgroundColor="secondary">
        <LatestPhotoshoots>
          <Typography variant="h1" fontWeight="normal" color="dark" style={{ alignSelf: 'flex-start' }}>
            <FormattedMessage id="home.latest.title" />
          </Typography>
          <ImageGrid images={latestGalleries} numInRow={3} />
          <NavLink href="/gallery">
            <GalleryButton>
              <FormattedMessage id="home.latest.button" />
            </GalleryButton>
          </NavLink>
        </LatestPhotoshoots>
      </Container>
      <Container backgroundColor="primary" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        <Testimonials>
          <Slideshow items={testimonials} />
        </Testimonials>
      </Container>
    </>
  )
}

export default Home
