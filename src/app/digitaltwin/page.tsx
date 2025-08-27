import Link from 'next/link'
import Header from '@/app/components/Header'
import CardDetail from '@/app/components/Menu/Detail'

export default function Digitaltwin() {
    const cards = [
    {
      image: "/digital-twin 1.png",
      title: "Free Roam",
      description: "Use your mouse to click and move to interact with objects",
    },
    {
      image: "/digital-twin 2.png",
      title: "Updated Information",
      description: "Access the updated site data and turn insights into action",
    },
    {
      image: "/digital-twin 3.png",
      title: "Chart and Documentation",
      description: "View historical site data and documentation such as equipment user manual",
    },
  ]

  return (
    <div className='flex flex-col gap-3'>
      <div className='h-10 w-full fixed top-2 bottom-0 right-0 left-10'>
        <Header />
      </div>
      <div className='absolute inset-x-0 top-10 bottom-0 bg-transparent flex flex-col items-center justify-center gap-5 mx-25'>
        <div className='bg-[#231F20] rounded-md p-10 flex flex-col items-center justify-evenly'>
          <div className="flex flex-row justify-between items-center">
            {cards.map((card, i) => (
              <CardDetail
                key={i}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
        <button className='flex flex-col items-center justify-center w-1/2'>
          <Link href="/demo" className='bg-[var(--color-primary)] text-[var(--color-base)] button w-1/4 text-center m-0'>Start demo</Link>
        </button>
      </div>
    </div>  
  )
}