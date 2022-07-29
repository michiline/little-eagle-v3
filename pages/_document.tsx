import { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from 'utils/gtag'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FFFBF6" />
        <meta
          name="description"
          content="Ana Orlić is an event and portrait photographer from Zagreb, Croatia. Available worldwide."
        />
        <meta name="og:site_name" content="Little Eagle Photography" />
        <meta name="og:type" content="website" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface:wght@400&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
