import Image from 'next/image'

function Reset() {
  return (
    <div className='bg-[var(--color-primary)] rounded-lg p-2 cursor-pointer'>
      <Image 
        src="/reset.svg"
        alt="Reset" 
        width={20}
        height={20} 
      />
    </div>
  )
}

export default Reset
