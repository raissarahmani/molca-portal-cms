import Image from "next/image"
import Shopfloor from '@/app/components/ROCE/Shopfloor'
import Finance from '@/app/components/ROCE/Finance'
import CI from '@/app/components/ROCE/CI'
import Card from '@/app/components/ROCE/Card'

function roce() {
    const types = [
      {type: "Profit", description: "lorem ipsum dolor sit amet"},
      {type: "Revenue", description: "lorem ipsum dolor sit amet"},
      {type: "ROCE", description: "lorem ipsum dolor sit amet"},
    ]

  return (
    <div className='bg-[var(--color-base)] flex flex-row justify-between'>
      <div className='flex flex-col gap-5 w-1/2 px-10 py-5'>
        <button 
          type="button" 
          className="bg-[var(--color-primary)] rounded-lg p-2 cursor-pointer z-10 w-8"
        >
          <Image 
            src="/home.svg"
            alt="Status" 
            width={20}
            height={20} 
          />
        </button>
        <Shopfloor />
        <Finance />
        <CI />
      </div>
      <div className='w-1/2 pt-20 pr-10'>
        <div className="border-l-5 border-[var(--color-primary)] bg-[#231F20] px-7">
            {types.map((type, i) => (
                <Card key={i} type={type.type} description={type.description} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default roce
