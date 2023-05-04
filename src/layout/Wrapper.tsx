import css from './Wrapper.module.css'

const Wrapper = ({ className = '', children, ...props }) => {
  return (
    <div {...props} className={$cn('wrapper', css.wrapper, className)}>
      {children}
    </div>
  )
}

export default Wrapper
