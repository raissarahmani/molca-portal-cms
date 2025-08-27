"use client"
import { useState, useRef, useEffect } from "react"
import Image from 'next/image'

interface SearchModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SearchModal({ setShowModal }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const [openDropdown, setOpenDropdown] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const options = [
    { name: "Machine 1" },
    { name: "Machine 2" },
    { name: "Machine 3" },
    { name: "Machine 4" },
  ]

  const filtered = options.filter(opt =>
    opt.name.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [setShowModal])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        ref={modalRef}
        className="relative bg-[var(--color-base)] rounded-lg p-5 z-10 w-1/2"
      >
        <div className="font-[var(--font-dmsans)] font-semibold text-3xl mb-5 text-center">Search</div>
        <div className="flex flex-row gap-2 items-center input">
            <input
              type="text"
              value={query}
              onChange={e => {
                setQuery(e.target.value)
                setOpenDropdown(true)
              }}
              onFocus={() => setOpenDropdown(true)}
              placeholder="what are you looking for?"
              className="w-full rounded-md input-form focus-none]"
            />
            <Image 
              src="/Search3.svg"
              alt="Search" 
              width={15}
              height={15}
              className='cursor-pointer'
            />
        </div>

        {openDropdown && (
          <div className="absolute mt-1 p-1 w-[calc(100%-2.5rem)] bg-[var(--color-base)] border border-[var(--color-text)] rounded-md shadow-lg z-20">
            {filtered.length > 0 ? (
              filtered.map((opt, i) => (
                <div
                  key={i}
                  className="px-2 py-1 text-sm hover:bg-[var(--color-primary)] hover:rounded-md hover:text-[var(--color-base)] cursor-pointer"
                  onClick={() => {
                    setQuery(opt.name)
                    setOpenDropdown(false)
                  }}
                >
                  {opt.name}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-[var(--color-logo)]">No results</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
