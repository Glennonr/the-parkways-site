"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/common/components/ui/button";
import { Card, CardContent } from "@/common/components/ui/card";
import { Badge } from "@/common/components/ui/badge";
import { Github, Music, MapPin, Mail, ArrowRight, ExternalLink } from "lucide-react";

// Band member type definition
type BandMember = {
  name: string;
  role: string;
  image: string;
  quote?: string;
};

export default function AboutUs() {
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

  // Band members data
  const bandMembers: BandMember[] = [
    {
      name: "John Dwyer",
      role: "Lead Vocals and Guitar",
      image: "/band_members/John2.jpeg",
      quote: "Music isn't what I do, it's who I am."
    },
    {
      name: "Jimmy Peterman",
      role: "Bass",
      image: "/band_members/Jimmy.jpg",
      quote: "I keep the rhythm flowing and the grooves moving."
    },
    {
      name: "Sam Decencio",
      role: "Guitar",
      image: "/band_members/Sam.jpg",
      quote: "Every chord tells a story."
    },
    {
      name: "Greg Eisenhower",
      role: "Drums",
      image: "/band_members/Greg.jpg",
      quote: "The heartbeat of The Parkways."
    },
    // {
    //   name: "Alison Nicolosi",
    //   role: "Tenor Saxophone",
    //   image: "/band_members/Alison.png",
    //   quote: "Adding that perfect brass flavor to our sound."
    // },
    // {
    //   name: "Richie Glennon",
    //   role: "Alto Saxophone",
    //   image: "/band_members/Richie.JPG",
    //   quote: "Jersey born, musically driven."
    // },
    // {
    //   name: "Jack Flanagan",
    //   role: "Keyboard",
    //   image: "/band_members/Flan.png",
    //   quote: "Adding the melodic layers that bring it all together."
    // },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-14 md:pt-8">
      {/* Hero Section with Parallax */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/gallery/Bowery Electric/Bowery.jpg')",
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
            className="mb-6 border-primary/40 bg-black/50 backdrop-blur-sm py-2 px-4 text-primary animate-fade-in"
          >
            OUR STORY
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Get to Know <span className="text-primary">The Parkways</span>
          </h1>
          {/* <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mt-4">
            South Jersey's premier rock and alternative band bringing energy and passion to every performance
          </p> */}
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-8 w-8 text-white/70 rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 bg-zinc-950">
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section with cards effect */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/Gallery/Kings Road/BeatlesRooftop.webp"
                  alt="The Parkways Band"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
              </div>
              
              {/* Tags overlaying the image */}
              {/* <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                <span className="bg-black/70 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Rock
                </span>
                <span className="bg-black/70 backdrop-blur-sm text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  Alternative
                </span>
                <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  South Jersey
                </span>
              </div> */}
            </div>
            
            {/* Text Section */}
            <div className="space-y-8">
              <div>
                {/* <Badge variant="outline" className="mb-2 border-primary/40 text-primary">Our Identity</Badge> */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About The Parkways</h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Think of The Parkways as <span className="text-primary font-medium">Springsteen + The Killers + Pork Roll + Egg + Cheese.
                    A little Strokesy and a little Oasish.</span> 
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                    Our setlists span all decades of rock from the 50s to today—check out our songs page to see for yourself. 
                    Plus, our debut 5-song EP is recorded and dropping soon!
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We love playing bars and venues that know how to have a good time. If you're looking for a band 
                    to bring the energy and keep the crowd engaged, The Parkways are ready to take the stage. 
                    Let's make it a night to remember!
                  </p>
                </div>
              </div>
              
              {/* Quick Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Based in</h3>
                    <p className="text-base font-medium">Haddonfield, NJ</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary/10 rounded-full">
                    <Music className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Genre</h3>
                    <p className="text-base font-medium">Rock & Roll</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  asChild
                  variant="default"
                  className="bg-primary hover:bg-primary/90 text-black"
                >
                  <Link href="/music">
                    <Music className="mr-2 h-4 w-4" />
                    Listen to Our Music
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  className="border-white/20 hover:bg-white/5"
                >
                  <Link href="/shows">
                    View Upcoming Shows
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Band Members Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-black relative">
        {/* Decorative elements */}
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-secondary/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge 
              variant="outline" 
              className="mb-2 border-primary/40 text-primary"
            >
              The Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet The Band</h2>
            {/* <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              Each member brings their unique talent and passion to create our distinctive South Jersey sound.
            </p> */}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {bandMembers.map((member, index) => (
              <Card 
                key={member.name} 
                className="bg-zinc-900/50 border-white/5 overflow-hidden group hover:border-primary/20 transition-all duration-300 py-0"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Member quote on hover */}
                  {/* {member.quote && (
                    <div className="absolute inset-0 flex items-center justify-center px-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-center text-white italic font-medium">
                        "{member.quote}"
                      </p>
                    </div>
                  )} */}
                </div>
                
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        {/* Decorative background */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/logo.png')",
            backgroundSize: "50%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right -10%",
            filter: "blur(3px)"
          }}
        />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge 
              variant="outline" 
              className="mb-6 border-primary/40 text-primary"
            >
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Want to Learn More?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Inquire about booking us for your next event or just say hello! We'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-bold py-6 px-8 rounded-md transition-all duration-300"
              >
                <Link href="/bookings">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/5 py-6 px-8"
              >
                <Link href="/shows">
                  Check Our Schedule
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
