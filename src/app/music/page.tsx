"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Music, 
  Play, 
  Pause, 
  ExternalLink, 
  Youtube, 
  ArrowRight, 
  Clock, 
  ChevronRight 
} from "lucide-react";
import { Button } from "@/common/components/ui/button";
import { Badge } from "@/common/components/ui/badge";
import { Card, CardContent } from "@/common/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/common/components/ui/tabs";
import { ScrollArea } from "@/common/components/ui/scroll-area";

type Track = {
  id: number;
  title: string;
  length: string;
  coverArt?: string;
  audioPreview?: string;
};

// Cover song type for better organization
type CoverSongCategory = {
  name: string;
  description: string;
  songs: string[];
};

export default function Songs() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const audioRefs = useRef<{[key: number]: HTMLAudioElement | null}>({});

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      document.documentElement.style.setProperty("--scroll", window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle audio play/pause
  const togglePlay = (trackId: number) => {
    const audioElement = audioRefs.current[trackId];
    
    if (!audioElement) return;
    
    if (isPlaying === trackId) {
      audioElement.pause();
      setIsPlaying(null);
    } else {
      if (isPlaying !== null && audioRefs.current[isPlaying]) {
        audioRefs.current[isPlaying]?.pause();
      }
      
      audioElement.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
      setIsPlaying(trackId);
    }
  };

  // Get initials from track title for placeholder
  const getInitials = (title: string): string => {
    return title
      .split(' ')
      .filter(word => /^[a-zA-Z]/.test(word)) // Filter out words that don't start with a letter
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  // EP tracks data
  const epTracks: Track[] = [
    {
      id: 1,
      title: "Waiting Again",
      length: "2:38",
      audioPreview: "/audio/Waiting-Again-Demo.mp3"
    },
    {
      id: 2,
      title: "Middle Distance Baby",
      length: "3:07",
      audioPreview: "/audio/Middle-Distance-Baby-Demo.mp3"
    },
    {
      id: 3,
      title: "Any Other Way (Spin)",
      length: "2:16",
      audioPreview: "/audio/Spin-Demo.mp3"
    },
    {
      id: 4,
      title: "Avaline",
      length: "2:50",
      audioPreview: "/audio/Avaline-Demo.mp3"
    },
    {
      id: 5,
      title: "Zynnie",
      length: "3:33",
      audioPreview: "/audio/Zynnie-Demo.mp3"
    },
    // {
    //   id: 6,
    //   title: "Gotta Be Taken",
    //   length: "2:59",
    //   audioPreview: "/audio/Gotta-Be-Taken-Demo.mp3"
    // }
  ];

  // YouTube videos
  const youtubeVideos = [
    {
      id: "TN1OLbCLbrI",
      title: "Avaline (Live Performance)",
      thumbnail: "https://img.youtube.com/vi/TN1OLbCLbrI/maxresdefault.jpg"
    },
    {
      id: "Cwyavufm07Y",
      title: "Beach Boy (Live Performance)",
      thumbnail: "https://img.youtube.com/vi/Cwyavufm07Y/maxresdefault.jpg"
    }
  ];

  // Cover song categories
  const coverSongCategories: CoverSongCategory[] = [
    {
      name: "Classic Rock Anthems",
      description: "Timeless rock classics that get everyone singing",
      songs: [
        "American Girl – Tom Petty",
        "Dancing in the Dark – Bruce Springsteen",
        "Hungry Heart – Bruce Springsteen",
        "Gimme Three Steps – Lynyrd Skynyrd",
        "The Boys Are Back in Town – Thin Lizzy",
        "Lido Shuffle – Boz Skaggs",
        "Talk to Me - Southside Johnny"
      ]
    },
    {
      name: "Indie & Alternative Favorites",
      description: "Modern rock and indie classics with attitude",
      songs: [
        "Don't Look Back in Anger – Oasis",
        "She's Electric – Oasis",
        "Slide Away – Oasis",
        "Is This It – The Strokes",
        "Last Nite – The Strokes",
        "There She Goes – The La's",
        "Take Me Out – Franz Ferdinand",
        "Boys Don't Cry – The Cure",
        "My Type - Saint Motel"
      ]
    },
    {
      name: "High-Energy Party Starters",
      description: "Songs guaranteed to get the crowd moving",
      songs: [
        "Valerie – Amy Winehouse",
        "Everybody Talks – Neon Trees",
        "Kilby Girl – The Backseat Lovers",
        "Build Me Up Buttercup - The Foundations",
        "What I Like About You – The Romantics",
        "I Wanna Be Sedated – The Ramones",
        "Scotty Doesn't Know – Lustra",
        "Chelsea Dagger – The Fratellis",
        "All Apologies – Nirvana",
        "Bad Habit - Steve Lacy"
      ]
    },
    {
      name: "50s & 60s Classics",
      description: "Vintage hits from the golden era of rock",
      songs: [
        "Come Together – The Beatles",
        "Got to Get You Into My Life – The Beatles",
        "Saw Her Standing There – The Beatles",
        "Twist and Shout – The Beatles",
        "Blackbird - The Beatles",
        "Lucille - Little Richard",
        "Runaround Sue - Dion"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-14 md:pt-8">
      {/* Hero Section with Parallax */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover -top-36"
          style={{
            backgroundImage: "url('/gallery/Brewers1.jpeg')",
            transform: "translateY(calc(var(--scroll) * 0.3px))",
            filter: "brightness(0.4) contrast(1.1)"
          }}
        />
        
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('/noise.webp')", backgroundRepeat: "repeat" }} />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
        
        <div className="relative container mx-auto px-4 z-10 text-center">
          <Badge variant="outline" className="mb-6 border-secondary/40 bg-black/50 backdrop-blur-sm py-2 px-4 text-secondary">
            OUR SOUND
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            The Parkways <span className="text-secondary">Music</span>
          </h1>
          {/* <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mt-4">
            Original songs and covers that capture our South Jersey rock spirit
          </p> */}
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-8 w-8 text-white/70 rotate-90" />
        </div>
      </section>

      {/* EP Announcement Section */}
      <section className="relative py-16 bg-gradient-to-b from-zinc-950 to-black">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-60"></div>
        
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 rounded-xl p-6 md:p-10 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-secondary/10 blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <Badge className="bg-secondary text-black mb-4">Coming Soon</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our EP (Name Pending)</h2>
              <p className="text-xl text-gray-200 mb-6">Coming Out End of April?</p>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Check back in to see it here and on all streaming platforms! Our debut EP features five original songs
                that capture variety in The Parkways sound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EP Preview Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 border-primary/40 text-primary">
              ORIGINAL MUSIC
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">EP Tracks</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Preview demos for our upcoming EP tracks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {epTracks.map(track => {
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
                    {/* Fallback element */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} flex items-center justify-center z-0`}>
                      <span className="text-5xl md:text-6xl font-bold text-black/80">
                        {initials}
                      </span>
                      
                      {/* Vinyl record effect */}
                      <div className="absolute w-3/5 h-3/5 border-4 border-black/10 rounded-full flex items-center justify-center">
                        <div className="w-1/3 h-1/3 bg-black/20 rounded-full">
                          <div className="w-1/2 h-1/2 bg-black/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Album art - only render Image if coverArt exists */}
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
                    
                    {/* Play button */}
                    {track.audioPreview && (
                      <button 
                        className="absolute bottom-3 right-3 z-30 group"
                        onClick={() => togglePlay(track.id)}
                        aria-label={isPlaying === track.id ? "Pause" : "Play"}
                      >
                        <div className={`
                          w-10 h-10 rounded-full flex items-center justify-center
                          transition-all duration-300 transform
                          ${isPlaying === track.id 
                            ? 'bg-primary scale-90 text-black shadow-lg shadow-primary/30' 
                            : 'bg-black/70 group-hover:bg-primary/90 group-hover:scale-110 text-white group-hover:text-black'}
                        `}>
                          {isPlaying === track.id ? (
                            <Pause className="h-4 w-4" />
                          ) : (
                            <Play className="h-4 w-4" />
                          )}
                        </div>
                      </button>
                    )}
                    
                    {/* Audio element */}
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
                      
                      {track.audioPreview ? (
                        <Badge 
                          variant="secondary" 
                          className="text-black border-secondary/30"
                        >
                          Demo Available
                        </Badge>
                      ) : (
                        <Badge 
                          variant="outline" 
                          className="text-gray-400 border-gray-400/30"
                        >
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Live Performance Videos */}
      <section className="py-16 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-secondary/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <Badge 
              variant="outline" 
              className="mb-2 border-secondary/40 text-secondary"
            >
              LIVE PERFORMANCES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Watch Us Perform</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Check out some of our live performances and music videos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="bg-zinc-900/50 rounded-xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <div className="relative pb-[56.25%] /* 16:9 aspect ratio */">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button 
              asChild
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10 text-primary"
            >
              <a 
                href="https://www.youtube.com/channel/UCC8OzABpYTa1goeiMBcf6lQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center"
              >
                <Youtube className="h-5 w-5 mr-2" />
                Watch More on YouTube
                <ExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Cover Songs Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge 
              variant="outline" 
              className="mb-2 border-primary/40 text-primary"
            >
              Cover Songs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">OTHER PEOPLE'S SONGS</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We play a little bit of everything, try to find your favorites below
            </p>
          </div>
          
          <Tabs defaultValue={coverSongCategories[0].name.replace(/\s+/g, '-').toLowerCase()} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent">
              {coverSongCategories.map((category) => (
                <TabsTrigger 
                  key={category.name} 
                  value={category.name.replace(/\s+/g, '-').toLowerCase()}
                  className="bg-zinc-900/50 hover:bg-zinc-800/50 data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {coverSongCategories.map((category) => (
              <TabsContent 
                key={category.name} 
                value={category.name.replace(/\s+/g, '-').toLowerCase()}
                className="mt-8"
              >
                <Card className="bg-zinc-900/30 border-white/5">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{category.name}</h3>
                    <p className="text-gray-300 mb-6">{category.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                      {category.songs.map((song, index) => (
                        <div 
                          key={index} 
                          className="flex items-center py-2 border-b border-white/10"
                        >
                          <Music className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                          <span className="text-gray-200">{song}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Request Message */}
          <div className="mt-12 p-6 border border-white/10 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl text-center">
            <p className="text-lg text-white">
              We're always open to learning new songs and taking requests to match your venue's vibe!
            </p>
            <Button 
              asChild
              variant="default"
              className="mt-4 bg-gradient-to-r from-primary to-secondary text-black hover:opacity-90"
            >
              <Link href="/bookings">
                Request a Song
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
