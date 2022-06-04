import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScroll && "bg-slate-900 opacity-90 shadow-lg"}`}>
      <nav className="flex justify-center items-center space-x-2 md:space-x-12">
        <h4 className="cursor-pointer text-3xl font-extrabold text-transparent bg-gradient-to-r from-orange-200 to-red-700 bg-clip-text">
          Bauni
          <span className="text-xl font-bold text-transparent bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text">
            Fre
            <span className="text-3xl font-extrabold text-orange-500">i</span>
          </span>
        </h4>
        <ul className="hidden space-x-4 md:flex font-semibold">
          <li className="navLink">Beranda</li>
          <li className="navLink">TV Serial</li>
          <li className="navLink">Film</li>
          <li className="navLink">Trend & Populer</li>
          <li className="navLink">Daftar Saya</li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Bocil</p>
        <BellIcon className="w-6 h-6" />
        <Link to={"/account"}>
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer w-6 h-6 rounded"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
