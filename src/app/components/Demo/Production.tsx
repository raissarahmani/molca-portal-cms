"use client"

import { useRef, useEffect } from "react"

interface ProdModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<"production" | "search" | null>>
}

export default function ProdModal({ setIsActive }: ProdModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsActive(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [setIsActive])

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div
        ref={modalRef}
        className="relative bg-[var(--color-base)] rounded-lg p-5 z-10 w-full"
      >
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                    <div className="font-semibold text-lg">Production</div>
                    <div className="text-sm bg-[var(--color-text)] text-[var(--color-base)] rounded-md">Weekly</div>
                </div>
                <div>X</div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center rounded-lg bg-[#231F20]">
                    <div>Line</div>
                    <div>Planning</div>
                    <div>Target</div>
                </div>
                <div>Warehouse Occupancy</div>
            </div>
        </div>
      </div>
    </div>
  )
}
