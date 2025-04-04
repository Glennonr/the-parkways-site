"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Button } from "@/common/components/ui/button";
import { Badge } from "@/common/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/common/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/common/components/ui/tabs";
import { Separator } from "@/common/components/ui/separator";
import {
  FileDown,
  Music,
  Mic,
  Calendar,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Video,
  Play,
  Pause,
  Quote,
  Download,
  ChevronRight,
  ExternalLink,
  Clock
} from "lucide-react";
import { FaTiktok, FaSpotify } from "react-icons/fa";

type AudioTrack = {
  id: number;
  title: string;
  file: string;
};

type FeaturedTrack = {
  id: number;
  title: string;
  length: string;
  coverArt?: string;
  audioPreview?: string;
};

// Sample quotes data
const quotes = [
  {
    quote: "The Parkways bring high energy and great vibes to every stage they hit! A must-see act.",
    source: "Local Music Blog"
  },
  {
    quote: "South Jersey's rising stars with a sound that blends nostalgic rock with fresh energy.",
    source: "Venue Manager, Kings Road Brewing"
  },
  {
    quote: "Their performances keep the audience engaged from the first note to the last encore.",
    source: "Fan Review"
  }
];

export default function EPK() {
  const [scrollY, setScrollY] = useState(0);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

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

  // Get initials from track title for fallback
  const getInitials = (title: string): string => {
    return title
      .split(' ')
      .filter(word => /^[a-zA-Z]/.test(word)) // Filter out words that don't start with a letter
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  // Demo tracks
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

  // Promo photos
  const promoPhotos = [
    "/gallery/Kings Road/BeatlesRooftop.webp",
    "/gallery/Kings Road/KingsRoad.webp",
    "/gallery/Ortlieb's/Waves.webp",
    "/gallery/Bowery Electric/Bowery.jpg",
    "/gallery/Bowery Electric/Bowery2.jpg",
    "/gallery/Other/Post RecordingCrop.webp",
    "/gallery/Ortlieb's/BackToBack.webp",
    "/gallery/Pianos/CenterShot.webp"
  ];

  // Upcoming shows
  const upcomingShows = [
    { date: "March 9, 2025", venue: "Gold Sound", location: "Brooklyn, NY" },
    { date: "March 15, 2025", venue: "Kings Road Brewery", location: "Haddonfield, NJ" },
    { date: "April 12, 2025", venue: "Ortlieb's", location: "Philadelphia, PA" },
    { date: "August 2, 2025", venue: "Musikfest (Plaza Tropical)", location: "Bethlehem, PA" }
  ];

  // Social links
  const socialLinks = [
    { platform: "Instagram", url: "https://www.instagram.com/theparkwaysband", icon: <Instagram className="h-5 w-5" /> },
    { platform: "Facebook", url: "https://www.facebook.com/theparkways", icon: <Facebook className="h-5 w-5" /> },
    { platform: "YouTube", url: "https://www.youtube.com/@TheParkwaysBand", icon: <Youtube className="h-5 w-5" /> },
    { platform: "TikTok", url: "https://www.tiktok.com/@the_parkways", icon: <FaTiktok className="h-5 w-5" /> }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-14 md:pt-8">
      {/* Hero Section with Parallax */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/gallery/Bowery Electric/Bowery.jpg')",
            transform: `translateY(calc(${scrollY * 0.3}px))`,
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
            className="mb-6 border-primary/40 bg-black/50 backdrop-blur-sm py-2 px-4 text-primary"
          >
            PRESS KIT
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Electronic <span className="text-primary">Press Kit</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mt-4">
            Everything you need to know about The Parkways
          </p>
        </div>
      </section>

      {/* Gradient decorator */}
      <div className="relative w-full bg-zinc-950 py-2">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-primary/5 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Bio Section */}
        <section className="mb-20 max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-12 items-center w-full">
            <div className="md:w-1/2 w-full space-y-5">
              <Badge variant="outline" className="mb-3 border-secondary/40 text-secondary">ABOUT US</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who Are <span className="text-primary">The Parkways</span>?</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                The Parkways are a rock band from Haddonfield, NJ, the core 4 of two guitars,
                bass and drums.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We play a mix of originals and covers from the 50's to 2020's
                bringing a big sound and lots of energy to every show.
              </p>
              <p className="text-lg text-primary font-semibold mt-4">
                Our debut 5-song EP is recorded and coming out in the end of April!
              </p>
            </div>
            <div className="md:w-1/2 w-full relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-lg overflow-hidden w-full h-[350px] md:h-[400px]">
                <Image
                  src="/gallery/Kings Road/BeatlesRooftop.webp"
                  alt="The Parkways band"
                  fill
                  className="object-cover object-top rounded-lg border border-white/10 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  style={{ objectPosition: 'top center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Music Section */}
        <section className="mb-20 bg-zinc-900/50 rounded-xl p-8 border border-white/5 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-3 border-secondary/40 text-secondary">OUR MUSIC</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Listen to Our Demos</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Preview demos off our upcoming EP, dropping soon on all major streaming platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </section>

        {/* Photos Section */}
        <section className="mb-20 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-3 border-primary/40 text-primary">PHOTO GALLERY</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Promo Photos</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              High-resolution images for press and promotional use
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              navigation
              pagination={{ clickable: true }}
              loop
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              spaceBetween={0}
              slidesPerView={1}
              effect="fade"
              className="w-full h-[500px] rounded-lg"
            >
              {promoPhotos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={photo}
                      alt={`The Parkways band photo ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority={index < 2}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Videos Section */}
        <section className="mb-20 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-3 border-secondary/40 text-secondary">LIVE PERFORMANCES</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Parkways in Action</h2>
          </div>

          <Tabs defaultValue="video1" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="video1">Take Me Out</TabsTrigger>
              <TabsTrigger value="video2">Beach Boy</TabsTrigger>
              <TabsTrigger value="video3">Dancing in the Dark</TabsTrigger>
            </TabsList>

            <TabsContent value="video1" className="relative aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1ZT-KYzJhwCZnovBF-x6cTePsf17y058f/preview"
                allow="autoplay"
                className="w-full h-full absolute inset-0 border-0"
              ></iframe>
            </TabsContent>

            <TabsContent value="video2" className="relative aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/Cwyavufm07Y"
                allowFullScreen
                className="w-full h-full absolute inset-0 border-0"
              ></iframe>
            </TabsContent>

            <TabsContent value="video3" className="relative aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/11dHE4k8bzHBRkdXKvB8fpyXznj_9e6Ww/preview"
                allow="autoplay"
                className="w-full h-full absolute inset-0 border-0"
              ></iframe>
            </TabsContent>
          </Tabs>
        </section>

        {/* Press & Reviews Section */}
        <section className="mb-20 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-3 border-primary/40 text-primary">TESTIMONIALS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What People Are Saying</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Reviews and feedback from venues, fans and press
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {quotes.map((item, index) => (
              <Card key={index} className="bg-black/50 border-white/10">
                <CardContent className="pt-8">
                  <Quote className="h-8 w-8 text-primary/70 mb-4" />
                  <blockquote className="text-lg italic text-gray-300 mb-4">
                    {item.quote}
                  </blockquote>
                  <p className="text-sm text-gray-400 font-medium">— {item.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 max-w-6xl mx-auto">
          {/* Show Dates Section */}
          <section className="bg-zinc-900/50 rounded-xl p-8 border border-white/5">
            <Badge variant="outline" className="mb-3 border-secondary/40 text-secondary">UPCOMING DATES</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Live Shows</h2>

            <div className="space-y-4 mt-6">
              {upcomingShows.map((show, index) => (
                <div key={index} className="flex items-center border-b border-white/10 pb-4">
                  <div className="bg-black p-2 rounded-lg mr-4 text-center min-w-16">
                    <Calendar className="h-5 w-5 text-primary mx-auto mb-1" />
                    <span className="text-sm text-gray-400">{show.date.split(',')[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{show.venue}</h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin className="h-4 w-4 inline mr-1 text-secondary/70" />
                      {show.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button
                asChild
                variant="outline"
                className="w-full border-primary/50 text-primary hover:bg-primary/20"
              >
                <Link href="/shows">
                  View All Shows
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Technical Requirements Section */}
          <section className="bg-zinc-900/50 rounded-xl p-8 border border-white/5">
            <Badge variant="outline" className="mb-3 border-secondary/40 text-secondary">FOR VENUES</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Technical Requirements</h2>

            <div className="space-y-4 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-primary border-b border-primary/30 pb-2 mb-2">
                  Vocals & Instruments
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-300">Lead Vocals</span>
                    <span className="text-white">2x Vocal Mics</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Guitar 1 & 2</span>
                    <span className="text-white">Amp Mics</span>
                  </li>
                  {/* <li className="flex justify-between">
                    <span className="text-gray-300">Keyboard</span>
                    <span className="text-white">DI</span>
                  </li> */}
                  <li className="flex justify-between">
                    <span className="text-gray-300">Bass</span>
                    <span className="text-white">DI Box preferred</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Drums</span>
                    <span className="text-white">Kick, Snare, OH</span>
                  </li>
                </ul>
              </div>

              <div>
                {/* <h3 className="text-lg font-semibold text-primary border-b border-primary/30 pb-2 mb-2">
                  Drums
                </h3> */}
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    {/* <span className="text-gray-300">Alto & Tenor Sax</span> */}
                    {/* <span className="text-white">Clip-on or Stand Mics</span> */}
                  </li>

                </ul>
              </div>
            </div>

            <div className="mt-6">
              <Button
                asChild
                variant="default"
                className="w-full bg-primary text-black hover:bg-primary/90"
              >
                <Link href="/Stage Plot.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Stage Plot
                </Link>
              </Button>
            </div>
          </section>
        </div>

        {/* Booking & Contact Section */}
        <section className="mb-20 bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12 rounded-xl border border-white/10 text-center max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <Badge variant="outline" className="mb-6 border-secondary/40 text-secondary">GET IN TOUCH</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Book The Parkways</h2>
            <p className="text-lg text-gray-300 mb-6">
              For booking inquiries, fill out the form on our booking page or contact us directly:
            </p>

            <a
              href="mailto:theparkwaysband@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-black/40 rounded-lg border border-primary/30 mb-8 hover:bg-black/60 hover:border-primary transition-all duration-300"
            >
              <Mail className="h-5 w-5 text-primary mr-3" />
              <span className="text-xl font-medium text-white">theparkwaysband@gmail.com</span>
            </a>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto mb-8">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  asChild
                  variant="outline"
                  className="border-white/10 hover:border-primary/50 hover:bg-black/50 transition-all"
                  size="sm"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="text-primary">{link.icon}</span>
                    <span>{link.platform}</span>
                  </a>
                </Button>
              ))}
            </div>

            <Button
              asChild
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-black hover:opacity-90"
            >
              <Link href="/bookings">
                Book Us Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
