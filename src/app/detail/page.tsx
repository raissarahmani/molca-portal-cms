import CardDetail from '@/app/components/Menu/Detail'

export default function Detail() {
    const cards = [
    {
      image: "/image.png",
      title: "Free Roam",
      description: "Use your mouse to click and move to interact with objects "
    },
    {
      image: "/image.png",
      title: "Updated Information",
      description: "Access the updated site data and turn insights into action"
    },
    {
      image: "/image.png",
      title: "Chart and Documentation",
      description: "View historical site data and documentation such as equipment user manual"
    },
  ]

  return (
    <div className='flex flex-col gap-3'>
        <div className='absolute bg-[#231F20] rounded-md p-5 flex flex-col items-center justify-center gap-5 mx-10'>
          <div className="flex flex-row flex-wrap gap-5 justify-between items-center">
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
        <button type='button' className='bg-[var(--color-primary)] text-[var(--color-base)] button'>Start demo</button>
    </div>
    
  )
}
