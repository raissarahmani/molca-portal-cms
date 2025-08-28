"use client"

import Image from 'next/image'
import Status from '@/app/components/Demo/Status'
import Toggle from '@/app/components/Demo/Toggle'
import Reset from '@/app/components/Demo/Reset'

import { useState } from 'react'

export default function Demo() {
  const [activeTab, setActiveTab] = useState<"status" | "production" | "search" | null>(null)

  return (
    <div className='relative'>
      <div className='fixed inset-0 z-0 cursor-grab active:cursor-grabbing'>
        <Image 
          src="/factory.png"
          alt="" 
          fill
          className="object-cover z-0"
        />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-5 h-[100vh]">
        <div className="flex flex-row items-center gap-3">
          {activeTab !== "production" && <Status />}
          {(activeTab !== "production" && activeTab !== "status") && (
            <Toggle activeTab={activeTab} setActiveTab={setActiveTab} />)}
        </div>
        <button className='flex flex-row justify-end items-end cursor-pointer'>
          <Reset />
        </button>
      </div>
    </div>
  )
}
