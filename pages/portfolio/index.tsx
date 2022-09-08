import Meta from 'components/Meta'
import Portfolio from 'modules/Portfolio'
import Head from 'next/head'
import { useIntl } from 'react-intl'

const PortfolioPage = () => {
  const intl = useIntl()
  return (
    <>
      <Portfolio />
    </>
  )
}

export default PortfolioPage

// <Meta id="portfolio" />
