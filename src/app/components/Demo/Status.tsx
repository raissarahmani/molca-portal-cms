"use client"
import Image from 'next/image'
import { useState } from 'react'
import StatusBar from '@/app/components/Demo/StatusBar'

function Status() {
  const [showStatus, setShowStatus] = useState(false)

  return (
    <div className='w-1/3 relative flex items-start'>
      <button 
        type="button" 
        onClick={() => setShowStatus(!showStatus)}
        className={`bg-[var(--color-primary)] rounded-lg p-2 cursor-pointer z-10 transition-transform duration-500 ease-in-out
          ${showStatus ? "translate-x-105" : "translate-x-0"}`}
      >
        <Image 
          src="/home.svg"
          alt="Status" 
          width={20}
          height={20} 
        />
      </button>
      
      <div className={`absolute top-0 left-0 h-full w-full transition-transform duration-500 ease-in-out 
          ${showStatus ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <StatusBar setShowStatus={setShowStatus} />
      </div>
    </div>
  )
}

export default Status
