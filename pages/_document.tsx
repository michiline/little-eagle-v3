import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface:wght@400&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FFFBF6" />
        <meta name="og:site_name" content="Little Eagle Photography" />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Little Eagle Photography" />
        <meta name="og:url" content="https://www.littleeaglephoto.com" />
        <meta name="og:image" content="https://littleeaglephoto.s3.eu-central-1.amazonaws.com/cover/og.jpg" />
        <meta name="og:image:width" content="320" />
        <meta name="og:image:height" content="213" />
        <meta name="og:image:alt" content="Wedding couple in grass field holding hands " />
        <meta
          name="og:description"
          content="Ana Orlic is an event and portrait photographer from Zagreb, Croatia. Available worldwide."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
