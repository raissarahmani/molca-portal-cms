type CardProps = {
  type: string
  description: string
}

function Card({ type, description }: CardProps) {
  return (
    <div className="border-b-4 border-[var(--color-logo)] py-7">
      <p  className="font-bold text-lg">{type}</p>
      <p className="text-xs">{description}</p>
      <div className="flex flex-row items-left my-1 py-2">
        <div className="flex flex-col gap-2 border-r-4 border-[var(--color-logo)] pr-10">
            <div className="text-xs rounded-full bg-[var(--color-text)] text-[var(--color-base)] w-12 text-center">before</div>
            <div className="text-2xl font-semibold">IDR. 1,900,000,000</div>
        </div>
        <div className="flex flex-col gap-2 pl-10">
            <div className="text-xs rounded-full bg-[var(--color-primary)] text-[var(--color-base)] w-10 text-center">after</div>
            <div className="text-2xl text-[var(--color-primary)] font-semibold">IDR. 1,900,000,000</div>
        </div>
      </div>
    </div>
  )
}

export default Card
