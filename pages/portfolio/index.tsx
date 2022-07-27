import Portfolio from 'modules/Portfolio'
import Head from 'next/head'
import { useIntl } from 'react-intl'

const PortfolioPage = () => {
  const intl = useIntl()
  return (
    <>
      <Head>
        <title>{`${intl.formatMessage({ id: 'head.portfolio' })} - ${intl.formatMessage({ id: 'head.base' })}`}</title>
        <meta
          name="og:title"
          content={`${intl.formatMessage({ id: 'head.portfolio' })} - ${intl.formatMessage({ id: 'head.base' })}`}
        />
        <meta name="og:url" content="https://www.littleeaglephoto.com" />
        <meta name="og:image" content="https://littleeaglephoto.s3.eu-central-1.amazonaws.com/cover/home.jpg" />
        <meta name="og:image:width" content="320" />
        <meta name="og:image:height" content="213" />
      </Head>
      <Portfolio />
    </>
  )
}

export default PortfolioPage
