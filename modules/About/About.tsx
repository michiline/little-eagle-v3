import Container from 'components/Container'
import { AboutTripodImage } from 'components/Images'
import Typography from 'components/Typography'
import { FormattedMessage } from 'react-intl'
import { aboutImage2, aboutImage3 } from 'utils/const'
import {
  AboutLogoHide,
  FirstTextColumn,
  Image,
  ImageColumn,
  ImageFrame,
  Row,
  SecondImageColumn,
  StyledAbout,
  TextColumn,
} from './styles'

const About = () => {
  return (
    <Container backgroundColor="primary" minHeight={true}>
      <StyledAbout>
        <Row>
          <ImageColumn>
            <ImageFrame />
            <Image src={aboutImage2} alt={'alt'} />
          </ImageColumn>
          <FirstTextColumn>
            <Typography variant="h1">
              <FormattedMessage id={'about.title'} />
            </Typography>
            <Typography variant="body" style={{ marginTop: '24px' }}>
              <FormattedMessage id={'about.text.1'} />
            </Typography>
            <Typography variant="body" style={{ marginTop: '16px' }}>
              <FormattedMessage id={'about.text.2'} />
            </Typography>
            <Typography variant="body" style={{ marginTop: '16px' }}>
              <FormattedMessage id={'about.text.3'} />
            </Typography>
            <Typography variant="body" style={{ marginTop: '16px' }}>
              <FormattedMessage id={'about.text.4'} />
            </Typography>
          </FirstTextColumn>
          <AboutLogoHide style={{ alignSelf: 'center' }} />
        </Row>
        <Row>
          <AboutTripodImage />
          <TextColumn>
            <Typography variant="h1">
              <FormattedMessage id={'about.facts'} />
            </Typography>
            <Typography variant="body" style={{ marginTop: '24px' }}>
              <FormattedMessage id={'about.facts.1'} />
            </Typography>
            <Typography variant="body" style={{ marginTop: '16px' }}>
              <FormattedMessage id={'about.facts.2'} />
            </Typography>
            <Typography variant="body" style={{ marginTop: '16px' }}>
              <FormattedMessage id={'about.facts.3'} />
            </Typography>
            <Typography variant="body" style={{ marginTop: '16px' }}>
              <FormattedMessage id={'about.facts.4'} />
            </Typography>
            <Typography variant="body" style={{ marginTop: '16px' }}>
              <FormattedMessage id={'about.facts.5'} />
            </Typography>
            <Typography variant="body" style={{ marginTop: '16px' }}>
              <FormattedMessage id={'about.facts.6'} />
            </Typography>
            <Typography variant="body" style={{ marginTop: '16px' }}>
              <FormattedMessage id={'about.facts.7'} />
            </Typography>
          </TextColumn>
          <SecondImageColumn>
            <ImageFrame />
            <Image src={aboutImage3} alt={'alt'} />
          </SecondImageColumn>
        </Row>
      </StyledAbout>
    </Container>
  )
}

export default About
