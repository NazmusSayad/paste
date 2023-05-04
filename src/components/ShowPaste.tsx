import Wrapper from '../layout/Wrapper'
import css from './ShowPaste.module.css'

const ShowPaste = ({ paste }) => {
  return (
    <div className={css.container}>
      <Wrapper>
        {paste?.text?.split('\n').map((part, i) => (
          <p key={i}>{part}</p>
        ))}
      </Wrapper>
    </div>
  )
}

export default ShowPaste
