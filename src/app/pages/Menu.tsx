import Header from '../components/Header'
// import Loader from "../components/Loader"
import Modal from "../components/Auth/Modal"

function Menu() {
  return (
    <div className='flex flex-col h-screen w-full p-10 gap-5 relative'>
      <Header />
      <div
        className="flex h-screen w-3/4 flex-col items-center justify-center"
        style={{
            backgroundImage: `url('/bg.png')`, 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top'
        }}
      ></div>
      <div
        className="flex h-screen w-3/4 flex-col items-end relative left-1/4"
        style={{
            backgroundImage: `url('/bg.png')`, 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        {/* <Loader /> */}
        <Modal />
      </div>
    </div>
  )
}

export default Menu
