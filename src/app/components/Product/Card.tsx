import Image from "next/image";

type CardProps = {
  image: string;
  number: string;
  title: string;
};

function Card({ image, number, title }: CardProps) {
  return (
    <div className="relative rounded-xl overflow-hidden flex flex-col hover:scale-105 cursor-pointer">
      <Image 
        src={image}
        alt={title} 
        width={200}
        height={500}
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-1"></div>
      <div className="flex flex-col gap-2 z-2 absolute bottom-5 left-5 right-5">
        <div className="product-card text-5xl text-white absolute bottom-20">{number}</div>
        <div className="font-[var(--font-inter)] font-extrabold text-2xl text-white">{title}</div>
      </div>
    </div>
  );
}

export default Card