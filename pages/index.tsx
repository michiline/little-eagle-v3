import Home from 'modules/Home'
import Head from 'next/head'
import { useIntl } from 'react-intl'

export default function HomePage() {
  const intl = useIntl()
  return (
    <>
      <Head>
        <title>
          {intl.formatMessage({ id: 'head.home' })}
          {intl.formatMessage({ id: 'head.base' })}
        </title>
      </Head>
      <Home />
    </>
  )
}
