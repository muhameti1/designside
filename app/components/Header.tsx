import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm flex justify-center">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">MAC</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm hover:text-primary">
              Services
            </Link>
            <Link href="#" className="text-sm hover:text-primary">
              Agency
            </Link>
            <Link href="#" className="text-sm hover:text-primary">
              Case Study
            </Link>
            <Link href="#" className="text-sm hover:text-primary">
              Resources
            </Link>
          </nav>
        </div>
        <button className="hidden md:inline-flex">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
