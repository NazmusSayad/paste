import { NextPage } from 'next'
import css from './Form.module.css'
import Wrapper from '../layout/Wrapper'

const Home: NextPage = () => {
  return (
    <Wrapper className={css.wrapper}>
      <textarea className={css.textarea} id="paste-text" />
    </Wrapper>
  )
}

export default Home
