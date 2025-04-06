"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/common/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/common/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle } from "@/common/components/ui/dialog";
import { ChevronDown } from "lucide-react";
import { images } from "@/common/data/galleryPhotos";



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

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/noise.webp')",
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

      {/* Gallery Grid */}
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

      {/* Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-black border border-white/10 rounded-lg">
          <button onClick={() => setSelectedImage(null)} className="absolute top-3 right-3 bg-black p-2 rounded-full hover:bg-white/20">
            {/* <X className="w-6 h-6 text-white" /> */}
          </button>
          {/* <VisuallyHidden> */}
          <DialogTitle>Gallery Image</DialogTitle>
          {/* </VisuallyHidden> */}
          {selectedImage && (
            <div className="relative w-full h-[60vh]">
              <Image src={selectedImage.src} alt="Enlarged Image" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>

    </main>
  );
}
