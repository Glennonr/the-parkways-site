"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/common/lib/utils";
import { Button } from "@/common/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/common/components/ui/sheet";
import {
  Menu,
  X,
  Music,
  Home,
  Calendar,
  Image as ImageIcon,
  Info,
  Headphones,
  ShoppingBag,
  ExternalLink,
} from "lucide-react";

const routes = [
  { name: "Home", href: "/", icon: <Home className="h-5 w-5 mr-2" /> },
  {
    name: "Shows",
    href: "/shows",
    icon: <Calendar className="h-5 w-5 mr-2" />,
  },
  {
    name: "Music",
    href: "/music",
    icon: <Headphones className="h-5 w-5 mr-2" />,
  },
  {
    name: "Gallery",
    href: "/gallery",
    icon: <ImageIcon className="h-5 w-5 mr-2" />,
  },
  {
    name: "Merch",
    href: "/merch",
    icon: <ShoppingBag className="h-5 w-5 mr-2" />,
  },
  { name: "About", href: "/about", icon: <Info className="h-5 w-5 mr-2" /> },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "bg-black/95 backdrop-blur-lg border-b border-primary/20 shadow-lg shadow-primary/5 py-1"
          : "bg-gradient-to-b from-black/90 via-black/70 to-transparent py-3"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 group transition-all duration-300"
          >
            <div className="relative w-12 h-12 overflow-hidden rounded-lg transform group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <Image
                src="/logo.png"
                alt="The Parkways Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-wider text-white group-hover:text-primary transition-colors duration-300">
                THE PARKWAYS
              </span>
              <span className="text-xs text-gray-400 tracking-widest hidden sm:block">
                SOUTH JERSEY ROCK & ROLL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-1 mr-4">
              {routes.map((route) => (
                <Link
                  key={route.name}
                  href={route.href}
                  className={cn(
                    "px-4 py-2 rounded-md text-base font-medium transition-all duration-300 relative group",
                    pathname === route.href
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  <span>{route.name}</span>
                  {pathname === route.href && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full"></span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary rounded-full transition-all duration-300 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
                </Link>
              ))}
            </nav>
            
            {/* Book Now Button */}
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-black font-bold py-2 px-6 rounded-md transition-all duration-300 shadow-md shadow-primary/20"
            >
              <Link href="/bookings">
                Book Now
                <ExternalLink className="h-4 w-4 -mt-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-300 hover:text-white relative overflow-hidden group"
                aria-label="Open menu"
              >
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                <Menu className="h-6 w-6 transition-transform group-hover:scale-110" />
              </Button>
            </SheetTrigger>
            
            {/* Mobile Navigation Menu */}
            <SheetContent
              side="right"
              className="bg-zinc-950/95 backdrop-blur-xl border-l border-primary/20 p-0 w-[300px] max-w-full"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                      <Image
                        src="/logo.png"
                        alt="The Parkways Logo"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg text-white">THE PARKWAYS</span>
                      <span className="text-[10px] text-gray-400 tracking-widest">
                        SOUTH JERSEY ROCK & ROLL
                      </span>
                    </div>
                  </div>
                </div>

                <nav className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto">
                  {routes.map((route) => (
                    <Link
                      key={route.name}
                      href={route.href}
                      onClick={() => setIsSheetOpen(false)}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-md text-lg font-medium transition-all duration-200",
                        pathname === route.href
                          ? "text-primary bg-primary/10 shadow-sm shadow-primary/10"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <div className={cn(
                        "mr-3 p-2 rounded-md transition-colors",
                        pathname === route.href
                          ? "bg-primary/20 text-primary"
                          : "text-gray-400"
                      )}>
                        {route.icon}
                      </div>
                      {route.name}
                    </Link>
                  ))}
                  
                  {/* Mobile Book Now Button */}
                  <Link
                    href="/bookings"
                    onClick={() => setIsSheetOpen(false)}
                    className="flex items-center mx-3 mt-4 px-4 py-3 bg-primary text-black rounded-md font-medium transition-all duration-200"
                  >
                    <ExternalLink className="h-5 w-5 mr-2 -mt-1" />
                    Book Now
                  </Link>
                </nav>

                <div className="p-6 border-t border-white/10">
                  <p className="text-sm text-gray-500 text-center">
                    © {new Date().getFullYear()} The Parkways
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
