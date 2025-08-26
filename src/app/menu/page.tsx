import Image from "next/image"
import Card from "@/app/components/Menu/Card"

export default function Menu() {
    const cards = [
    {
      image: "/image.png",
      number: "01",
      title: "Molca Digital Twin",
    },
    {
      image: "/image.png",
      number: "02",
      title: "Assembly-Disassembly",
    },
    {
      image: "/image.png",
      number: "03",
      title: "ROCE Calculator",
    },
  ];

  return (
    <div className='absolute bg-[#231F20] rounded-md p-5 flex flex-col items-center justify-center gap-5 mx-10'>
        <div className="flex flex-row flex-wrap gap-5 justify-between items-center">
          {cards.map((card, i) => (
            <Card
              key={i}
              image={card.image}
              number={card.number}
              title={card.title}
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
  )
}