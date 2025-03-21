"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Ticket, 
  ArrowRight, 
  ExternalLink, 
  ChevronRight 
} from 'lucide-react';
import { Button } from "@/common/components/ui/button";
import { Badge } from "@/common/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card";

// Define the show type for better type safety
type Show = {
  date: string;
  venue: string;
  ticketLink: string;
  image: string;
  headline: string;
  time?: string; // Optional time field extracted from date string if available
};

// Shows data array
const shows: Show[] = [
  {
    date: "March 9, 2025",
    venue: "Gold Sounds, Brooklyn, NY",
    ticketLink: "https://dice.fm/event/7dndp9-mary-hail-the-parkways-metasin-9th-mar-gold-sounds-new-york-tickets?lng=en-US",
    image: "/show_images/gold_march_9.avif",
    headline: "Gold Sounds",
  },
  {
    date: "March 15, 2025",
    venue: "Kings Road Brewery, Haddonfield, NJ",
    ticketLink: "",
    image: "/show_images/kingsRoad.jpeg",
    headline: "Kings Road St Patrick's Day",
  },
  // {
  //   date: "March 29th, 2025",
  //   venue: "Fat Lady Brewing, Manayunk",
  //   ticketLink: "",
  //   image: "/show_images/fatLady.jpeg",
  //   headline: "Fat Lady Brewing in Manayunk",
  // },
  {
    date: "April 12, 2025",
    venue: "Ortleib's, Philadelphia, PA",
    ticketLink: "https://example.com/tickets/april-12",
    image: "/show_images/Ortliebs.jpg",
    headline: "Ortlieb's",
  },
  {
    date: "6pm August 2, 2025",
    venue: "Musikfest (Plaza Tropical), Bethlehem, PA",
    ticketLink: "",
    image: "/show_images/musikfest.jpeg",
    headline: "Plaza Tropical at Musikfest",
  },
];

export default function Shows() {
  // State to track if we're scrolling for parallax effect
  const [scrollY, setScrollY] = useState(0);

  // Set the scroll variable for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      document.documentElement.style.setProperty("--scroll", window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Process shows data to extract time if included in date string
  const processedShows = shows.map(show => {
    // Check if the date string includes a time (like "6pm August 2, 2025")
    const timeMatch = show.date.match(/^(\d+(?::\d+)?(?:am|pm))\s+(.+)$/i);
    
    if (timeMatch) {
      // If time is part of the date string, separate it
      const [_, time, dateStr] = timeMatch;
      return { ...show, date: dateStr, time };
    }
    
    return show;
  });

  // Group shows by month for better organization
  const showsByMonth: Record<string, Show[]> = {};
  processedShows.forEach(show => {
    const date = new Date(show.date);
    const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    
    if (!showsByMonth[monthYear]) {
      showsByMonth[monthYear] = [];
    }
    
    showsByMonth[monthYear].push(show);
  });
  
  // Sort months chronologically
  const sortedMonths = Object.keys(showsByMonth).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden pt-14 md:pt-8">
      {/* Hero Section with Parallax */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/gallery/Bowery.jpg')", // You may need to add this image
            transform: `translateY(calc(${scrollY * 0.3}px))`,
            filter: "brightness(0.4) contrast(1.1)"
          }}
        />
        
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/noise.jpg')",
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
            className="mb-6 border-primary/40 bg-black/50 backdrop-blur-sm py-2 px-4 text-primary"
          >
            LIVE PERFORMANCES
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Upcoming <span className="text-primary">Shows</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mt-4">
            Catch The Parkways live at venues across New Jersey, New York, and Pennsylvania
          </p>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-8 w-8 text-white/70 rotate-90" />
        </div>
      </section>

      {/* Shows Section */}
      <section className="relative py-16 bg-gradient-to-b from-zinc-950 to-black">
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-lg text-gray-300">
              New shows are always being added—check back soon for more dates or 
              <Link href="/contact" className="text-primary hover:text-primary/80 hover:underline mx-1">
                contact us
              </Link>
              for booking inquiries.
            </p>
          </div>
          
          {/* Shows grouped by month */}
          <div className="space-y-16">
            {sortedMonths.map(monthYear => (
              <div key={monthYear} className="relative">
                {/* Month header */}
                <div className="flex items-center mb-8 sticky top-20 z-10 bg-black/80 backdrop-blur-sm py-4 -mx-4 px-4 border-b border-white/5">
                  <Calendar className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold">{monthYear}</h2>
                </div>
                
                {/* Shows for this month */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {showsByMonth[monthYear].map((show, index) => {
                    // Extract day from the date
                    const date = new Date(show.date);
                    const day = date.toLocaleDateString('en-US', { day: 'numeric' });
                    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
                    
                    return (
                      <Card 
                        key={index} 
                        className="bg-zinc-900/50 border-white/5 overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                      >
                        {/* Image wrapper with overlay */}
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={show.image}
                            alt={`${show.headline} at ${show.venue}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                          
                          {/* Date badge */}
                          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 group-hover:border-primary/40 transition-all duration-300">
                            <div className="flex flex-col items-center px-3 py-2">
                              <span className="text-xs font-medium text-gray-400">{dayOfWeek}</span>
                              <span className="text-2xl font-bold">{day}</span>
                            </div>
                          </div>
                          
                          {/* Ticket status */}
                          {show.ticketLink ? (
                            <Badge 
                              className="absolute top-4 right-4 bg-primary/80 text-black hover:bg-primary transition-colors duration-300"
                            >
                              Tickets Available
                            </Badge>
                          ) : (
                            <Badge 
                              variant="outline"
                              className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border-white/20"
                            >
                              Free Entry
                            </Badge>
                          )}
                        </div>
                        
                        {/* Show details */}
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                            {show.headline}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-1 text-gray-400">
                            <MapPin className="h-4 w-4 inline-block" />
                            {show.venue}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent>
                          {/* Show time if available */}
                          {show.time && (
                            <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                              <Clock className="h-4 w-4 text-primary/70" />
                              {show.time}
                            </div>
                          )}
                          
                          <div className="text-sm text-gray-300">
                            <p>Join us for a night of rock and roll at {show.headline.split(' at ')[0]}!</p>
                          </div>
                        </CardContent>
                        
                        <CardFooter className="pt-0">
                          {show.ticketLink ? (
                            <Button
                              asChild
                              variant="default"
                              className="w-full bg-primary hover:bg-primary/90 text-black"
                            >
                              <a 
                                href={show.ticketLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                <Ticket className="mr-2 h-4 w-4" />
                                Get Tickets
                                <ExternalLink className="ml-2 h-3 w-3 -mt-1" />
                              </a>
                            </Button>
                          ) : (
                            <Button
                              asChild
                              variant="outline"
                              className="w-full border-white/20 hover:bg-white/5"
                            >
                              <Link href="/contact">
                                More Info
                                <ChevronRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          {/* No Shows Message */}
          {sortedMonths.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-6 bg-zinc-900 rounded-full flex items-center justify-center">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No upcoming shows</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                We're currently planning our next tour dates. Please check back soon or subscribe to our newsletter.
              </p>
              <div className="mt-8">
                <Button 
                  asChild
                  variant="default"
                  className="bg-primary hover:bg-primary/90 text-black"
                >
                  <Link href="/contact">
                    Contact for Booking
                  </Link>
                </Button>
              </div>
            </div>
          )}
          
          {/* Back to Top Button */}
          <div className="mt-16 text-center">
            <Button
              variant="ghost"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-primary hover:text-primary/80 hover:bg-primary/5 group"
            >
              Back to Top
              <ArrowRight className="ml-1 h-4 w-4 rotate-270 group-hover:-rotate-90 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
