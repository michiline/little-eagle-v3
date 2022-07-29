import Button from 'components/Button'
import Container from 'components/Container'
import ImageGrid from 'components/ImageGrid'
import NavLink from 'components/NavLink'
import { FormattedMessage } from 'react-intl'
import { homeCanvas } from 'utils/const'
import { Category } from 'utils/types'
import { CanvasCenter, CanvasTitle, StyledCanvas } from './styles'

interface CanvasProps {
  categories: Category[]
}

const Canvas = ({ categories }: CanvasProps) => {
  return (
    <Container backgroundColor="primary">
      <StyledCanvas url={homeCanvas}>
        <CanvasTitle variant="h1" fontWeight="normal" color="dark" style={{ alignSelf: 'flex-start' }}>
          <FormattedMessage id="home.canvas.title" />
        </CanvasTitle>
        <CanvasCenter>
          <ImageGrid images={categories} numInRow={2} />
        </CanvasCenter>
        <NavLink href="/portfolio" fullWidth={true} style={{ marginTop: '48px' }}>
          <Button>
            <FormattedMessage id="home.latest.button" />
          </Button>
        </NavLink>
      </StyledCanvas>
    </Container>
  )
}

export default Canvas
