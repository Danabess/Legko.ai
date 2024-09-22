import { useState } from "react";
import logo from "../assets/images/header/logo.svg";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const navLinksList = ["Решения", "Интеграции", "Кейсы", "Вебинары"];

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  window.addEventListener("resize", () => {
    window.innerWidth > 768 ? setActiveMenu(false) : null;
  });

  return (
    <section
      className={`z-10 md:max-h-full sticky top-4 flex justify-between items-center bg-white/80 p-4 pl-8 rounded-[30px] mt-5 ${
        activeMenu ? "rounded-b-none" : ""
      }`}>
      <div className="z-10">
        <a href="" className="flex gap-1 md:gap-3 items-center w-full">
          <img src={logo} alt="logo" className="flex h-4 md:h-full" />
          <span className="font-bold text-base md:text-3xl tracking-tighter font-Gilroy">legko.ai</span>
        </a>
      </div>
      <nav
        className={`md:block justify-center max-md:absolute max-md:top-full max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-full max-md:bg-inherit z-10 rounded-b-[30px] ${
          activeMenu ? "block pb-4" : "hidden"
        }`}>
        <ul className="flex gap-x-10 gap-y-5 md:flex-row flex-col md:translate-y-0 text-center">
          {navLinksList.map((item) => (
            <li key={navLinksList.indexOf(item)}>
              <a
                href={`#${item}`}
                className="lg:text-lg font-LTSuperior font-medium"
                onClick={activeMenu ? handleMenu : null}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button btnContent="Обсудить проект" className="hover:bg-sky-500 hover:border-sky-500" dark hidden />
      <div className="md:hidden cursor-pointer z-10" onClick={handleMenu}>
        {!activeMenu ? <RxHamburgerMenu size={20} /> : <IoCloseOutline size={20} />}
      </div>
    </section>
  );
};

export default Header;
