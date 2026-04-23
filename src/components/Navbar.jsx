import { Link } from "react-router-dom";

export default function Navbar() {
  return (
  <div className="fixed top-0 left-0 right-0 z-10 text-[17px] px-20 py-6 bg-white shadow-md flex justify-between items-center">
    <div className="flex items-center gap-4">
      <img src="/kkn-logo.png" alt="Logo" className="inline-block" width="75" height="75" />
      <h1 className="text-[36px] font-semibold">
        KKN 179 Cikasungka<span className="text-[#C8815F]">.</span>
      </h1>
    </div>
    <div>
      <ul className="flex gap-8">
        <Link to="/" className="cursor-pointer text-[24px] font-medium hover:text-[#C8815F] transition-colors">Home</Link>
        <Link to="/members" className="cursor-pointer text-[24px] font-medium hover:text-[#C8815F] transition-colors">Anggota</Link>
        <Link to="/gallery" className="cursor-pointer text-[24px] font-medium hover:text-[#C8815F] transition-colors">Galeri</Link>
      </ul>
    </div>
  </div>
  );
}