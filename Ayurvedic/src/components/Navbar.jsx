import { Link } from "react-router-dom";
import { navLinks } from "../constants/index";
import { FaBars } from "react-icons/fa6";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setScrollDirection("down");
      } else {
        // Scrolling up
        setScrollDirection("up");
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 flex md:flex lg:flex h-16 transition-transform duration-300 z-50 ease-in-out  w-full backdrop-blur-md items-center justify-between px-10 p-2 ${
        scrollDirection === "down" ? "translate-y-[-100%]" : "translate-y-0"
      }`}
    >
      <div>
        <img src="/Healthix.png" alt="" className="h-10" />
      </div>
      <div className="hidden md:flex lg:flex gap-8">
        {navLinks.map((link) => (
          <div key={link.link} className="relative">
            <Link
              to={link.link}
              className="nav-link font-bold flex items-center gap-2"
              onMouseEnter={link.name === "Medicines" ? handleMouseEnter : null}
            >
              {link.name}
            </Link>
            {link.name === "Medicines" && isDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md"
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/medicines/diabetes"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Diabetes
                </Link>
                <Link
                  to="/medicines/cardio"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Cardio
                </Link>
              </div>
            )}
          </div>
        ))}
        <button>
          <a
            href="/enquiry"
            className="font-bold rounded-sm p-3 bg-black text-white"
          >
            Enquiry
          </a>
        </button>
      </div>
      <div className="lg:hidden flex items-center gap-5">
        <div>
          <Sheet>
            <SheetTrigger>
              <FaBars size={22} className="hide-mobile-nav text-black mt-2" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="flex flex-col gap-10 p-4">
                  {navLinks.map((link) => (
                    <div key={link.link} className="relative">
                    <Link
                      key={link.link}
                      to={link.link}
                      className="nav-link font-bold text-xl flex items-center gap-4 font-[Minera]"
                      onMouseEnter={link.name === "Medicines" ? handleMouseEnter : null}
                    >
                      {link.name}
                    </Link>
                    {link.name === "Medicines" && isDropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md"
                        onMouseLeave={handleMouseLeave}
                      >
                        <Link
                          to="/medicines/diabetes"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Diabetes
                        </Link>
                        <Link
                          to="/medicines/cardio"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Cardio
                        </Link>
                      </div>
                    )}
                    </div>
                  ))}
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
