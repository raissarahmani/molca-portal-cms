import Image from 'next/image'
import Status from '@/app/components/Demo/Status'
import Toggle from '@/app/components/Demo/Toggle'
import Reset from '@/app/components/Demo/Reset'

export default function Demo() {
  return (
    <div>
      <Image 
        src="/factory.png"
        alt="" 
        fill
        className="object-cover z-0"
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-5">
        <div className='flex flex-row items-center'>
          <Status />
          <Toggle />
        </div>
        <button className='flex flex-row justify-end items-center cursor-pointer'><Reset /></button>
      </div>
    </div>
  )
}

