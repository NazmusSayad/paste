import Wrapper from '../layout/Wrapper'
import SavePaste from '../components/SavePaste'
import css from './Header.module.scss'
import { useRouter } from 'next/router'

export default function ({ setStatus }) {
  const router = useRouter()

  function handleURLCopyClick() {
    const id = router.query.slag
    const url = location.origin + '/' + id
    navigator.clipboard.writeText(url)
  }

  function handleTextCopyClick() {
    const textarea = document.getElementById(
      'text-container'
    ) as HTMLTextAreaElement
    const text = textarea.value
    navigator.clipboard.writeText(text)
  }

  return (
    <header className={css.header}>
      <Wrapper>
        <nav className={css.nav}>
          <h1 className={css.navLogo}>Mini Crypt</h1>

          <ul className={css.navList}>
            {router.route === '/[slag]' && (
              <>
                <button onClick={handleURLCopyClick}>Copy Link</button>
                <button onClick={handleTextCopyClick}>Copy Text</button>
              </>
            )}

            {router.route === '/' ? (
              <SavePaste setStatus={setStatus} />
            ) : (
              <button onClick={() => router.push('/')}>New</button>
            )}
          </ul>
        </nav>
      </Wrapper>
    </header>
  )
}
