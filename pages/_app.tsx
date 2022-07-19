import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/GlobalStyles'
import { theme } from 'styles/theme'
import English from 'public/locales/en.json'
import Croatian from 'public/locales/hr.json'
import { IntlProvider } from 'react-intl'
import Footer from 'modules/Footer'
import Header from 'modules/Header'
import Drawer from 'modules/Drawer'

export default function App({ Component, pageProps }) {
  const { locale } = useRouter()
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

  return (
    <>
      <GlobalStyles />
      <IntlProvider onError={() => null} locale={locale} messages={messages}>
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <Drawer />
        </ThemeProvider>
      </IntlProvider>
    </>
  )
}
