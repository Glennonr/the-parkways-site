"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/common/components/ui/button";
import { 
  Instagram, 
  Music, 
  Youtube,
  Facebook, 
  Ticket, 
  ArrowRight,
  ChevronDown,
  Calendar,
  MapPin,
  Play,
  Clock,
  ChevronRight,
  Mail,
  Star,
  MessageSquareQuote,
  Camera,
  Pause,
  ShoppingBag
} from "lucide-react";
import { FaTiktok, FaSpotify, FaApple } from "react-icons/fa";
import { Badge } from "@/common/components/ui/badge";
import { Card, CardContent } from "@/common/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, 
} from "@/common/components/ui/carousel";
import { Input } from "@/common/components/ui/input";
import { Separator } from "@/common/components/ui/separator";

// Types for our data
type UpcomingShow = {
  id: number;
  date: string;
  venue: string;
  location: string;
  image: string;
  ticketLink?: string;
};

type FeaturedTrack = {
  id: number;
  title: string;
  length: string;
  coverArt?: string;
  audioPreview?: string;
};

export default function Home() {
  const [message, setMessage] = useState("");
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const audioRefs = useRef<{[key: number]: HTMLAudioElement | null}>({});

  // Set the scroll variable only on the client side
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

  const handleComingSoon = (platform: string) => {
    setMessage(`${platform} coming soon!`);
    setActiveButton(platform);
    setTimeout(() => {
      setMessage("");
      setActiveButton(null);
    }, 2000);
  };

  // Toggle audio play/pause
  const togglePlay = (trackId: number) => {
    const audioElement = audioRefs.current[trackId];
    
    if (!audioElement) return;
    
    if (isPlaying === trackId) {
      audioElement.pause();
      setIsPlaying(null);
    } else {
      // Pause any currently playing audio
      if (isPlaying !== null && audioRefs.current[isPlaying]) {
        audioRefs.current[isPlaying]?.pause();
      }
      
      audioElement.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
      setIsPlaying(trackId);
    }
  };

  const socialLinks = [  
    { 
      name: "Instagram", 
      link: "https://www.instagram.com/theparkwaysband", 
      icon: <Instagram className="h-5 w-5 mr-2" /> 
    },
    { 
      name: "Spotify", 
      action: () => handleComingSoon("Spotify"), 
      icon: <FaSpotify className="h-5 w-5 mr-2" /> 
    },
    { 
      name: "Apple Music", 
      action: () => handleComingSoon("Apple Music"), 
      icon: <FaApple className="h-5 w-5 mr-2" /> 
    },
    { 
      name: "TikTok", 
      link: "https://www.tiktok.com/@the_parkways?is_from_webapp=1&sender_device=pc", 
      icon: <FaTiktok className="h-5 w-5 mr-2" /> 
    },
    { 
      name: "YouTube", 
      link: "https://www.youtube.com/@TheParkwaysBand", 
      icon: <Youtube className="h-5 w-5 mr-2" /> 
    },
    { 
      name: "Facebook", 
      link: "https://www.facebook.com/theparkways", 
      icon: <Facebook className="h-5 w-5 mr-2" /> 
    },
  ];

  // Upcoming shows data
  const upcomingShows: UpcomingShow[] = [
    // {
    //   id: 1,
    //   date: "March 9, 2025",
    //   venue: "Gold Sounds",
    //   location: "Brooklyn, NY",
    //   image: "/show_images/gold_march_9.avif",
    //   ticketLink: "https://dice.fm/event/7dndp9-mary-hail-the-parkways-metasin-9th-mar-gold-sounds-new-york-tickets?lng=en-US"
    // },
    // {
    //   id: 2,
    //   date: "March 15, 2025",
    //   venue: "Kings Road Brewery",
    //   location: "Haddonfield, NJ", 
    //   image: "/show_images/kingsRoad.jpeg"
    // },
    {
      id: 3,
      date: "April 12, 2025",
      venue: "Ortlieb's",
      location: "Philadelphia, PA",
      image: "/show_images/Ortliebs2.jpeg",
      ticketLink: "https://example.com/tickets/april-12"
    },
    {
      id: 4,
      date: "August 2, 2025",
      venue: "Musikfest",
      location: "Bethlehem, PA",
      image: "/show_images/musikfest.jpeg",
      ticketLink: ""
    }
  ];

  // Get initials from track title for placeholder
  const getInitials = (title: string): string => {
    return title
      .split(' ')
      .filter(word => /^[a-zA-Z]/.test(word)) // Filter out words that don't start with a letter
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  // Featured tracks data
  const featuredTracks: FeaturedTrack[] = [
    {
      id: 1,
      title: "Gotta Be Taken (Demo)",
      length: "2:59",
      audioPreview: "/audio/Gotta-Be-Taken-Demo.mp3"
    },
    {
      id: 2,
      title: "Waiting Again (Demo)",
      length: "2:38",
      audioPreview: "/audio/Waiting-Again-Demo.mp3"
    },
    {
      id: 3,
      title: "Middle Distance Baby (Demo)",
      length: "3:07",
      audioPreview: "/audio/Middle-Distance-Baby-Demo.mp3"
    }
  ];

  // Gallery preview images
  const galleryPreviews = [
    "/gallery/Bowery.jpg",
    "/gallery/Ortliebs.jpeg",
    "/gallery/Cheers.jpeg",
    "/gallery/Smiles.JPG",
    "/gallery/Brewers2.jpeg",
    "/gallery/BackToBack.jpeg"
  ];

  // Merchandise items data
  const merchItems = [
    {
      id: 1,
      name: "Original Tour Shirt",
      image: "/merch/tour shirt.webp",
      price: "$20"
    },
    {
      id: 2,
      name: "Kelly Green Shirt",
      image: "/merch/KellyGreen.webp",
      price: "$20"
    },
    {
      id: 3,
      name: "Parkways Sticker",
      image: "/merch/Stickers.webp",
      price: "Free with Purchase"
    }
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/gallery/Bowery.jpg')",
            transform: "translateY(calc(var(--scroll) * 0.5px))",
            transition: "transform 0.1s linear",
            filter: "brightness(0.6) contrast(1.1)"
          }}
        />
        
        {/* Overlay with noise texture */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/noise.jpg')",
            backgroundRepeat: "repeat"
          }}
        />
        
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center w-full h-full bg-black/40 text-center px-4">
          <div className="animate-fadeIn">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 font-display tracking-wider">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">THE PARKWAYS</span>
            </h1>
            <p className="mt-2 text-xl md:text-2xl font-medium text-white/90 tracking-wide mb-8">
              SOUTH JERSEY ROCK AND ROLL
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Button 
                asChild
                size="sm" 
                variant="default" 
                className="h-10 md:rounded-md md:px-6 md:py-6 md:has-[>svg]:px-4 group bg-primary hover:bg-primary/90 text-lg rounded-md transition-all duration-300 text-black"
              >
                <Link href="/shows">
                  <Ticket className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Upcoming Shows
                </Link>
              </Button>
              
              <Button 
                asChild
                size="sm" 
                variant="outline" 
                className="h-10 md:rounded-md md:px-6 md:py-6 md:has-[>svg]:px-4 group bg-black/30 backdrop-blur-sm border-white/20 hover:bg-black/50 text-white hover:text-secondary text-lg rounded-md transition-all duration-300"
              >
                <Link href="/music">
                  <Music className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Listen Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* Upcoming Shows Section */}
      <section className="w-full bg-zinc-950 py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-primary/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-10">
            <Badge 
              variant="outline" 
              className="mb-2 border-primary/40 text-primary"
            >
              LIVE PERFORMANCES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Upcoming Shows</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Catch The Parkways live at venues across New Jersey, New York, and Pennsylvania
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingShows.map(show => {
              // Extract date parts
              const date = new Date(show.date);
              const day = date.toLocaleDateString('en-US', { day: 'numeric' });
              const month = date.toLocaleDateString('en-US', { month: 'short' });
              
              return (
                <Card 
                  key={show.id}
                  className="bg-zinc-900/50 border-white/5 overflow-hidden group hover:border-primary/30 transition-all duration-300 py-0"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={show.image}
                      alt={`${show.venue}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    
                    {/* Date overlay */}
                    <div className="absolute top-4 left-4 flex flex-col items-center p-2 rounded-lg bg-black/70 backdrop-blur-sm border border-white/10 group-hover:border-primary/30 transition-all">
                      <span className="text-sm text-primary">{month}</span>
                      <span className="text-xl font-bold">{day}</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {show.venue}
                    </h3>
                    
                    <div className="flex items-center gap-1 text-gray-400 text-sm mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{show.location}</span>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      {show.ticketLink ? (
                        <Button 
                          asChild
                          variant="default" 
                          size="sm"
                          className="bg-primary text-black hover:bg-primary/90 w-full"
                        >
                          <a 
                            href={show.ticketLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Get Tickets
                          </a>
                        </Button>
                      ) : (
                        <Button 
                          asChild
                          variant="outline" 
                          size="sm"
                          className="border-white/20 hover:bg-white/5 w-full"
                        >
                          <span>
                            Free Entry
                          </span>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              asChild
              variant="link" 
              className="text-primary hover:text-primary/90 group"
            >
              <Link href="/shows">
                View all upcoming shows
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Music Section */}
      <section className="w-full bg-black py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge 
              variant="outline" 
              className="mb-2 border-secondary/40 text-secondary"
            >
              OUR MUSIC
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Tracks</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Preview tracks from our upcoming EP, dropping soon on all major streaming platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTracks.map(track => {
              // Generate initials for fallback
              const initials = getInitials(track.title);
              const gradientClass = track.id % 2 === 0 
                ? "from-primary/70 to-primary/30" 
                : "from-secondary/70 to-secondary/30";
                
              return (
                <Card 
                  key={track.id}
                  className="bg-zinc-900/50 border-white/5 overflow-hidden transition-all duration-300 hover:border-secondary/30 pt-0"
                >
                  <div className="relative aspect-square overflow-hidden group">
                    {/* Fallback element that will show if image fails to load */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} flex items-center justify-center z-0`}>
                      <span className="text-5xl md:text-6xl font-bold text-black/80">
                        {initials}
                      </span>
                      
                      {/* Decorative vinyl record effect */}
                      <div className="absolute w-3/5 h-3/5 border-4 border-black/10 rounded-full flex items-center justify-center">
                        <div className="w-1/3 h-1/3 bg-black/20 rounded-full">
                          <div className="w-1/2 h-1/2 bg-black/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Actual image that will hide the fallback if it loads successfully */}
                    {track.coverArt ? (
                      <Image
                        src={track.coverArt}
                        alt={track.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 z-10 relative"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    ) : null}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-20"></div>
                    
                    {/* Play button - moved to bottom right */}
                    <button 
                      className="absolute bottom-3 right-3 z-30 group"
                      onClick={() => track.audioPreview ? togglePlay(track.id) : null}
                      aria-label={isPlaying === track.id ? "Pause" : "Play"}
                    >
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        transition-all duration-300 transform
                        ${isPlaying === track.id 
                          ? 'bg-primary text-black shadow-lg shadow-primary/30' 
                          : 'bg-black/70 group-hover:bg-primary/90 group-hover:scale-110 text-white group-hover:text-black'}
                      `}>
                        {isPlaying === track.id ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </div>
                    </button>
                    
                    {/* Hidden audio element for preview */}
                    {track.audioPreview && (
                      <audio 
                        ref={el => { audioRefs.current[track.id] = el }} 
                        src={track.audioPreview}
                        onEnded={() => setIsPlaying(null)}
                      />
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">{track.title}</h3>
                    
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-gray-400 text-sm flex items-center">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        {track.length}
                      </span>
                      
                      <Badge variant="outline" className="text-secondary border-secondary/30">
                        Coming Soon
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Button
              asChild
              variant="default"
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-black"
            >
              <Link href="/music">
                <Music className="mr-2 h-5 w-5" />
                Explore Our Full Catalog
              </Link>
            </Button>
          </div>
        </div>
      </section>



      {/* Gallery Preview Section */}
      <section className="w-full bg-black pb-16 pt-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge 
              variant="outline" 
              className="mb-2 border-secondary/40 text-secondary"
            >
              PHOTO GALLERY
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Behind The Scenes</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Glimpses of our performances and backstage moments
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
            {galleryPreviews.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-square overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Gallery preview ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  {/* <Camera className="h-8 w-8 text-white" /> */}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              asChild
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-black hover:opacity-90"
            >
              <Link href="/gallery">
                View Full Gallery
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Merchandise Section */}
      <section className="w-full bg-zinc-950 py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-secondary/5 to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <Badge 
              variant="outline" 
              className="mb-2 border-secondary/40 text-secondary"
            >
              MERCHANDISE
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Take The Parkways Home</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Show your support with official Parkways merchandise, available at shows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {merchItems.map(item => (
              <Card 
                key={item.id}
                className="bg-zinc-900/50 border-white/5 overflow-hidden transition-all duration-300 hover:border-secondary/30 p-0"
              >
                <div className="relative aspect-square overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                
                <CardContent className="p-4 text-center">
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-secondary font-medium">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button
              asChild
              variant="default"
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-black"
            >
              <Link href="/merch">
                <ShoppingBag className="mr-2 h-5 w-5" />
                View All Merchandise
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Book Now CTA Section (replacing testimonials) */}
      <section className="w-full bg-zinc-950 py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-20"></div>
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{
            backgroundImage: "url('/gallery/Smiles.JPG')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            filter: "blur(2px)"
          }}
        />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto bg-zinc-900/70 p-8 md:p-12 rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="text-center mb-8">
              <Badge 
                variant="outline" 
                className="mb-4 border-primary/40 text-primary"
              >
                BOOKING
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Rock Your Event?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                The Parkways are available for bars, breweries, private events, festivals, roadside attractions and Bar Mitzvahs throughout New Jersey, Pennsylvania, and New York.
              </p>

{/*               
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-black/30 rounded-lg p-6 backdrop-blur-sm">
                  <Calendar className="h-8 w-8 text-primary mb-3 mx-auto" />
                  <h3 className="font-bold text-lg mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-400 text-sm">Weekend and weekday availability for your convenience</p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-6 backdrop-blur-sm">
                  <Music className="h-8 w-8 text-primary mb-3 mx-auto" />
                  <h3 className="font-bold text-lg mb-2">Customized Setlists</h3>
                  <p className="text-gray-400 text-sm">Tailored to your venue's atmosphere and audience</p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-6 backdrop-blur-sm">
                  <Ticket className="h-8 w-8 text-primary mb-3 mx-auto" />
                  <h3 className="font-bold text-lg mb-2">Professional Experience</h3>
                  <p className="text-gray-400 text-sm">High-energy performances that engage your crowd</p>
                </div>
              </div> */}
              
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-black font-bold py-6 px-10 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <Link href="/bookings">
                  <Mail className="mr-2 h-5 w-5" />
                  Book The Parkways
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="w-full bg-black px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
            Connect With <span className="text-primary">The Parkways</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {socialLinks.map((social) => (
              social.link ? (
                <a
                  key={social.name}
                  href={social.link}
                  className="flex items-center justify-center px-4 py-3 bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10 rounded-md shadow-md hover:shadow-primary/20 transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="group-hover:text-primary transition-colors duration-300">
                    {social.icon}
                  </span>
                  <span>{social.name}</span>
                </a>
              ) : (
                <div key={social.name} className="relative">
                  <button
                    onClick={social.action}
                    className="flex items-center justify-center w-full px-4 py-3 bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10 rounded-md shadow-md hover:shadow-primary/20 transition-all duration-300 group"
                  >
                    <span className="group-hover:text-primary transition-colors duration-300">
                      {social.icon}
                    </span>
                    <span>{social.name}</span>
                  </button>
                  {message && activeButton === social.name && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black/90 text-white px-4 py-2 rounded-md shadow-lg text-sm whitespace-nowrap z-50 border border-primary/30">
                      {message}
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

