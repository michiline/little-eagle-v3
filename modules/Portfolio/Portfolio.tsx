import Container from 'components/Container'
import ImageGrid from 'components/ImageGrid'
import { portfolio } from 'utils/const'
import { StyledPortfolio } from './styles'

const Portfolio = () => {
  return (
    <Container backgroundColor="primary" minHeight={true}>
      <StyledPortfolio>
        <ImageGrid images={portfolio} numInRow={3} />
      </StyledPortfolio>
    </Container>
  )
}

export default Portfolio
