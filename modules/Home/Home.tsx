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
  ImageColumn,
  ImageFrame,
  LatestGalleries,
  Subtitle,
  Testimonials,
  TextColumn,
  Title,
  TitleWrap,
} from './styles'

const Home = () => {
  return (
    <>
      <Cover imgUrl={homeCover}>
        <HomeLogo />
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
          <Button variant="outlined">
            <FormattedMessage id="home.cover.button" />
          </Button>
        </NavLink>
      </Cover>
      <Container backgroundColor="secondary">
        <LatestGalleries>
          <Typography variant="h1" fontWeight="normal" color="dark" style={{ alignSelf: 'flex-start' }}>
            <FormattedMessage id="home.latest.title" />
          </Typography>
          <ImageGrid images={latestGalleries} numInRow={3} />
          <NavLink href="/gallery">
            <Button>
              <FormattedMessage id="home.latest.button" />
            </Button>
          </NavLink>
        </LatestGalleries>
      </Container>
      <Container backgroundColor="primary" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        <Testimonials>
          <Slideshow items={testimonials} />
        </Testimonials>
      </Container>
      <Container backgroundColor="secondary" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
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
                <FormattedMessage id={'home.about.body.1'} />
              </Typography>
              <Typography variant="body" color={'dark'} style={{ marginTop: '16px' }}>
                <FormattedMessage id={'home.about.body.2'} />
              </Typography>
              <NavLink href="/about">
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
          <CanvasCenter>
            <ImageGrid images={portfolio.slice(0, 4)} numInRow={2} />
          </CanvasCenter>
          <NavLink href="/gallery">
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
