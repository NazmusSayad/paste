import { NextPage } from 'next'
import Head from 'next/head'
import css from './Form.module.css'
import Wrapper from '../layout/Wrapper'

const Home: NextPage = () => {
  return (
    <Wrapper className={css.wrapper}>
      <Head>
        <title>Pastei - Create Paste</title>
      </Head>
      
      <textarea className={css.textarea} id="paste-text" />
    </Wrapper>
  )
}

export default Home
