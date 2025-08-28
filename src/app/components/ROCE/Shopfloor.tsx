"use client"

import { useState } from "react"

function Shopfloor() {   
    const data = [
      {type: "Shift number per day", min: 1, max: 3, unit: "shift"},
      {type: "Working hour per shift", min: 1, max: 8, unit: "h"}
    ]

    const [progress, setProgress] = useState(
      data.map((item) => item.min)
    )

    const handleDataChange = (i: number, value: number) => {
      const updated = [...progress]
      updated[i] = value
      setProgress(updated)
    }

    const params = [
      {type: "Availability (A)"},
      {type: "Performance (P)"},
      {type: "Quality (Q)"},
    ]

    const [values, setValues] = useState(
      params.map(() => 0)
    )

    const handleParamChange = (i: number, value: number) => {
      const updated = [...values]
      updated[i] = value
      setValues(updated)
    }

  return (
    <div className='flex flex-col gap-3'>
      <div className="font-bold text-xl text-[var(--color-primary)]">Shopfloor Data</div>
      <div className="flex flex-row justify-between items-center">
        {data.map((data, i) => (
        <div key={i} className="flex flex-col gap-1 w-full p-2">
            <div className="flex flex-row justify-between items-center">
                <p className="text-sm">{data.type}</p>
                <p className="text-sm text-[var(--color-primary)]">{progress[i]} {data.unit}</p>
            </div>
            <input
              type="range"
              min={data.min}
              max={data.max}
              value={progress[i]}
              onChange={(e) => handleDataChange(i, Number(e.target.value))}
              className="w-full accent-[var(--color-primary)] cursor-pointer"
            />
            <div className="flex flex-row justify-between items-center">
                <div className="text-sm text-[var(--color-logo))]">{data.min} {data.unit}</div>
                <div className="text-sm text-[var(--color-logo)]">{data.max} {data.unit}</div>
            </div>
        </div>
        ))}
      </div>
      <div className="flex flex-row gap-3 items-center">
        {params.map((param, i) => (
          <div key={i} className="flex flex-col gap-1">
              <label htmlFor={param.type} className="text-sm">{param.type}</label>
              <div className="flex flex-row justify-between items-center input">
                <input 
                type="number"
                name={param.type}
                value={values[i]}
                onChange={(e) => handleParamChange(i, Number(e.target.value))}
                className="input-form text-sm w-3/4"
                />
                <p className="text-sm">%</p>
              </div>
          </div>
          ))}
      </div>
    </div>
  )
}

export default Shopfloor
