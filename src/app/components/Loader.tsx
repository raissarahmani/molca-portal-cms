import Logo from './Logo'

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Logo size={200} text='items-center text-6xl' />
      <div className="flex flex-col items-center mt-5 gap-1">
        <div className="text-sm">Loading</div>
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default Loader
