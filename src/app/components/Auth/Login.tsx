import Image from 'next/image'

function Login() {
  return (
    <div className='bg-[#231F20] rounded-3xl p-10 w-[50vw]'>
      <div className='text-[#F8FAFC] font-[var(--font-dmsans)] font-semibold text-4xl text-center'>Log in</div>
      <form action="" className='flex flex-col py-5'>
        <label htmlFor="email" className='label-form'>Email address</label>
        <input type="email" placeholder='enter your email...' className='input mb-5' />
        <label htmlFor="password" className='label-form'>Password</label>
        <div className='flex flex-row items-center justify-between input mb-1'>
            <input type="password" placeholder='enter your password...' className='input-form' />
            <Image 
              src="/icon.svg"
              alt="" 
              width={20} 
              height={20} 
            />
        </div>
        <div className='font-[var(--font-dmsans)] text-[#CBD5E1] text-xs text-right'>Forgot password?</div>
        <button type='submit' className='bg-[var(--color-primary)] text-[var(--color-base)] button'>Login</button>
      </form>
      <div className='text-center text-sm'>or <span className='text-[var(--color-primary)]'>Login as Guest</span></div>
    </div>
  )
}

export default Login
