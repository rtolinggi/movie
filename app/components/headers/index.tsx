import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import logo from "../../assets/Netflix_2015_logo.svg";
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
      <nav className="flex justify-center items-center space-x-2 md:space-x-6">
        <img src={logo} className=" cursor-pointer object-contain w-32" />
        <ul className="hidden space-x-4 md:flex font-semibold">
          <li className="navLink font-semibold">Beranda</li>
          <li className="navLink font-semibold">TV Serial</li>
          <li className="navLink font-semibold">Film</li>
          <li className="navLink font-semibold">Trend & Populer</li>
          <li className="navLink font-semibold">Daftar Saya</li>
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
