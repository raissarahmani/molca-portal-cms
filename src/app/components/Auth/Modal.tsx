import Login from './Login'
import Option from './Option'

function Modal() {
  return (
    <div className='absolute flex flex-col inset-0 items-center justify-center gap-2'>
      <Login />
      <Option />
    </div>
  )
}

export default Modal
