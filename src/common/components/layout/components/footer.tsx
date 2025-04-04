import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Facebook, Mail, MapPin, ArrowUpRight, Phone, ExternalLink } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Button } from "@/common/components/ui/button";

// Social media link component with proper Next.js external link handling
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-11 h-11 rounded-full bg-zinc-900 hover:bg-primary text-gray-300 hover:text-black transition-all duration-300 shadow-sm shadow-black/20"
    aria-label={label}
  >
    {icon}
  </Link>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.instagram.com/theparkwaysband",
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram"
    },
    {
      href: "https://www.tiktok.com/@the_parkways?is_from_webapp=1&sender_device=pc",
      icon: <FaTiktok className="h-4 w-4" />,
      label: "TikTok"
    },
    {
      href: "https://www.youtube.com/@TheParkwaysBand",
      icon: <Youtube className="h-5 w-5" />,
      label: "YouTube"
    },
    {
      href: "https://www.facebook.com/theparkways",
      icon: <Facebook className="h-5 w-5" />,
      label: "Facebook"
    }
  ];

  return (
    <footer className="bg-zinc-950 border-t border-white/5 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary via-secondary to-transparent opacity-60"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-5">
            <div className="flex flex-col space-y-6">
              {/* Logo and band name */}
              <Link href="/" className="inline-flex items-center gap-4 group transition-all duration-300">
                <div className="relative w-16 h-16 overflow-hidden rounded-lg transform group-hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                  <Image
                    src="/logo.png"
                    alt="The Parkways Logo"
                    fill
                    className="object-contain p-1"
                    sizes="(max-width: 640px) 48px, 64px"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    THE PARKWAYS
                  </h2>
                  <span className="text-xs md:text-sm text-gray-400 tracking-widest">SOUTH JERSEY ROCK & ROLL</span>
                </div>
              </Link>

              {/* Description */}
              {/* <p className="text-gray-300 leading-relaxed">
                South Jersey's premier rock and alternative cover band bringing energy and passion to every performance. 
                Available for bookings at venues, private events, and festivals throughout the region.
              </p> */}

              {/* Social icons */}
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <SocialLink
                    key={social.label}
                    href={social.href}
                    icon={social.icon}
                    label={social.label}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Secondary content */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Links section */}
              <div className="flex flex-col space-y-6">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                  <div className="h-5 w-1.5 bg-primary mr-3 rounded-sm"></div>
                  QUICK LINKS
                </h3>
                <nav>
                  <ul className="space-y-4 grid grid-cols-2">
                    {[
                      { name: "Home", href: "/" },
                      { name: "Shows", href: "/shows" },
                      { name: "Music", href: "/music" },
                      { name: "Gallery", href: "/gallery" },
                      { name: "Merch", href: "/merch" },
                      { name: "About", href: "/about" },
                      { name: "Electronic Press Kit", href: "/EPK" },
                    ].map((link) => (
                      <li key={link.name} className="col-span-1">
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group text-base md:text-lg"
                        >
                          <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Contact section */}
              <div className="flex flex-col space-y-6">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                  <div className="h-5 w-1.5 bg-primary mr-3 rounded-sm"></div>
                  GET IN TOUCH
                </h3>

                <ul className="space-y-6">
                  <li className="flex text-gray-300 group">
                    <div className="mt-0.5 mr-4">
                      <div className="p-2 rounded-full bg-zinc-900 text-primary group-hover:bg-primary/10 transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-white text-lg mb-1">Email</p>
                      <a
                        href="mailto:theparkwaysband@gmail.com"
                        className="hover:text-primary transition-colors duration-200 flex items-center group"
                      >
                        theparkwaysband@gmail.com
                        <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </li>

                  <li className="flex text-gray-300 group">
                    <div className="mt-0.5 mr-4">
                      <div className="p-2 rounded-full bg-zinc-900 text-primary group-hover:bg-primary/10 transition-colors">
                        <Phone className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-white text-lg mb-1">Call Us</p>
                      <a
                        href="tel:+19734493914"
                        className="hover:text-primary transition-colors duration-200 flex items-center group"
                      >
                        (973) 449-3914
                        <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </li>

                  <li className="flex text-gray-300 group">
                    <div className="mt-0.5 mr-4">
                      <div className="p-2 rounded-full bg-zinc-900 text-primary group-hover:bg-primary/10 transition-colors">
                        <MapPin className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-white text-lg mb-1">Location</p>
                      <p>Haddonfield, NJ</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Book now call-to-action */}
        <div className="mt-6 pt-8 pb-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-start gap-6">
          <p className="text-lg text-white font-medium my-auto">
            Ready to book <span className="text-primary">The Parkways</span> for your next event?
          </p>
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

        {/* Copyright & Developer Credit */}
        <div className="pt-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} The Parkways. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
