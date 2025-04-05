"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Github, Gamepad2 } from "lucide-react";
import { getImageUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative w-full mt-16 pb-8">
      {/* Section divider - top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-20" />
      
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95 pointer-events-none" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto max-w-[2000px] relative z-10">
        <div className="pt-12 pb-6 flex flex-col md:flex-row md:justify-between gap-8 items-center md:items-start">
          {/* Logo and description */}
          <div className="flex flex-col items-center md:items-start max-w-xs group">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full overflow-hidden border border-primary/10">
                <Image
                  src={getImageUrl("/Logos/GDCLogo.png")}
                  alt="Game Development Club Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg transition-colors group-hover:text-primary">Alfaisal Game Jam</span>
            </div>
          </div>
          
          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://discord.gg/Xt4zcedDXa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transform transition-all duration-200 hover:scale-110 relative group"
                aria-label="Discord"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transform transition-all duration-200 hover:scale-110 relative group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="https://itch.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transform transition-all duration-200 hover:scale-110 relative group"
                aria-label="Itch.io"
              >
                <Gamepad2 className="h-5 w-5" />
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
            </div>
            
            {/* Contact */}
            <a
              href="mailto:gameclub@alfaisal.edu"
              className="text-sm text-muted-foreground hover:text-primary transition-all relative group overflow-hidden inline-block px-1"
            >
              <span className="relative z-10">gameclub@alfaisal.edu</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border/5 pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Alfaisal Game Development Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 