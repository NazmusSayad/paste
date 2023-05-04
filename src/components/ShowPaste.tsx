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
          {paste?.text?.split('\n').map((part, i) => (
            <p key={i}>{part}</p>
          ))}
        </Wrapper>
      </div>
    </>
  )
}

export default ShowPaste
