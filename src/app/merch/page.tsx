"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/common/components/ui/button";
import { Card, CardContent } from "@/common/components/ui/card";
import { Badge } from "@/common/components/ui/badge";
import { ArrowRight, ExternalLink, ShoppingBag, Info, Tag, Truck, CreditCard, CalendarDays, Store, Mail, Phone } from "lucide-react";
import { Separator } from "@/common/components/ui/separator";

export default function Merch() {
  // Set the scroll variable for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty("--scroll", window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Merchandise items data
  const merchItems = [
    {
      id: 1,
      name: "Original Shirt",
      description: "",
      price: "$20",
      image: "/merch/tour shirt.webp",
    },
    {
      id: 2,
      name: "Kelly Green Shirt",
      description: "",
      price: "$20",
      image: "/merch/KellyGreen.webp",
    },
    {
      id: 3,
      name: "Parkways Sticker",
      description: "",
      price: "Free with Purchase",
      image: "/merch/Stickers.webp",
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 md:pt-8">
      {/* Hero Section with Parallax */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/gallery/Other/Post RecordingCrop.webp')",
            transform: "translateY(calc(var(--scroll) * 0.3px))",
            filter: "brightness(0.4) contrast(1.1)"
          }}
        />
        
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/noise.webp')",
            backgroundRepeat: "repeat"
          }}
        />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
        
        {/* Hero content */}
        <div className="relative container mx-auto px-4 z-10 text-center">
          <Badge 
            variant="outline" 
            className="mb-6 border-secondary/40 bg-black/50 backdrop-blur-sm py-2 px-4 text-secondary"
          >
            OFFICIAL MERCHANDISE
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            The Parkways <span className="text-secondary">Merch</span>
          </h1>
          {/* <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mt-4">
            Take home a piece of The Parkways to remember the show
          </p> */}
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-8 w-8 text-white/70 rotate-90" />
        </div>
      </section>

      {/* Merchandise Section */}
      <section className="relative py-20 bg-gradient-to-b from-zinc-950 to-black">
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-60"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <p className="text-lg text-gray-300">
              Show your support for The Parkways. 
              All items are available at our live shows, or you can contact us directly to purchase.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {merchItems.map(item => (
              <Card 
                key={item.id}
                className="bg-zinc-900/50 border-white/5 overflow-hidden group hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5"
              >
                {/* Price badge - now outside of the image container */}
                <div className="relative">
                  <Badge 
                    className="absolute right-4 top-4 z-10 bg-secondary text-black border-0 shadow-sm shadow-black/20 font-bold"
                  >
                    {item.price}
                  </Badge>
                
                  <div className="aspect-square overflow-hidden bg-black flex items-center justify-center p-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                
                <CardContent className="p-2 md:p-6 text-center">
                  <h3 className="text-xl font-bold group-hover:text-secondary transition-colors duration-300 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  
                  <div className="flex justify-center items-center border-t border-white/10 pt-4 mt-2">
                    <p className="text-xs text-gray-500">Available at shows or by request</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Enhanced How to Purchase Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">How to Get Your Parkways Merch</h2>
              {/* <p className="text-gray-400 mt-2">Rock our official merchandise at our shows</p> */}
            </div>
            
            <div>
              {/* At Shows Option */}
              <div className="bg-zinc-900/70 rounded-xl p-6 border border-white/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Store className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">At Our Shows</h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                  The best way to get your hands on our merchandise is to come see us live! We bring a selection of items to every show.
                </p>
                
                {/* <ul className="space-y-2 mb-5">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-gray-300">Immediate pickup - wear it during the show!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-gray-300">Cash or card accepted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-gray-300">Meet the band and get your merch signed</span>
                  </li>
                </ul> */}
                
                <Button 
                  asChild
                  variant="default"
                  className="w-full bg-primary hover:bg-primary/90 text-black"
                >
                  <Link href="/bookings">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    View Upcoming Shows
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Additional Info */}
            {/* <div className="mt-10 p-6 bg-zinc-900/30 rounded-lg border border-white/5">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <Info className="h-5 w-5 mr-2 text-primary" />
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-1">What sizes are available?</h4>
                  <p className="text-gray-400 text-sm">T-shirts are available in sizes S, M, L, XL, and XXL.</p>
                </div>
                
                <Separator className="bg-white/10" />
                
                <div>
                  <h4 className="font-medium text-white mb-1">Is merchandise only available at shows?</h4>
                  <p className="text-gray-400 text-sm">Yes, we currently only sell our merchandise in person at our shows. Come see us live to grab your Parkways gear!</p>
                </div>
                
                <Separator className="bg-white/10" />
                
                <div>
                  <h4 className="font-medium text-white mb-1">Got a question about merch?</h4>
                  <p className="text-gray-400 text-sm flex flex-wrap items-center gap-x-2">
                    <span>Email us at:</span>
                    <a 
                      href="mailto:theparkwaysband@gmail.com" 
                      className="text-primary hover:underline inline-flex items-center"
                    >
                      theparkwaysband@gmail.com
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                    <span>or call:</span>
                    <a 
                      href="tel:+19734493914" 
                      className="text-primary hover:underline inline-flex items-center"
                    >
                      (973) 449-3914
                      <Phone className="h-3 w-3 ml-1" />
                    </a>
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
