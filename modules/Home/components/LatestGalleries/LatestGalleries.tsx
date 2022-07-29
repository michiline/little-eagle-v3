import Button from 'components/Button'
import Container from 'components/Container'
import ImageGrid from 'components/ImageGrid'
import NavLink from 'components/NavLink'
import Typography from 'components/Typography'
import { FormattedMessage } from 'react-intl'
import { Gallery } from 'utils/types'
import { StyledLatestGalleries } from './styles'

interface LatestGalleriesProps {
  latestGalleries: Gallery[]
}

const LatestGalleries = ({ latestGalleries }: LatestGalleriesProps) => {
  return (
    <Container backgroundColor="secondary">
      <StyledLatestGalleries>
        <Typography variant="h1" fontWeight="normal" color="dark" style={{ alignSelf: 'flex-start' }}>
          <FormattedMessage id="home.latest.title" />
        </Typography>
        <ImageGrid images={latestGalleries} numInRow={3} style={{ marginTop: '24px' }} />
        <NavLink fullWidth={true} href="/portfolio" style={{ marginTop: '48px' }}>
          <Button>
            <FormattedMessage id="home.latest.button" />
          </Button>
        </NavLink>
      </StyledLatestGalleries>
    </Container>
  )
}

export default LatestGalleries
