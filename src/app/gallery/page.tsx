"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/common/components/ui/badge";
import { Button } from "@/common/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/common/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle } from "@/common/components/ui/dialog";
import { Camera, ChevronDown, ChevronRight, Expand, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

// Image data (without hardcoded categories)
const images = [
  "/gallery/Ortlieb's/Ortliebs.webp",
  "/gallery/Other/Cheers.jpeg",
  "/gallery/Bowery Electric/Bowery.jpg",
  "/gallery/Ortlieb's/GregPoint.jpeg",
  "/gallery/DOTF/smiles.webp",
  "/gallery/DOTF/Looking.webp",
  "/gallery/Brewers/Brewers2.jpeg",
  "/gallery/Ortlieb's/Waves.webp",
  // "/Parkways Film.jpg",
  "/gallery/DOTF/DOTF.webp",
  "/gallery/DOTF/PointingUp.webp",
  "/gallery/Ortlieb's/BackToBack.webp",
  "/gallery/Brewers/Brewers1.jpeg",
  "/gallery/Other/Keenans.jpeg",
  "/gallery/Bowery Electric/Bowery2.jpg",
  "/gallery/Ortlieb's/Ortliebs2.webp",
  "/gallery/Kings Road/Gazing.jpeg",
  "/gallery/Kings Road/KingsRoad2.webp",
  "/gallery/DOTF/eyes.webp",
  "/gallery/Kings Road/BeatlesRooftop.webp",
  "/gallery/Kings Road/KingsRoad.webp",
  "/gallery/Other/Post Recording.webp",
  "/gallery/Ortlieb's/CrowdFromStage.webp",
  "/gallery/Other/X.jpeg",
  "/gallery/DOTF/Saxy.webp",
  "/gallery/Pianos/CenterShot.webp",
  "/gallery/Pianos/Greg.webp",
  "/gallery/Kings Road/Greg2.webp",
  "/gallery/Kings Road/Group.webp",
  "/gallery/Kings Road/Group2.webp",
  "/gallery/Pianos/Jimmy.webp",
  "/gallery/Kings Road/Mask.webp",
  "/gallery/Pianos/Sam.webp",
];

// Extract categories dynamically
const extractCategory = (path: string) => {
  const segments = path.split("/");
  if (segments.length >= 3 && segments[1] === "gallery") {
    return segments[2]; // The folder name inside "/gallery/"
  }
  return "misc"; // Default category if no subfolder exists
};

// Process images into an object structure
const processedImages = images.map((src) => ({
  src,
  category: extractCategory(src),
}));

// Get unique categories from images
const categories = Array.from(
  new Set(processedImages.map((img) => img.category))
).sort();

// Add "all" category at the beginning
categories.unshift("all");

export default function Photos() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<(typeof processedImages)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "all"
      ? processedImages
      : processedImages.filter((img) => img.category === selectedCategory);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle image click to open modal
  const handleImageClick = useCallback((image: (typeof processedImages)[0]) => {
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
            backgroundImage: "url('/gallery/Bowery Electric/Bowery.jpg')",
            transform: `translateY(${scrollY * 0.2}px)`,
            filter: "brightness(0.4) contrast(1.1)",
          }}
        />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-black via-transparent to-black"></div>

        <div className="relative container mx-auto px-4 z-10 text-center">
          <Badge variant="outline" className="mb-6 border-primary/40 bg-black/50 py-2 px-4 text-primary">
            PHOTO GALLERY
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Memories Through the <span className="text-primary">Lens</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mt-4">
            Capturing The Parkways in action across venues in NJ, PA, and NY
          </p>
        </div>
      </section>

      {/* Gallery Controls Section */}
      <section className="py-10 bg-zinc-950 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              The Parkways <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-gray-400 mt-1">{filteredImages.length} photos in collection</p>

            {/* Dynamic Category Tabs */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full sm:w-auto">
              <TabsList className="grid grid-cols-3 sm:grid-cols-6 gap-2 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="bg-zinc-900/70 border border-white/10 data-[state=active]:bg-primary data-[state=active]:text-black transition-all py-1.5"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
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
            <motion.div key={selectedCategory} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: index * 0.05, duration: 0.3 } }}
                  onClick={() => handleImageClick(image)}
                >
                  <div className="relative overflow-hidden rounded-lg aspect-square bg-zinc-900">
                    <Image src={image.src} alt="Gallery Image" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
