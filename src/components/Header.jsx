import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import { useState } from "react";
function Header() {
  const [isvisible, setvisible] = useState(false);
  function showNavbar() {
    setvisible(!isvisible);
  }
  return (
    <header className="flex flex-row justify-between h-20 items-center relative lg:after:content-[''] lg:after:relative lg:after:inline-block lg:after:w-full lg:after:ms-[clamp(1rem,5vw,5rem)] lg:after:h-[.08rem] lg:after:bg-opacity-25 lg:after:bg-accent">
      <div className="ml-5 h-11 min-w-12">
        <img src={logo} alt="logo" className="h-full" />
      </div>
      <button
        className={`h-6 md:hidden aspect-square ${
          isvisible ? `bg-ham-close` : `bg-hamburger`
        } bg-transparent bg-no-repeat bg-cover bg-center z-20 absolute right-5 top-7`}
        onClick={showNavbar}
        aria-controls="primary-navigation"
        aria-expanded={isvisible}
      >
        <span className="sr-only">menu</span>
      </button>
      <nav
        id="primary-navigation"
        className={`text-primary w-1/2 sm:w-1/3 ${
          isvisible ? `translate-x-0` : `translate-x-full`
        } transition-transform md:transform-none md:w-auto absolute min-h-screen top-0 right-0 bottom-0 md:static md:min-h-full z-10 bg-white bg-opacity-10 backdrop-blur-lg flex flex-col items-start pt-20 md:pt-0 md:flex-row md:items-center px-3 order-2 md:px-[clamp(3rem,7vw,5rem)]`}
      >
        <ul className="flex flex-col md:flex-row md:gap-x-[clamp(1rem,5vw,4rem)]">
          <li>
            <NavLink
              to={"/"}
              className="md:underline-indicator uppercase text-lg font-sanscond inline-flex items-center h-full text-accent"
            >
              <span
                aria-hidden="true"
                className="text-bold text-lg text-primary mr-2 tracking-wider md:hidden lg:inline-block"
              >
                00
              </span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/destination"}
              className="md:underline-indicator uppercase text-lg font-sanscond inline-flex items-center h-full text-accent"
            >
              <span
                aria-hidden="true"
                className="text-bold text-lg text-primary mr-2 tracking-wider md:hidden lg:inline-block"
              >
                01
              </span>
              Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/crew"}
              className="md:underline-indicator uppercase text-lg font-sanscond inline-flex items-center h-full text-accent"
            >
              <span
                aria-hidden="true"
                className="text-bold text-lg text-primary mr-2 tracking-wider md:hidden lg:inline-block"
              >
                02
              </span>
              Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/technology"}
              className="md:underline-indicator uppercase text-lg font-sanscond inline-flex items-center h-full text-accent"
            >
              <span
                aria-hidden="true"
                className="text-bold text-lg text-primary mr-2 tracking-wider md:hidden lg:inline-block"
              >
                03
              </span>
              Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
