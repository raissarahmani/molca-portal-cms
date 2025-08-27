import Header from '@/app/components/Header'
import Login from '@/app/components/Auth/Login'
import Option from '@/app/components/Auth/Option'

export default function AuthPage() {
  return (
    <div className='flex flex-col'>
      <div className='h-10 w-full fixed top-2 bottom-0 right-0 left-10'>
        <Header />
      </div>
      <div className='absolute inset-x-0 top-10 bottom-0 flex flex-col gap-2 items-center justify-center'>
        <Login />
        <Option />
      </div>
    </div>
  )
}
