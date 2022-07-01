import Cover from 'components/Cover'
import NavLink from 'components/NavLink'
import { FormattedMessage } from 'react-intl'

import { coverHome } from 'utils/const'
import { GalleryButton, Subtitle, Title, TitleWrap } from './styles'

const Home = () => {
  return (
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
  )
}

export default Home
