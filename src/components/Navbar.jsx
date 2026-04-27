import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-white px-4 py-3 shadow-md md:px-10 lg:px-16">
      <div className="flex items-center gap-3 md:gap-4">
        <img src="/kkn-logo.png" alt="Logo" className="inline-block h-10 w-10 md:h-16 md:w-16" />
        <h1 className="text-lg font-semibold md:text-3xl">
          KKN 179 Cikasungka<span className="text-[#C8815F]">.</span>
        </h1>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="block md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-4 md:gap-8">
          <Link to="/" className="cursor-pointer text-sm font-medium transition-colors hover:text-[#C8815F] md:text-[17px]">Home</Link>
          <Link to="/members" className="cursor-pointer text-sm font-medium transition-colors hover:text-[#C8815F] md:text-[17px]">Anggota</Link>
          <Link to="/gallery" className="cursor-pointer text-sm font-medium transition-colors hover:text-[#C8815F] md:text-[17px]">Galeri</Link>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <Link 
              to="/" 
              className="cursor-pointer text-sm font-medium transition-colors hover:text-[#C8815F]"
              onClick={() => setIsOpen(false)}
            >Home</Link>
            <Link 
              to="/members" 
              className="cursor-pointer text-sm font-medium transition-colors hover:text-[#C8815F]"
              onClick={() => setIsOpen(false)}
            >Anggota</Link>
            <Link 
              to="/gallery" 
              className="cursor-pointer text-sm font-medium transition-colors hover:text-[#C8815F]"
              onClick={() => setIsOpen(false)}
            >Galeri</Link>
          </ul>
        </nav>
      )}
    </header>
  );
}