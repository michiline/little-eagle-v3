import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface:wght@400&family=Raleway:wght@400;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
