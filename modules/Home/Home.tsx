import Container from 'components/Container'
import Cover from 'components/Cover'
import ImageGrid from 'components/ImageGrid'
import NavLink from 'components/NavLink'
import Slideshow from 'components/Slideshow'
import Typography from 'components/Typography'
import { FormattedMessage } from 'react-intl'

import { aboutHome, coverHome, latestGalleries, portfolio, testimonials } from 'utils/const'
import {
  About,
  AboutBody,
  GalleryButton,
  Image,
  ImageColumn,
  ImageFrame,
  LatestGalleries,
  Subtitle,
  Testimonials,
  TextColumn,
  Title,
  TitleWrap,
  VisitAbout,
} from './styles'

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
        <LatestGalleries>
          <Typography variant="h1" fontWeight="normal" color="dark" style={{ alignSelf: 'flex-start' }}>
            <FormattedMessage id="home.latest.title" />
          </Typography>
          <ImageGrid images={latestGalleries} numInRow={3} />
          <NavLink href="/gallery">
            <GalleryButton>
              <FormattedMessage id="home.latest.button" />
            </GalleryButton>
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
            <ImageFrame />
            <Image src={aboutHome} alt={'alt'} />
          </ImageColumn>
          <TextColumn>
            <Typography variant="h1" color={'dark'}>
              <FormattedMessage id={'home.about.title'} />
            </Typography>
            <AboutBody>
              <Typography variant="body" color={'dark'}>
                <FormattedMessage id={'home.about.body.1'} />
              </Typography>
              <Typography variant="body" color={'dark'} style={{ marginTop: '24px' }}>
                <FormattedMessage id={'home.about.body.2'} />
              </Typography>
              <VisitAbout>
                <NavLink href="/about">
                  <GalleryButton>
                    <FormattedMessage id="home.about.button" />
                  </GalleryButton>
                </NavLink>
              </VisitAbout>
            </AboutBody>
          </TextColumn>
        </About>
      </Container>
    </>
  )
}

export default Home
