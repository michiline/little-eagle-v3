import Container from 'components/Container'
import Cover from 'components/Cover'
import ImageGrid from 'components/ImageGrid'
import Typography from 'components/Typography'
import { FormattedMessage } from 'react-intl'
import { Category } from 'utils/types'
import { StyledPortfolioCategory, Text } from './styles'

interface PortfolioCategoryProps {
  category: Category
}

const PortfolioCategory = ({ category }: PortfolioCategoryProps) => {
  return (
    <>
      <Cover imgUrl={category.url}>
        <Typography variant="h1" fontWeight="normal" color="light">
          <FormattedMessage id={category.id} />
        </Typography>
      </Cover>
      <Container backgroundColor="primary">
        <StyledPortfolioCategory>
          <Text>
            <Typography variant="body" fontWeight="normal" color="dark">
              <FormattedMessage id={`${category.id}.text.1`} />
            </Typography>
            <Typography variant="body" fontWeight="normal" color="dark" style={{ marginLeft: '16px' }}>
              <FormattedMessage id={`${category.id}.text.2`} />
            </Typography>
          </Text>
          <Typography variant="h1" fontWeight="normal" color="dark" style={{ alignSelf: 'flex-start' }}>
            <FormattedMessage id={'portfolio.category.check'} />
          </Typography>
          <ImageGrid images={category.galleries} numInRow={3} />
        </StyledPortfolioCategory>
      </Container>
    </>
  )
}

export default PortfolioCategory
