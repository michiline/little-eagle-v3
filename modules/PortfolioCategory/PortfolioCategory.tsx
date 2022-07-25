import Container from 'components/Container'
import Cover from 'components/Cover'
import ImageGrid from 'components/ImageGrid'
import Typography from 'components/Typography'
import { FormattedMessage } from 'react-intl'
import { Category } from 'utils/types'
import { Center, SecondParagraph, StyledPortfolioCategory, Text } from './styles'

interface PortfolioCategoryProps {
  category: Category
}

const PortfolioCategory = ({ category }: PortfolioCategoryProps) => {
  return (
    <>
      <Cover imgUrl={category.url}>
        <Center>
          <Typography variant="h1" fontWeight="normal" color="light">
            <FormattedMessage id={category.id} />
          </Typography>
        </Center>
      </Cover>
      <Container backgroundColor="primary">
        <StyledPortfolioCategory>
          <Text>
            <Typography variant="body" fontWeight="normal" color="dark">
              <FormattedMessage id={`${category.id}.text.1`} />
            </Typography>
            <SecondParagraph variant="body" fontWeight="normal" color="dark">
              <FormattedMessage id={`${category.id}.text.2`} />
            </SecondParagraph>
          </Text>
          <Typography
            variant="h1"
            fontWeight="normal"
            color="dark"
            style={{ alignSelf: 'flex-start', marginTop: '48px' }}
          >
            <FormattedMessage id={'portfolio.category.check'} />
          </Typography>
          <ImageGrid images={category.galleries} numInRow={3} style={{ marginTop: '24px' }} />
        </StyledPortfolioCategory>
      </Container>
    </>
  )
}

export default PortfolioCategory
