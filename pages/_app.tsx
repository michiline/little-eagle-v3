import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/GlobalStyles'
import { theme } from 'styles/theme'
import English from 'public/locales/en.json'
import Croatian from 'public/locales/hr.json'
import { IntlProvider } from 'react-intl'
import Footer from 'modules/Footer'
import Header from 'modules/Header'
import Drawer from 'modules/Drawer'
import * as gtag from '../utils/gtag'
import dynamic from 'next/dynamic'

const DynamicFooter = dynamic(() => import('modules/Footer'))
const DynamicHeader = dynamic(() => import('modules/Header'))

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const locale = router.locale
  const messages = useMemo(() => {
    switch (locale) {
      case 'en': {
        return English
      }
      case 'hr': {
        return Croatian
      }
    }
  }, [locale])

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <GlobalStyles />
      <IntlProvider onError={() => null} locale={locale} messages={messages}>
        <ThemeProvider theme={theme}>
          <DynamicHeader />
          <Component {...pageProps} />
          <DynamicFooter />
          <Drawer />
        </ThemeProvider>
      </IntlProvider>
    </>
  )
}
