import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 flex items-center justify-between bg-white px-4 py-4 shadow-md md:px-10 lg:px-16">
      <div className="flex items-center gap-3 md:gap-4">
        <img src="/kkn-logo.png" alt="Logo" className="inline-block h-12 w-12 md:h-16 md:w-16" />
        <h1 className="text-lg font-semibold md:text-3xl">
          KKN 179 Cikasungka<span className="text-[#C8815F]">.</span>
        </h1>
      </div>
      <nav>
        <ul className="flex items-center gap-4 md:gap-8">
          <Link to="/" className="cursor-pointer text-sm font-medium transition-colors hover:text-[#C8815F] md:text-[17px]">Home</Link>
          <Link to="/members" className="cursor-pointer text-sm font-medium transition-colors hover:text-[#C8815F] md:text-[17px]">Anggota</Link>
          <Link to="/gallery" className="cursor-pointer text-sm font-medium transition-colors hover:text-[#C8815F] md:text-[17px]">Galeri</Link>
        </ul>
      </nav>
    </header>
  );
}