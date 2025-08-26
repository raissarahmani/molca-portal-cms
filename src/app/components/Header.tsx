import Logo from "./Logo";

function Header() {
  return (
    <div className="flex flex-row items-start h-10 w-full">
      <Logo className="h-full" />
    </div>
  );
}

export default Header
