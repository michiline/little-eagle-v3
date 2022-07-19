import Container from 'components/Container'
import ImageGrid from 'components/ImageGrid'
import { Category } from 'utils/types'
import { StyledPortfolioCategory } from './styles'

interface PortfolioCategoryProps {
  category: Category
}

const PortfolioCategory = ({ category }: PortfolioCategoryProps) => {
  return (
    <Container backgroundColor="primary" minHeight={true}>
      <StyledPortfolioCategory>
        <ImageGrid images={category.galleries} numInRow={3} />
      </StyledPortfolioCategory>
    </Container>
  )
}

export default PortfolioCategory
