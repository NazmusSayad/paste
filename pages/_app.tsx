import { AppProps } from 'next/app'
import getClassName from 'get-classnames'
import css from './_app.module.css'

try {
  globalThis.$cn = getClassName
} catch {}
try {
  global.$cn = getClassName
} catch {}
try {
  window.$cn = getClassName
} catch {}

declare global {
  var $cn: typeof getClassName
}

import 'css-reset-plus'
import '../src/styles/globals.css'
import Header from '../src/components/Header'
import useStatus from '../src/hooks/useStatus'
import { firaCode } from '../src/fonts'

function MyApp({ Component, pageProps }: AppProps) {
  const status = useStatus()

  return (
    <>
      <div className={$cn(css.container, firaCode.className)}>
        <Header setStatus={status.setStatus} />

        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
