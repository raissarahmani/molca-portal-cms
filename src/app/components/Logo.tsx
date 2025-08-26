import Image from "next/image";

export default function Logo({ size = 150, text }: { size?: number; text?: string }) {
  return (
    <div className={`flex flex-row gap-3 items-center h-full logo ${text ?? ""}`}>
      <div className="flex flex-col items-center relative">
        <Image
          src="/molca-logo.png"
          alt="Molca Logo"
          width={size}
          height={size}
          className="object-contain"
        />
      </div>
      <div className="flex items-center h-full">
        <div className={text}>
          Molca <span className="text-[#959595]">Factory</span>
        </div>
      </div>
    </div>
  );
}