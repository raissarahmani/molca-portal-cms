"use client"

import Image from 'next/image'
import Production from '@/app/components/Demo/Production'
import Search from '@/app/components/Demo/Search'

import { useState } from 'react'

function Toggle() {
  const [isActive, setIsActive] = useState<"production" | "search" | null>(null)

  return (
    <div className='w-1/3 flex flex-col items-center relative'>
      <div className='bg-[var(--color-base)] rounded-md flex flex-row items-center justify-center gap-3 w-1/2 p-1'>
        <button
          type="button" 
          onClick={() => setIsActive("production")}
          className={`button hover:bg-[var(--color-primary)] hover:text-[var(--color-base)] ${isActive === "production" ? "bg-[var(--color-primary)] text-[var(--color-base)]" : "bg-[var(--color-base)] text-[var(--color-text)]"} text-xs m-0 p-1`}
        >
          Production
        </button>

        <button type="button"  className='button hover:bg-[var(--color-primary)] hover:text-[var(--color-base)] text-xs m-0 p-1'>Utility</button>
        
        <button 
          type="button" 
          onClick={() => setIsActive("search")} 
          className={`hover:bg-[var(--color-primary)] ${isActive === "search" ? "bg-[var(--color-primary)]" : "bg-[var(--color-base)]"} rounded-md p-2 cursor-pointer`}>
            <Image 
              src={`${isActive === "search" ? "/Search2.svg" : "/Search.svg"}`}
              alt="Search" 
              width={15}
              height={15}
            />
        </button>
      </div>

      {isActive === "production" && 
        <div className={`absolute inset-x-0 bottom-0 flex items-center transition-all duration-500 ease-in-out ${isActive === "production" ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
          <Production setIsActive={setIsActive} />
        </div>
      }

      {isActive === "search" && 
        <div className='absolute inset-0 flex items-center justify-center'>
          <Search setIsActive={setIsActive} />
        </div>
      }
    </div>
  )
}

export default Toggle
