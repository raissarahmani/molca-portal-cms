"use client"

import { useState, useRef, useEffect } from "react"
import Image from 'next/image'

interface StatusModalProps {
  setShowStatus: React.Dispatch<React.SetStateAction<boolean>>
}

export default function StatusBar({ setShowStatus }: StatusModalProps) {
    const [isActive, setIsActive] = useState<"information" | "parameter" | null>(null)

    const status = [
        { type: "Counter", image: "/counter.svg", value: "900 pcs", color: "#231F20" },
        { type: "Rejection Count", image: "/reject.svg", value: "12 pcs", color: "#E57373" },
        { type: "Gas", image: "/gas.svg", value: "900 pcs", color: "#231F20" },
        { type: "Electricity", image: "/electricity.svg", value: "12 kWh", color: "#231F20" },
    ]

    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowStatus(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [setShowStatus])

  return (
    <div className="fixed inset-0 z-50 cursor-default">
      <div
        ref={modalRef}
        className="relative bg-[var(--color-base)] rounded-lg p-5 z-10 w-full"
      >
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
                <div className="font-bold">AL4</div>
                <div className="text-[#75EDAE] text-xs font-semibold">• Running</div>
            </div>
            <div className="flex flex-row justify-evenly items-center cursor-pointer">
                <button 
                    onClick={() => setIsActive("information")}
                    className={`text-center w-full p-2 cursor-pointer ${isActive === "information" ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]" : "text-[var(--color-text)] border-none"}`}
                >
                    Information
                </button>
                <button 
                    onClick={() => setIsActive("parameter")}
                    className={`text-center w-full p-2 cursor-pointer ${isActive === "parameter" ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]" : "text-[var(--color-text)] border-none"}`}
                >
                    Parameter
                </button>
            </div>
            <div className="p-2">
                {isActive === "information" &&
                    <>
                        <div className="text-justify text-sm mb-5">AMB (Automotive Batttery) adalah jenis baterai isi ulang (Timbal-Asam) 12V yang umum digunakan untuk kendaraan seperti mobil , truck, & alat berat</div>
                        <div className="border border-[var(--color-text)] rounded-md flex flex-row items-center justify-center cursor-pointer">
                            <Image 
                              src="/doc.svg"
                              alt="Documentation" 
                              width={15}
                              height={15}
                            />
                            <a href="" className="button m-0">View Documentation</a>
                        </div>
                    </>
                }

                {isActive === "parameter" &&
                    <>
                        <div className="flex flex-col gap-1 border-b py-2">
                            <div className="text-sm">Status</div>
                            <div className="text-[#75EDAE] text-xs font-semibold">• Running</div>
                        </div>
                        <div className="flex flex-col gap-1 border-b py-2">
                            <div className="text-sm">Efficiency</div>
                            <div className="font-bold">30%</div>
                        </div>
                        <div className="flex flex-col gap-1 border-b py-2">
                            <div className="text-sm">Downtime Line</div>
                            <div className="font-bold">3h : 2m</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-5">
                            {status.map((item, i) => (
                                <div 
                                    key={i} 
                                    style={{ backgroundColor: item.color }}
                                    className="flex flex-col gap-3 items-center rounded-lg p-2">
                                    <div>{item.type}</div>
                                    <Image 
                                      src={item.image}
                                      alt={item.type}
                                      width={20}
                                      height={20}
                                    />
                                    <div className="text-lg font-bold">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </>
                }
            </div>
        </div>
      </div>
    </div>
  )
}