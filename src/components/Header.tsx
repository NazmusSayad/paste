import Wrapper from '../layout/Wrapper'
import SavePaste from '../components/SavePaste'
import css from './Header.module.css'
import { useRouter } from 'next/router'
import { inter } from '../fonts'

export default function ({ setStatus }) {
  const router = useRouter()

  function handleCopyClick() {
    const id = router.query.slag
    const url = location.origin + '/' + id
    navigator.clipboard.writeText(url)
  }

  return (
    <div className={$cn(css.Header, inter.className)}>
      <Wrapper>
        <div className={css.header}>
          <div className={css.logo}>Clip</div>

          <div className={css.controls}>
            {router.route === '/[slag]' && (
              <div className={css.button}>
                <button onClick={handleCopyClick}>Copy Link</button>
              </div>
            )}

            <div className={css.button}>
              {router.route === '/' ? (
                <SavePaste setStatus={setStatus} />
              ) : (
                <button onClick={() => router.push('/')}>New</button>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
