import Image from "next/image";

function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex flex-row gap-3 items-center h-full logo ${className ?? ""}`}>
      <div className="flex flex-col items-center relative">
        <Image
          src="/molca-logo.png"
          alt="Molca Logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="flex items-center h-full">
        <div className="text-[1em] leading-none h-full flex items-center">
          Molca <span className="text-[#959595]">Factory</span>
        </div>
      </div>
    </div>
  );
}

export default Logo;
