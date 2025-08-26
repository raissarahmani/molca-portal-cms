import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  description: string;
};

function Card({ image, title, description }: CardProps) {
  return (
    <div className="rounded-md overflow-hidden flex flex-col items-center justify-center w-1/4 hover:scale-105 transition-transform cursor-pointer">
      <Image 
        src={image}
        alt={title} 
        width={300}
        height={150}
        className="object-cover z-0"
      />
      <div className="flex flex-col flex-wrap items-center justify-center gap-5 my-5">
        <div className="font-[var(--font-inter)] font-bold text-lg text-[#D4D4D8]">{title}</div>
        <div className="font-[var(--font-inter)] text-sm text-[#A1A1AA] text-center">{description}</div>
      </div>
    </div>
  );
}

export default Card