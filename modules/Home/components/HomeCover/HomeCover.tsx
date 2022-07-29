import Button from 'components/Button'
import Cover from 'components/Cover'
import { HomeLogo } from 'components/Images'
import NavLink from 'components/NavLink'
import Typography from 'components/Typography'
import { FormattedMessage } from 'react-intl'
import { homeCover } from 'utils/const'
import { CoverCenter, Subtitle, TitleWrap } from './styles'

const HomeCover = () => {
  return (
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
  )
}

export default HomeCover
