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
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="flex h-16 items-center justify-between px-14 bg-[#ffffff40] backdrop-blur-md">
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
                  INDUSTRIAL
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
          <Link
            to="/enquiry"
            className="font-bold rounded-md p-3 bg-black text-white"
          >
            Enquire Now
          </Link>
        </button>
      </div>
      <div className="lg:hidden flex items-center gap-5">
        <div>
          <Sheet>
            <SheetTrigger asChild>
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
                        onMouseEnter={
                          link.name === "Medicines" ? handleMouseEnter : null
                        }
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
                    <Link
                      to="/enquiry"
                      className="font-bold rounded-sm p-3 bg-black text-white"
                    >
                      Enquire Now
                    </Link>
                  </button>
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
