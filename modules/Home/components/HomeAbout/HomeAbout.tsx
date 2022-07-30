import Button from 'components/Button'
import Container from 'components/Container'
import NavLink from 'components/NavLink'
import Typography from 'components/Typography'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'
import { aboutImage1 } from 'utils/const'
import { AboutBody, ImageColumn, ImageFrame, StyledHomeAbout, TextColumn } from './styles'

const HomeAbout = () => {
  return (
    <Container backgroundColor="secondary">
      <StyledHomeAbout>
        <ImageColumn>
          <Image src={aboutImage1} alt="girl holding hair in the air" layout="fill" style={{ zIndex: 2 }} />
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
      </StyledHomeAbout>
    </Container>
  )
}

export default HomeAbout
