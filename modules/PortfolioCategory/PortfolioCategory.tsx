import Container from 'components/Container'
import Cover from 'components/Cover'
import ImageGrid from 'components/ImageGrid'
import { Category } from 'utils/types'
import { StyledPortfolioCategory } from './styles'

interface PortfolioCategoryProps {
  category: Category
}

const PortfolioCategory = ({ category }: PortfolioCategoryProps) => {
  return (
    <>
      <Cover imgUrl={category.url}>Hello</Cover>
      <Container backgroundColor="primary">
        <StyledPortfolioCategory>
          <ImageGrid images={category.galleries} numInRow={3} />
        </StyledPortfolioCategory>
      </Container>
    </>
  )
}

export default PortfolioCategory
