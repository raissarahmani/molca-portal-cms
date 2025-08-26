import Login from '@/app/components/Auth/Login'
import Option from '@/app/components/Auth/Option'

export default function AuthPage() {
  return (
    <div className='absolute flex flex-col inset-0 items-center justify-center gap-2'>
      <Login />
      <Option />
    </div>
  )
}
