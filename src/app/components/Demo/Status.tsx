"use client"
import Image from 'next/image'
import { useState } from 'react'
import StatusBar from '@/app/components/Demo/StatusBar'

function Status() {
  const [showStatus, setShowStatus] = useState(false)

  return (
    <div className='w-1/3 relative'>
      <button 
        type="button" 
        onClick={() => setShowStatus(true)}
        className='bg-[var(--color-primary)] rounded-lg p-2 w-8 cursor-pointer'>
        <Image 
          src="/home.svg"
          alt="Status" 
          width={20}
          height={20} 
        />
      </button>

      {showStatus && 
        <div className={`absolute inset-0 flex items-center transition-all duration-500 ease-in-out ${showStatus === true ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
          <StatusBar setShowStatus={setShowStatus} />
        </div>
      }
    </div>
  )
}

export default Status
