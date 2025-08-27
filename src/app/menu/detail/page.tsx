import CardDetail from '@/app/components/Menu/Detail'
import Link from 'next/link'

export default function Detail() {
    const cards = [
    {
      image: "/digital-twin 1.png",
      title: "Free Roam",
      description: "Use your mouse to click and move to interact with objects "
    },
    {
      image: "/digital-twin 2.png",
      title: "Updated Information",
      description: "Access the updated site data and turn insights into action"
    },
    {
      image: "/digital-twin 3.png",
      title: "Chart and Documentation",
      description: "View historical site data and documentation such as equipment user manual"
    },
  ]

  return (
    <div className='absolute bg-transparent p-5 mx-30 flex flex-col items-center gap-3'>
      <div className='bg-[#231F20] rounded-md p-5 flex flex-col items-center gap-3'>
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
      <Link href="/demo" className='bg-[var(--color-primary)] text-[var(--color-base)] button w-1/4 text-center'>Start demo</Link>
    </div>  
  )
}