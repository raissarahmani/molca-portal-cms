import Image from 'next/image'
import Link from 'next/link'

function Toggle() {
  return (
    <div className='w-1/3 flex flex-col items-center'>
      <div className='bg-[var(--color-base)] rounded-md flex flex-row items-center justify-center gap-3 w-1/2 p-1'>
        <Link href="/demo/production" className='button hover:bg-[var(--color-primary)] hover:text-[var(--color-base)] text-xs m-0 p-1'>Production</Link>
        <button className='button hover:bg-[var(--color-primary)] hover:text-[var(--color-base)] text-xs m-0 p-1'>Utility</button>
        <Link href="/demo/search" className='hover:bg-[var(--color-primary)] rounded-md p-2'>
          <Image 
            src="/Search.svg"
            alt="Search" 
            width={15}
            height={15}
            className='cursor-pointer'
          />
        </Link>
      </div>
    </div>
  )
}

export default Toggle
