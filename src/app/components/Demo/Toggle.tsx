"use client"

import Image from 'next/image'
import Link from 'next/link'
import Search from '@/app/components/Demo/Search'

import { useState } from 'react'

function Toggle() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='w-1/3 flex flex-col items-center relative'>
      <div className='bg-[var(--color-base)] rounded-md flex flex-row items-center justify-center gap-3 w-1/2 p-1'>
        <Link href="/demo/production" className='button hover:bg-[var(--color-primary)] hover:text-[var(--color-base)] text-xs m-0 p-1'>Production</Link>
        <button className='button hover:bg-[var(--color-primary)] hover:text-[var(--color-base)] text-xs m-0 p-1'>Utility</button>
        <button 
          onClick={() => setShowModal(true)} 
          className='hover:bg-[var(--color-primary)] rounded-md p-2 cursor-pointer'>
            <Image 
              src="/Search.svg"
              alt="Search" 
              width={15}
              height={15}
            />
        </button>
      </div>
      {showModal && 
        <div className='absolute inset-0 flex items-center justify-center'>
          <Search setShowModal={setShowModal} />
        </div>
      }
    </div>
  )
}

export default Toggle
