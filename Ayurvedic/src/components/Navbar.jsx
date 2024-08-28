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
  return (
    // <nav className='hidden md:flex lg:flex h-12 w-full bg-zinc-800 text-white items-center justify-center gap-5'>
    //   <Link className="nav-link" to="/">Home</Link>
    //   <Link className="nav-link" to="/about">About</Link>
    //   <Link className="nav-link" to="/shop">Shop</Link>
    //   <Link className="nav-link" to="/testimonials">Testimonials</Link>
    //   <Link className="nav-link" to="/gallery">Gallery</Link>
    //   <Link className="nav-link" to="/register">My Account</Link>
    //   <Link className="nav-link" to="/contact">Contact</Link>
    // </nav>

    <nav
      className={`fixed top-0 flex md:flex lg:flex h-16 transition-transform duration-300 z-50 ease-in-out  w-full backdrop-blur-md   items-center justify-between gap-5 px-10 p-2 ${
        scrollDirection === "down" ? "translate-y-[-100%]" : "translate-y-0"
      }`}
    >
      <div>
        <img src="/Logo copy.png" alt="" className="h-16" />
      </div>
      <div className="hidden md:flex lg:flex gap-8">
        {navLinks.map((link) => (
          <Link key={link.link} to={link.link} className="nav-link font-bold flex items-center gap-2">
            {link.name}
            
          </Link>
        ))}
      </div>
      <div className="relative">
        <div className="flex items-center gap-5">
         <div className="lg:hidden">
         <Sheet>
            <SheetTrigger><FaBars size={22} className='hide-mobile-nav text-black mt-2' /></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className='flex flex-col gap-10 p-4'>
                  {
                    navLinks.map((link) => (
                      <Link key={link.link} to={link.link} className="nav-link font-bold text-xl flex items-center gap-4 font-[Minera]">
                        <img src={link.icon} alt="icon" className="w-5 h-5" />
                        {link.name}
                      </Link>
                    ))
                  }
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
