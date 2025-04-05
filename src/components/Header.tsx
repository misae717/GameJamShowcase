"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get basePath for GitHub Pages deployment
  const basePath = process.env.NODE_ENV === 'production' ? '/GameJamShowcase' : '';

  return (
    <header className="border-b border-primary/10 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full">
      {/* Decorative elements - full width */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
      
      <div className="w-full h-full mx-auto">
        {/* Content container - centered with max width */}
        <div className="h-16 flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[2000px] mx-auto">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-full overflow-hidden flex items-center justify-center shadow-sm relative after:absolute after:inset-0 after:rounded-full after:shadow-md after:opacity-0 after:transition-opacity group-hover:after:opacity-100">
                <Image
                  src={`${basePath}/Logos/GDCLogo.png`}
                  alt="Game Development Club Logo"
                  width={36}
                  height={36}
                  className="object-contain transition-transform duration-300 group-hover:rotate-12"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm sm:text-base leading-tight group-hover:text-primary transition-colors">
                  Alfaisal Game Dev Club
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                  Game Jam 2025
                </span>
              </div>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="block md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 rounded-full overflow-hidden relative after:absolute after:inset-0 after:bg-primary/5 after:scale-0 after:rounded-full after:transition-transform hover:after:scale-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5 relative z-10" />
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            <Link href="#projects">
              <Button 
                variant="ghost" 
                className="text-sm rounded-full px-4 relative overflow-hidden group"
              >
                <span className="relative z-10 group-hover:text-foreground-contrast transition-colors duration-300">Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
              </Button>
            </Link>
            <Link href="#about">
              <Button 
                variant="ghost" 
                className="text-sm rounded-full px-4 relative overflow-hidden group"
              >
                <span className="relative z-10 group-hover:text-foreground-contrast transition-colors duration-300">About</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
              </Button>
            </Link>
            <Link href="#faq">
              <Button 
                variant="ghost" 
                className="text-sm rounded-full px-4 relative overflow-hidden group"
              >
                <span className="relative z-10 group-hover:text-foreground-contrast transition-colors duration-300">FAQ</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
              </Button>
            </Link>
            <div className="pl-2 border-l border-purple-500/20 ml-1">
              <ThemeSwitcher />
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu - simplified for better performance */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-b border-purple-500/10 w-full">
          <div className="px-4 py-3 flex flex-col gap-1 max-w-[2000px] mx-auto">
            <Link href="#projects" onClick={() => setIsMenuOpen(false)}>
              <Button 
                variant="ghost" 
                className="text-sm w-full justify-start relative overflow-hidden group"
              >
                <span className="relative z-10 group-hover:text-foreground-contrast transition-colors duration-300">Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Button>
            </Link>
            <Link href="#about" onClick={() => setIsMenuOpen(false)}>
              <Button 
                variant="ghost" 
                className="text-sm w-full justify-start relative overflow-hidden group"
              >
                <span className="relative z-10 group-hover:text-foreground-contrast transition-colors duration-300">About</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Button>
            </Link>
            <Link href="#faq" onClick={() => setIsMenuOpen(false)}>
              <Button 
                variant="ghost" 
                className="text-sm w-full justify-start relative overflow-hidden group"
              >
                <span className="relative z-10 group-hover:text-foreground-contrast transition-colors duration-300">FAQ</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Button>
            </Link>
            <div className="pt-2 mt-1 border-t border-purple-500/10 flex justify-end">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 