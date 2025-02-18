import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
  const paths = ["/", "/about", "/techstack", "/projects", "/contact"];
  const location = useLocation();
  const [isopen, setIsOpen] = useState(false);
  const iconclick = () => {
    setIsOpen(!isopen);
  };

  return (
    <div className="h-20 w-full flex px-10 md:px-32 pt-4 justify-between items-center border-b-2 bg-[#212032]">
      <div className="text-[#f49434] font-bold text-2xl">PORTFOLIO</div>
      <div className="flex justify-items-start">
        <div className=" hidden md:flex justify-around items-center w-[609px] font-medium">
          {paths.map((path, index) => {
            const labels = [
              "Home",
              "About",
              "Techstack",
              "Projects",
              "Contact",
            ];
            return (
              <div key={path}>
                <Link
                  to={path}
                  className={`hover:underline ${location.pathname === path
                      ? "text-[#f49434] font-bold"
                      : "text-white"
                    }`}
                >
                  {labels[index]}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="text-3xl block md:hidden">
          <i
            className={isopen ? "fas fa-times" : "fas fa-bars"}
            onClick={iconclick}
          ></i>
        </div>
        {isopen && (
          <ul className="flex flex-col items-center justify-around fixed right-0 top-20  bg-black/50 w-[200px] h-[250px] z-50">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Techstack">Techstack</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
