import Logo from "./Logo";

function Header() {
  return (
    <div className="flex flex-row items-start h-10 w-full">
      <Logo size={50} text={"items-center text-md"} />
    </div>
  );
}

export default Header
