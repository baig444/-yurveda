import { Link } from "react-router-dom";
import { navLinks } from "../constants/index";
import { FaBars } from "react-icons/fa6";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/Healthix.png" alt="Healthix Logo" className="h-10" />
        </Link>

        <div className="hidden lg:flex items-center  space-x-16">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  {link.dropdownItems ? (
                    <NavigationMenuTrigger>{link.name}</NavigationMenuTrigger>
                  ) : (
                    <Link to={link.link} legacyBehavior passHref>
                      <NavigationMenuLink className="font-medium text-gray-700 hover:text-green-600 transition-colors">
                        {link.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                  {link.dropdownItems && (
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        {link.dropdownItems.map((item) => (
                          <li key={item.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.link}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-600 focus:bg-green-50 focus:text-green-600"
                              >
                                <div className="text-sm font-medium leading-none">{item.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/enquiry">Enquire Now</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <img src="/Healthix.png" alt="Healthix Logo" className="h-10 mb-6" />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdownItems ? (
                    <NavigationMenu orientation="vertical">
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>{link.name}</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-3 p-4">
                              {link.dropdownItems.map((item) => (
                                <li key={item.name}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={item.link}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-600 focus:bg-green-50 focus:text-green-600"
                                    >
                                      <div className="text-sm font-medium leading-none">{item.name}</div>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  ) : (
                    <Link
                      href={link.link}
                      className="block py-2 text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link href="/enquiry">Enquire Now</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
