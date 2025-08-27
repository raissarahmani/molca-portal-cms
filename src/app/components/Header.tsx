import Logo from "./Logo";

export default function Header() {
  return (
    <div className="h-10 w-full z-50">
      <Logo size={50} text={"items-center text-md"} />
    </div>
  );
}
