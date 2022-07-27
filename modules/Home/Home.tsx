import Button from 'components/Button'
import Container from 'components/Container'
import Cover from 'components/Cover'
import ImageGrid from 'components/ImageGrid'
import { HomeAboutImage, HomeLogo } from 'components/Images'
import NavLink from 'components/NavLink'
import Slideshow from 'components/Slideshow'
import Typography from 'components/Typography'
import { FormattedMessage } from 'react-intl'

import { homeCanvas, homeCover, latestGalleries, portfolio, testimonials } from 'utils/const'
import {
  About,
  AboutBody,
  Canvas,
  CanvasCenter,
  CanvasTitle,
  CoverCenter,
  ImageColumn,
  ImageFrame,
  LatestGalleries,
  Subtitle,
  Testimonials,
  TextColumn,
  TitleWrap,
} from './styles'

const Home = () => {
  return (
    <>
      <Cover imgUrl={homeCover} home={true}>
        <CoverCenter>
          <HomeLogo />
          <TitleWrap>
            <Typography variant="h1" fontWeight="normal" color="light" shadow={true}>
              little
            </Typography>
            <Typography variant="h1" fontWeight="normal" color="menu" shadow={true}>
              eagle
            </Typography>
            <Typography variant="h1" fontWeight="normal" color="light" shadow={true}>
              photography
            </Typography>
          </TitleWrap>
          <Subtitle variant="h2" fontWeight="normal" color="light" shadow={true}>
            <FormattedMessage id="home.cover.subtitle" />
          </Subtitle>
          <NavLink href="/portfolio" fullWidth={true} style={{ marginTop: '24px' }}>
            <Button variant="outlined">
              <FormattedMessage id="home.cover.button" />
            </Button>
          </NavLink>
        </CoverCenter>
      </Cover>
      <Container backgroundColor="secondary">
        <LatestGalleries>
          <Typography variant="h1" fontWeight="normal" color="dark" style={{ alignSelf: 'flex-start' }}>
            <FormattedMessage id="home.latest.title" />
          </Typography>
          <ImageGrid images={latestGalleries} numInRow={3} style={{ marginTop: '24px' }} />
          <NavLink fullWidth={true} href="/portfolio" style={{ marginTop: '48px' }}>
            <Button>
              <FormattedMessage id="home.latest.button" />
            </Button>
          </NavLink>
        </LatestGalleries>
      </Container>
      <Container backgroundColor="primary">
        <Testimonials>
          <Slideshow items={testimonials} />
        </Testimonials>
      </Container>
      <Container backgroundColor="secondary">
        <About>
          <ImageColumn>
            <HomeAboutImage style={{ zIndex: 2 }} />
            <ImageFrame />
          </ImageColumn>
          <TextColumn>
            <Typography variant="h1" color={'dark'}>
              <FormattedMessage id={'home.about.title'} />
            </Typography>
            <AboutBody>
              <Typography variant="body" color={'dark'}>
                <FormattedMessage id={'home.about.text.1'} />
              </Typography>
              <Typography variant="body" color={'dark'} style={{ marginTop: '16px' }}>
                <FormattedMessage id={'home.about.text.2'} />
              </Typography>
              <NavLink href="/about" fullWidth={true} style={{ marginTop: '48px' }}>
                <Button>
                  <FormattedMessage id="home.about.button" />
                </Button>
              </NavLink>
            </AboutBody>
          </TextColumn>
        </About>
      </Container>
      <Container backgroundColor="primary">
        <Canvas url={homeCanvas}>
          <CanvasTitle variant="h1" fontWeight="normal" color="dark" style={{ alignSelf: 'flex-start' }}>
            <FormattedMessage id="home.canvas.title" />
          </CanvasTitle>
          <CanvasCenter>
            <ImageGrid images={portfolio.slice(0, 4)} numInRow={2} />
          </CanvasCenter>
          <NavLink href="/portfolio" fullWidth={true} style={{ marginTop: '48px' }}>
            <Button>
              <FormattedMessage id="home.latest.button" />
            </Button>
          </NavLink>
        </Canvas>
      </Container>
    </>
  )
}

export default Home
