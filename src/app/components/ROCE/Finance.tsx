"use client"

import { useState } from "react"

function Finance() {
    const types = [
      {type: "Price per unit"},
      {type: "Variable cost per unit"},
      {type: "Direct maintenance cost yearly"},
      {type: "Depreciation yearly"},
      {type: "Other fixed cost"},
    ]

    const [values, setValues] = useState(
      types.map(() => 0)
    )

    const handleChange = (i: number, value: number) => {
      const updated = [...values]
      updated[i] = value
      setValues(updated)
    }

  return (
    <div className='flex flex-col gap-3'>
      <div className="font-bold text-xl text-[var(--color-primary)]">Finance Data</div>
      <div className="flex flex-col gap-2">
        {types.map((type, i) => (
          <div key={i} className="flex flex-col gap-1">
              <label htmlFor={type.type} className="text-sm">{type.type}</label>
              <input 
              type="number"
              name={type.type}
              value={values[i]}
              onChange={(e) => handleChange(i, Number(e.target.value))}
              className="input text-sm"
              />
          </div>
          ))}
      </div>
    </div>
  )
}

export default Finance
