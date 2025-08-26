import Logo from './Logo'

function Loader() {
  return (
    <div>
      <Logo />
      <div className="flex flex-col items-center mt-5 gap-1">
        <div className="text-sm">Loading</div>
        <div className='loader'></div>
      </div>
    </div>
  )
}

export default Loader
