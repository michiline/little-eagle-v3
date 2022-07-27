import Home from 'modules/Home'
import Head from 'next/head'
import { useIntl } from 'react-intl'

export default function HomePage() {
  const intl = useIntl()
  return (
    <>
      <Head>
        <title>{`${intl.formatMessage({ id: 'head.home' })} - ${intl.formatMessage({ id: 'head.base' })}`}</title>
        <meta name="og:title" content="Little Eagle Photography" />
        <meta name="og:url" content="https://www.littleeaglephoto.com" />
        <meta name="og:image" content="https://littleeaglephoto.s3.eu-central-1.amazonaws.com/og/home.jpg" />
        <meta name="og:image:width" content="320" />
        <meta name="og:image:height" content="213" />
        <meta name="og:image:alt" content="Wedding couple in grass field holding hands " />
        <meta
          name="og:description"
          content="Ana Orlic is an event and portrait photographer from Zagreb, Croatia. Available worldwide."
        />
      </Head>
      <Home />
    </>
  )
}
