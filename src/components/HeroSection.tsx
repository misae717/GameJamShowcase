"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Calendar, ArrowDown } from "lucide-react";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 w-full">
      {/* Minimal background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Subtle accent gradients - reduced in size and opacity */}
      <div className="absolute -left-[10%] top-1/3 w-[40vw] max-w-[600px] h-[40vh] max-h-[500px] rounded-full bg-gradient-to-br from-primary/5 to-purple-500/5 blur-3xl opacity-20" />
      <div className="absolute -right-[10%] top-1/2 w-[40vw] max-w-[600px] h-[40vh] max-h-[500px] rounded-full bg-gradient-to-tl from-purple-500/5 to-blue-500/5 blur-3xl opacity-20" />
      
      {/* Section transition - smoother and more subtle */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.01),rgba(0,0,0,0.02))] z-10" />
      
      {/* Section divider - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-20" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto relative z-20">
        <div className="relative flex flex-col items-center text-center max-w-[2000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 w-full max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-purple-500 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary px-3 py-1 rounded-full hover:from-primary/30 hover:to-purple-500/30 transition-all">
                Alfaisal University Game Dev Club
              </span>
              <Sparkles className="h-5 w-5 text-purple-500 animate-pulse" />
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500 hover:bg-[size:200%] transition-all duration-500 hover:from-blue-500 hover:via-purple-500 hover:to-primary">
              Alfaisal University Game Jam
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl leading-relaxed">
              Join our exciting game development event and create amazing games with your fellow students.
              Sign up for projects, form teams, and showcase your creativity!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 w-full max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group relative overflow-hidden w-full sm:w-auto shadow-md" asChild>
                <a href="#projects" className="flex items-center justify-center gap-2">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">View Projects</span>
                  <div className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:rotate-12">
                    <Image
                      src={getImageUrl("/Logos/GDCLogo.png")}
                      alt="Game Development Club Logo"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 translate-y-[102%] group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 w-full sm:w-auto shadow-md group relative overflow-hidden" 
                asChild
              >
                <a href="#about" className="flex items-center justify-center gap-2">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Learn More</span>
                  <ArrowDown className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-y-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 bg-card/70 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-xl max-w-md mx-auto w-full hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-purple-500 group-hover:text-primary transition-colors duration-300" />
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">Important Dates</h3>
            </div>
            <ul className="mt-3 space-y-3 text-left">
              <li className="flex justify-between pb-3 border-b border-primary/5 group-hover:border-primary/10 transition-colors duration-300">
                <span className="font-medium">Registration Deadline:</span>
                <span className="font-bold text-primary group-hover:text-purple-500 transition-colors duration-300">April 15, 2025</span>
              </li>
              <li className="flex justify-between pb-3 border-b border-primary/5 group-hover:border-primary/10 transition-colors duration-300">
                <span className="font-medium">Game Jam Start:</span>
                <span className="font-bold text-purple-500 group-hover:text-blue-500 transition-colors duration-300">April 6, 2025</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Project Submission:</span>
                <span className="font-bold text-blue-500 group-hover:text-primary transition-colors duration-300">April 26, 2025</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 