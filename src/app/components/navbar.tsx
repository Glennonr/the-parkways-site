"use client";  // Add this line to mark the component as a client-side component
import Image from 'next/image'

import { useState } from "react";
import Link from "next/link";
import { FaSpotify, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger menu icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messagePosition, setMessagePosition] = useState({ x: 0, y: 0 });

  // Toggle the menu on small screens
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // Closes menu when a link is clicked

  const handleComingSoon = (event, platform) => {
    setMessage(`${platform} coming soon!`);
    const rect = event.target.getBoundingClientRect();
    setMessagePosition({ x: rect.left + rect.width / 2, y: rect.top + window.scrollY + rect.height });
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-black text-white">
      {/* Left side - Band Logo */}
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image src="/logo.png" alt="Band Logo" className="w-25 h-12" width={140} height={25}/>
        </Link>
      </div>

      {/* Right side - Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 ml-auto pr-9">
        <Link href="/about" className="hover:text-yellow font-highway">About us</Link>
        <Link href="/shows" className="hover:text-yellow font-highway">Shows</Link>
        <Link href="/songs" className="hover:text-yellow">Songs</Link>
        <Link href="/pictures" className="hover:text-yellow">Pictures</Link>
        <Link href="/merch" className="hover:text-yellow">Merch</Link>
        <Link href="/book-us" className="hover:text-yellow">Book Us</Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <FiX className="w-8 h-8 text-white" />
          ) : (
            <FiMenu className="w-8 h-8 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-black text-white md:hidden z-50`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link href="/about" onClick={closeMenu} className="hover:text-yellow font-highway">About us</Link>
          <Link href="/shows" onClick={closeMenu} className="hover:text-yellow font-highway">Shows</Link>
          <Link href="/songs" onClick={closeMenu} className="hover:text-yellow">Songs</Link>
          <Link href="/pictures" onClick={closeMenu} className="hover:text-yellow">Pictures</Link>
          <Link href="/merch" onClick={closeMenu} className="hover:text-yellow">Merch</Link>
          <Link href="/book-us" onClick={closeMenu} className="hover:text-yellow">Book Us</Link>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 py-4">
          <button onClick={(e) => handleComingSoon(e, "Spotify")}>
            <FaSpotify className="w-6 h-6 text-green hover:text-yellow" />
          </button>
          <button onClick={(e) => handleComingSoon(e, "Apple Music")}>
            <SiApplemusic className="w-6 h-6 text-[#fc3c44] hover:text-yellow" />
          </button>
          <a href="https://www.instagram.com/theparkwaysband/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-[#c13584] hover:text-yellow" />
          </a>
          <a href="https://www.youtube.com/channel/UCC8OzABpYTa1goeiMBcf6lQ" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="w-6 h-6 text-[#CD201F] hover:text-yellow" />
          </a>
        </div>
      </div>

      {/* Right side - Social Media Links for Desktop */}
      <div className="hidden md:flex space-x-4 ml-4">
        <button onClick={(e) => handleComingSoon(e, "Spotify")}>
          <FaSpotify className="w-6 h-6 text-green hover:text-yellow" />
        </button>
        <button onClick={(e) => handleComingSoon(e, "Apple Music")}>
          <SiApplemusic className="w-6 h-6 text-[#fc3c44] hover:text-yellow" />
        </button>
        <a href="https://www.instagram.com/theparkwaysband/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-6 h-6 text-[#c13584] hover:text-yellow" />
        </a>
        <a href="https://www.youtube.com/channel/UCC8OzABpYTa1goeiMBcf6lQ" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="w-6 h-6 text-[#CD201F] hover:text-yellow" />
        </a>
      </div>

      {/* Message Bubble */}
      {showMessage && (
        <div className="absolute bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg" style={{ top: messagePosition.y, left: messagePosition.x, transform: 'translateX(-50%)', zIndex: 100 }}>
          {message}
        </div>
      )}
    </nav>
  );
}
