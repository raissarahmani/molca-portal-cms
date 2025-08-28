"use client"

import Image from 'next/image'
import Production from '@/app/components/Demo/Production'
import Search from '@/app/components/Demo/Search'

type Props = {
  activeTab: "status" | "production" | "search" | null
  setActiveTab: React.Dispatch<React.SetStateAction<"status" | "production" | "search" | null>>
}

function Toggle({ activeTab, setActiveTab }: Props) {
  return (
    <div className='w-1/3 flex flex-col items-center relative'>
      <div className='bg-[var(--color-base)] rounded-md flex flex-row items-center justify-center gap-3 w-1/2 p-1'>
        <button
          type="button" 
          onClick={() => setActiveTab("production")}
          className={`button hover:bg-[var(--color-primary)] hover:text-[var(--color-base)] 
            ${activeTab === "production" ? "bg-[var(--color-primary)] text-[var(--color-base)]" : "bg-[var(--color-base)] text-[var(--color-text)]"} 
            text-xs m-0 p-1`}
        >
          Production
        </button>

        <button type="button" className='button hover:bg-[var(--color-primary)] hover:text-[var(--color-base)] text-xs m-0 p-1'>
          Utility
        </button>
        
        <button 
          type="button" 
          onClick={() => setActiveTab("search")} 
          className={`${activeTab === "search" ? "bg-[var(--color-primary)]" : "bg-[var(--color-base)]"} rounded-md p-2 cursor-pointer`}
        >
          <Image 
            src={`${activeTab === "search" ? "/Search2.svg" : "/Search.svg"}`}
            alt="Search" 
            width={15}
            height={15}
          />
        </button>
      </div>

      {activeTab === "production" && 
        <div className="absolute inset-x-0 bottom-0 flex items-center transition-all duration-500 ease-in-out">
          <Production setActiveTab={setActiveTab} />
        </div>
      }

      {activeTab === "search" && 
        <div className='absolute inset-0 flex items-center justify-center'>
          <Search setActiveTab={setActiveTab} />
        </div>
      }
    </div>
  )
}

export default Toggle
