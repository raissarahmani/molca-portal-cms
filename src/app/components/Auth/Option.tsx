import Image from "next/image"

export default function Option() {
  return (
    <div className='flex flex-row items-center justify-between bg-[#231F20] rounded-xl py-3 px-10 w-[50vw]'>
      <div className="flex flex-row items-center gap-2">
        <Image 
          src="/flag.svg"
          alt="" 
          width={20} 
          height={20} 
        />
        <div>English</div>
      </div>
      <Image 
        src="/LanguageIcon.svg"
        alt="" 
        width={20} 
        height={20} 
        className="cursor-pointer"
      />
    </div>
  )
}