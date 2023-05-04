import Wrapper from '../layout/Wrapper'
import SavePaste from '../components/SavePaste'
import css from './Header.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { inter } from '../fonts'

export default function ({ setStatus }) {
  const router = useRouter()

  return (
    <div className={$cn(css.Header, inter.className)}>
      <Wrapper>
        <div className={css.header}>
          <div className={css.logo}>Clip</div>

          <div className={css.button}>
            {router.route === '/' ? (
              <SavePaste setStatus={setStatus} />
            ) : (
              <button onClick={() => router.push('/')}>New</button>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
