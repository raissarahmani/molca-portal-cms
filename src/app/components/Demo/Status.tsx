import Image from 'next/image'

function Status() {
  return (
    <div className='w-1/3'>
      <div className='bg-[var(--color-primary)] rounded-lg p-2 w-8 cursor-pointer'>
        <Image 
          src="/home.svg"
          alt="Status" 
          width={20}
          height={20} 
        />
      </div>
    </div>
  )
}

export default Status
