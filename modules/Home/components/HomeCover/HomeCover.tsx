import Button from 'components/Button'
import NavLink from 'components/NavLink'
import Typography from 'components/Typography'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'
import { homeCoverMobile, homeCoverWeb, HomeLogo } from 'utils/const'
import {
  CoverCenter,
  CoverImage,
  CoverImageContainerMobile,
  CoverImageContainerWeb,
  Overlay,
  StyledHomeCover,
  Subtitle,
  TitleWrap,
} from './styles'

const HomeCover = () => {
  return (
    <StyledHomeCover>
      <CoverCenter>
        <Image src={HomeLogo} width={191} height={150} alt="Bird over a camera logo" />
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
      <CoverImageContainerWeb>
        <CoverImage src={homeCoverWeb} alt={'Wedding couple in grass field holding hands'} layout="fill" />
      </CoverImageContainerWeb>
      <CoverImageContainerMobile>
        <CoverImage src={homeCoverMobile} alt={'Wedding couple in grass field holding hands'} layout="fill" />
      </CoverImageContainerMobile>
      <Overlay />
    </StyledHomeCover>
  )
}

export default HomeCover
