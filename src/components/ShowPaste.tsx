import Head from 'next/head'
import Wrapper from '../layout/Wrapper'
import css from './ShowPaste.module.css'

const ShowPaste = ({ paste }) => {
  return (
    <>
      <Head>
        <title>Pastei - {paste._id}</title>
      </Head>

      <div className={css.container}>
        <Wrapper>
          <textarea
            disabled
            id="text-container"
            value={paste.text}
            className={css.textWrapper}
            rows={[...paste.text].filter((a) => a === '\n').length + 1}
          />
        </Wrapper>
      </div>
    </>
  )
}

export default ShowPaste
