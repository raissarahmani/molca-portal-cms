import Image from "next/image"
import Header from '@/app/components/Header'
import Card from "@/app/components/Menu/Card"

export default function Menu() {
    const cards = [
    {
      image: "/image.png",
      number: "01",
      title: "Molca Digital Twin",
      link: "/digitaltwin"
    },
    {
      image: "/image.png",
      number: "02",
      title: "Assembly-Disassembly",
      link: ""
    },
    {
      image: "/image.png",
      number: "03",
      title: "ROCE Calculator",
      link: "/roce"
    },
  ];

  return (
    <div className="flex flex-col">
        <div className='h-10 w-full fixed top-2 bottom-0 right-0 left-10'>
          <Header />
        </div>
        <div className='absolute inset-x-0 top-10 bottom-0 bg-[#231F20] rounded-md flex flex-col items-center justify-center gap-5 mx-15 my-5'>
          <div className="flex flex-row flex-wrap gap-5 justify-between items-center">
            {cards.map((card, i) => (
              <Card
                key={i}
                image={card.image}
                number={card.number}
                title={card.title}
                link={card.link}
              />
            ))}
          </div>
          <button type="button" className="flex flex-row items-center justify-center gap-2 bg-[#EF4444] button w-1/2 m-0">
              <Image 
                src="/logout.svg"
                alt="" 
                width={20} 
                height={20} 
              />
              <div>Log out</div>
          </button>
        </div>
    </div>
      
  )
}