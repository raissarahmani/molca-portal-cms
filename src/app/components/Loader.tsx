import Logo from '@/app/components/Logo'

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Logo size={200} text='items-center text-6xl flex items-center justify-center' />
      <div className="flex flex-col items-center justify-center gap-1 absolute inset-x-0 bottom-0 top-30">
        <div className="text-sm">Loading</div>
        <div className="loader"></div>
      </div>
    </div>
  );
}
