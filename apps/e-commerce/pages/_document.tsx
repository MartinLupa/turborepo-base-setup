import { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from '../stitches.config'

export default function MyDocument() {
  console.log('This is a console log')
  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
