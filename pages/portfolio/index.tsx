import Meta from 'components/Meta'
import Portfolio from 'modules/Portfolio'
import { useIntl } from 'react-intl'

const PortfolioPage = () => {
  const intl = useIntl()
  return (
    <>
      <Meta id="portfolio" />
      <Portfolio />
    </>
  )
}

export default PortfolioPage
