"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Calendar, 
  Music, 
  MapPin, 
  ArrowRight, 
  CheckCircle, 
  Send, 
  Clock, 
  MessageSquare, 
  User, 
  AtSign, 
  Phone, 
  Building, 
  ChevronDown, 
  FileText, 
  ExternalLink,
  Users 
} from "lucide-react";
import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { Textarea } from "@/common/components/ui/textarea";
import { Badge } from "@/common/components/ui/badge";
import { Card, CardContent } from "@/common/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/common/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/common/components/ui/accordion";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/common/components/ui/form";
import { Separator } from "@/common/components/ui/separator";

export default function BookUs() {
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

  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    venue: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulated API call - replace with your actual booking API endpoint
      // const response = await fetch("/api/book", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      
      // Simulate server response time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // If successful:
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        venue: "",
        eventType: "",
        date: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pt-14 md:pt-8">
      {/* Hero Section with Parallax */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/gallery/Ortliebs.jpeg')",
            transform: "translateY(calc(var(--scroll) * 0.3px))",
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
            BOOKING INQUIRIES
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Book <span className="text-primary">The Parkways</span>
          </h1>
          {/* <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mt-4">
            Let us bring the South Jersey rock experience to your venue or event
          </p> */}
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-8 w-8 text-white/70 rotate-90" />
        </div>
      </section>

      {/* Booking Information Section */}
      <section className="relative py-20 bg-gradient-to-b from-zinc-950 to-black">
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">We're Ready for Your Event</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The Parkways are available for booking at venues throughout New Jersey, Pennsylvania, and New York. 
                Our high-energy performances and versatile setlist make us perfect for bars, breweries, 
                private events, and festivals.
              </p>
            </div>
            
            {/* Booking options grid */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <Card className="bg-zinc-900/50 border-white/5 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Venues & Bars</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    We regularly perform at bars, clubs, breweries, and music venues across the tri-state area.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-300">Flexible time slots and setlists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-300">Full band with professional equipment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-zinc-900/50 border-white/5 hover:border-secondary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Private Events</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    From birthday celebrations to corporate events, we'll make your special occasion memorable.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-gray-300">Customized song selections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-gray-300">Flexible scheduling and arrangements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-zinc-900/50 border-white/5 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Festivals & Events</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    We bring our full energy to festivals, block parties, and community events.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-300">High-energy performances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-300">Crowd-engaging setlists</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
             */}
            {/* EPK Promotional Section */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-white/10 rounded-xl p-6 md:p-8 mb-16 relative overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-primary/10 blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-secondary/10 blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 relative aspect-square max-w-[200px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg blur"></div>
                  <Image 
                    src="/Group.JPG"
                    alt="The Parkways Band"
                    fill
                    className="object-cover rounded-lg relative"
                    sizes="(max-width: 768px) 200px, 200px"
                  />
                </div>
                
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3">Electronic Press Kit</h3>
                  <p className="text-gray-300 mb-4">
                    Need more information about our band? Our Electronic Press Kit (EPK) contains everything 
                    you need to know: band bio, photos, technical requirements, and more.
                  </p>
                  <Button 
                    asChild
                    variant="default"
                    className="bg-gradient-to-r from-primary to-secondary text-black font-bold"
                  >
                    <Link href="/EPK">
                      <FileText className="mr-2 h-5 w-5" />
                      View Our EPK
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Contact Form Section */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="text-gray-300 mb-6">
                  Fill out the form to inquire about booking The Parkways for your venue or event. 
                  We'll get back to you as soon as possible to discuss details and availability.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Email Us</h3>
                      <a 
                        href="mailto:theparkwaysband@gmail.com" 
                        className="text-gray-400 hover:text-primary transition-colors duration-200"
                      >
                        theparkwaysband@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Call Us</h3>
                      <a 
                        href="tel:+18562989855" 
                        className="text-gray-400 hover:text-primary transition-colors duration-200"
                      >
                        (856) 298-9855
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Based In</h3>
                      <p className="text-gray-400">Haddonfield, NJ</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 bg-zinc-900/50 p-6 md:p-8 rounded-xl border border-white/10">
                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-300 mb-6">
                      Thanks for reaching out! We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSuccess(false)} 
                      className="border-primary/30 text-primary hover:bg-primary/10"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-bold mb-4">Contact Form</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="pl-10 bg-zinc-800/50 border-white/10 text-white placeholder:text-gray-500"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                        <div className="relative">
                          <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                            className="pl-10 bg-zinc-800/50 border-white/10 text-white placeholder:text-gray-500"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number (Optional)</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(123) 456-7890"
                            className="pl-10 bg-zinc-800/50 border-white/10 text-white placeholder:text-gray-500"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="venue" className="text-sm font-medium text-gray-300">Venue Name (Optional)</label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="venue"
                            name="venue"
                            type="text"
                            value={formData.venue}
                            onChange={handleChange}
                            placeholder="Venue or Event Location"
                            className="pl-10 bg-zinc-800/50 border-white/10 text-white placeholder:text-gray-500"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* <div className="space-y-2">
                        <label htmlFor="eventType" className="text-sm font-medium text-gray-300">Event Type</label>
                        <Select 
                          name="eventType" 
                          value={formData.eventType} 
                          onValueChange={(value) => handleSelectChange("eventType", value)}
                        >
                          <SelectTrigger className="bg-zinc-800/50 border-white/10 text-white">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent className="bg-zinc-800 border-white/10 text-white">
                            <SelectItem value="venue">Bar/Venue Performance</SelectItem>
                            <SelectItem value="private">Private Event</SelectItem>
                            <SelectItem value="festival">Festival/Community Event</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div> */}
                      
                      <div className="space-y-2">
                        <label htmlFor="date" className="text-sm font-medium text-gray-300">Preferred Date (Optional)</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="pl-10 bg-zinc-800/50 border-white/10 text-white"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">Your Message</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 text-gray-500 h-4 w-4" />
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us what you're looking for..."
                          className="pl-10 min-h-[120px] bg-zinc-800/50 border-white/10 text-white placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-5"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-5 w-5" />
                          Send Booking Inquiry
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-white/10">
                  <AccordionTrigger className="text-gray-200 hover:text-primary">
                    What type of music does The Parkways play?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    The Parkways play a mix of rock and alternative music, with both covers and original songs. Our covers span from classic rock to contemporary hits, while our original music has a distinctive South Jersey rock sound.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-white/10">
                  <AccordionTrigger className="text-gray-200 hover:text-primary">
                    How far in advance should I book the band?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    We recommend booking at least 4-6 weeks in advance for regular venue performances, and 2-3 months for special events or festivals. However, we sometimes have last-minute availability, so don't hesitate to reach out even for events on shorter notice.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-white/10">
                  <AccordionTrigger className="text-gray-200 hover:text-primary">
                    What is your typical set length?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Our standard performance is two 45-minute sets with a short break in between, but we're flexible and can adjust to fit your event's schedule. For private events, we can also offer shorter performance options.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-white/10">
                  <AccordionTrigger className="text-gray-200 hover:text-primary">
                    Do you provide your own sound equipment?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    We bring our own instruments and backline equipment. For smaller venues and private events, we can provide a basic PA system. For larger venues, we typically work with the house sound system or can recommend sound rental options.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border-white/10">
                  <AccordionTrigger className="text-gray-200 hover:text-primary">
                    Can you learn specific songs for our event?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Yes! For private events, we're happy to learn 1-2 special request songs with advance notice (typically 3-4 weeks). Please let us know your requests when booking so we can prepare accordingly.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
