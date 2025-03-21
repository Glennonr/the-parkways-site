"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Gallery } from "next-gallery";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/common/components/ui/badge";
import { Button } from "@/common/components/ui/button";
import { Card, CardContent } from "@/common/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/common/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/common/components/ui/dialog";
import { Separator } from "@/common/components/ui/separator";
import {
  Camera,
  ChevronDown,
  ChevronRight,
  Download,
  Expand,
  Facebook,
  Instagram,
  Share2,
  X,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

// Images data with additional metadata for filtering
const images = [
  {
    src: "/gallery/Ortliebs.jpeg",
    aspect_ratio: 9 / 12,
    category: "venues",
    title: "Ortlieb's",
  },
  {
    src: "/gallery/Cheers.jpeg",
    aspect_ratio: 3 / 2,
    category: "performances",
    title: "Cheers",
  },
  {
    src: "/gallery/Bowery.jpg",
    aspect_ratio: 6 / 7,
    category: "venues",
    title: "The Bowery",
  },
  {
    src: "/gallery/GregPoint.jpeg",
    aspect_ratio: 9 / 16,
    category: "performances",
    title: "Greg Point",
  },
  {
    src: "/gallery/Smiles.JPG",
    aspect_ratio: 3 / 2,
    category: "candid",
    title: "Smiles",
  },
  {
    src: "/gallery/Looking.JPG",
    aspect_ratio: 3 / 2,
    category: "candid",
    title: "Looking",
  },
  {
    src: "/gallery/Brewers2.jpeg",
    aspect_ratio: 6 / 4,
    category: "venues",
    title: "Brewers",
  },
  {
    src: "/gallery/Waves.jpeg",
    aspect_ratio: 7 / 5,
    category: "candid",
    title: "Waves",
  },
  {
    src: "/Parkways Film.jpg",
    aspect_ratio: 16 / 9,
    category: "promotional",
    title: "Parkways Film",
  },
  {
    src: "/gallery/DOTF.JPG",
    aspect_ratio: 3 / 2,
    category: "performances",
    title: "DOTF",
  },
  {
    src: "/gallery/PointingUp.JPG",
    aspect_ratio: 3 / 2,
    category: "performances",
    title: "Pointing Up",
  },
  {
    src: "/gallery/BackToBack.jpeg",
    aspect_ratio: 5 / 7,
    category: "performances",
    title: "Back to Back",
  },
  {
    src: "/gallery/Brewers1.jpeg",
    aspect_ratio: 6 / 4,
    category: "venues",
    title: "Brewers Alternate",
  },
  {
    src: "/gallery/Keenans.jpeg",
    aspect_ratio: 6 / 4,
    category: "venues",
    title: "Keenans",
  },
  {
    src: "/gallery/Bowery2.jpg",
    aspect_ratio: 3 / 2,
    category: "venues",
    title: "Bowery Stage",
  },
  {
    src: "/gallery/Ortliebs2.JPEG",
    aspect_ratio: 3 / 4,
    category: "venues",
    title: "Ortliebs Night",
  },
  {
    src: "/gallery/Gazing.jpeg",
    aspect_ratio: 3 / 4,
    category: "candid",
    title: "Gazing",
  },
  {
    src: "/gallery/KingsRoad2.jpeg",
    aspect_ratio: 4 / 3,
    category: "venues",
    title: "Kings Road 2",
  },
  {
    src: "/gallery/eyes.JPG",
    aspect_ratio: 3 / 2,
    category: "candid",
    title: "Eyes",
  },
  {
    src: "/gallery/BeatlesRooftop.jpeg",
    aspect_ratio: 6 / 4,
    category: "promotional",
    title: "Beatles Rooftop",
  },
  {
    src: "/gallery/KingsRoad.jpeg",
    aspect_ratio: 4 / 3,
    category: "venues",
    title: "Kings Road",
  },
  {
    src: "/gallery/Post Recording.jpeg",
    aspect_ratio: 12 / 9,
    category: "studio",
    title: "Post Recording",
  },
  {
    src: "/gallery/CrowdFromStage.jpeg",
    aspect_ratio: 3 / 4,
    category: "performances",
    title: "Crowd From Stage",
  },
  {
    src: "/gallery/X.jpeg",
    aspect_ratio: 16 / 9,
    category: "promotional",
    title: "X",
  },
  {
    src: "/gallery/Saxy.jpeg",
    aspect_ratio: 9 / 16,
    category: "performances",
    title: "Saxy",
  },
];

// Define gallery categories
const categories = [
  { id: "all", label: "All Photos" },
  { id: "performances", label: "Performances" },
  { id: "venues", label: "Venues" },
  { id: "candid", label: "Candid" },
  { id: "studio", label: "Studio" },
  { id: "promotional", label: "Promotional" },
];

export default function Photos() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const widths = [500, 1000, 1600];
  const ratios = [2.2, 4, 6, 8];

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle image click to open modal
  const handleImageClick = useCallback((image: (typeof images)[0]) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white pt-6 md:pt-8">
      {/* Hero Section with Parallax */}
      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/gallery/Bowery.jpg')",
            transform: `translateY(${scrollY * 0.2}px)`,
            filter: "brightness(0.4) contrast(1.1)",
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/noise.jpg')",
            backgroundRepeat: "repeat",
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
            PHOTO GALLERY
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Memories Through the <span className="text-primary">Lens</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mt-4">
            Capturing The Parkways in action across venues in NJ, PA, and NY
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* Gallery Controls Section */}
      <section className="py-10 bg-zinc-950 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                The Parkways <span className="text-primary">Gallery</span>
              </h2>
              <p className="text-gray-400 mt-1">
                {filteredImages.length} photos in collection
              </p>
            </div>

            {/* Category Filter Tabs */}
            <Tabs
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full sm:w-auto"
            >
              <TabsList className="grid grid-cols-3 sm:grid-cols-6 gap-2 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="bg-zinc-900/70 border border-white/10 data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:shadow-inner transition-all py-1.5"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-8 bg-black min-h-[60vh]">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.05, duration: 0.3 },
                  }}
                  className="relative group cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <div className="relative overflow-hidden rounded-lg aspect-square bg-zinc-900">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="font-medium text-lg">{image.title}</h3>
                      <Badge
                        variant="outline"
                        className="mt-2 w-fit border-primary/40 text-primary"
                      >
                        {categories.find((c) => c.id === image.category)
                          ?.label || image.category}
                      </Badge>
                    </div>

                    {/* Expand icon */}
                    <div className="absolute top-3 right-3 bg-black/60 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Expand className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state if no images match the filter */}
          {filteredImages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <Camera className="h-16 w-16 text-zinc-700 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                No photos found
              </h3>
              <p className="text-zinc-400 mb-6">
                No photos match the current filter.
              </p>
              <Button
                variant="outline"
                onClick={() => setSelectedCategory("all")}
              >
                View all photos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Classic Gallery for users who want the original layout */}
      <section className="py-12 bg-zinc-950 relative">
        <Separator className="mb-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-secondary/40 text-secondary"
            >
              CLASSIC VIEW
            </Badge>
            <h2 className="text-3xl font-bold mb-2">Full Gallery</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              View our complete photo collection in a classic gallery layout
            </p>
          </div>

          <div className="mt-8">
            <Gallery
              {...{ widths, ratios, images: images }}
              lastRowBehavior="fill"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 border-secondary/40 text-secondary"
            >
              SPREAD THE WORD
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have a Good Shot?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Share it with us on socials
            </p>

            <div className="flex flex-wrap gap-4 gap-y-6 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/5 hover:border-primary/40 group"
                asChild
              >
                <a
                  href="https://www.facebook.com/theparkways"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="mr-2 h-5 w-5 group-hover:text-primary" />
                  Facebook
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/5 hover:border-primary/40 group"
                asChild
              >
                <a
                  href="https://www.instagram.com/theparkwaysband"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-5 w-5 group-hover:text-primary" />
                  Instagram
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/5 hover:border-primary/40 group"
                asChild
              >
                <a
                  href="https://www.tiktok.com/@the_parkways?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="mr-2 h-5 w-5 group-hover:text-primary" />
                  TikTok
                </a>
              </Button>

              <Button
                asChild
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-black hover:opacity-90"
              >
                <Link href="/bookings">
                  Book Us Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[90vw] h-[90vh] max-h-[90vh] p-0 bg-black/95 border-zinc-800">
        <DialogTitle>Title</DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center">
            {selectedImage && (
              <>
                {/* Image */}
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  <div className="relative max-w-full max-h-full">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.title || "Gallery image"}
                      className="object-contain max-h-[80vh] rounded-md"
                      width={1600}
                      height={1600 / selectedImage.aspect_ratio}
                    />
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-lg">
                        {selectedImage.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="mt-1 border-primary/40 text-primary"
                      >
                        {categories.find((c) => c.id === selectedImage.category)
                          ?.label || selectedImage.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
