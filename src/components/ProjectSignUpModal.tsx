"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, CalendarClock, Users, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GameProject } from "@/lib/types";
import { getImageUrl } from "@/lib/utils";

interface ProjectSignUpModalProps {
  project: GameProject;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSignUpModal({ project, isOpen, onClose }: ProjectSignUpModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Check if we're in the browser
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (!isMounted) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isMounted]);

  if (!isOpen || !isMounted) return null;

  // Use portal to render modal at the root level
  return createPortal(
    <div className="modal-portal">
      <style jsx global>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          z-index: 999999;
        }

        /* Light mode adjustments */
        :global(.light) .modal-overlay {
          background-color: rgba(0, 0, 0, 0.5);
        }

        .modal-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000000;
          padding: 1rem;
        }

        body.modal-open {
          overflow: hidden;
        }
        
        .shiny-border {
          position: relative;
          border-radius: 0.75rem;
          overflow: hidden;
        }
        
        .shiny-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, 
            rgba(123, 97, 255, 0.5), 
            rgba(159, 122, 234, 0.2), 
            rgba(217, 70, 239, 0.5), 
            rgba(123, 97, 255, 0.2)
          );
          border-radius: 0.75rem;
          z-index: -1;
          animation: borderAnimation 4s linear infinite;
        }

        /* Improve border visibility in light mode */
        :global(.light) .shiny-border::before {
          background: linear-gradient(45deg, 
            rgba(123, 97, 255, 0.8), 
            rgba(159, 122, 234, 0.5), 
            rgba(217, 70, 239, 0.8), 
            rgba(123, 97, 255, 0.5)
          );
        }
        
        /* Enhanced border for dark mode */
        :global(.dark) .shiny-border::before {
          background: linear-gradient(45deg, 
            rgba(123, 97, 255, 0.8), 
            rgba(159, 122, 234, 0.6), 
            rgba(217, 70, 239, 0.8), 
            rgba(72, 149, 255, 0.6)
          );
          filter: brightness(1.2) saturate(1.4);
        }
        
        @keyframes borderAnimation {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 300% 300%;
          }
        }
        
        .glow-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .glow-button::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          bottom: -2px;
          right: -2px;
          z-index: -1;
          background: linear-gradient(-45deg, #7c3aed, #4f46e5, #7c3aed, #d946ef);
          background-size: 400% 400%;
          animation: gradientBG 3s ease infinite;
          border-radius: 0.5rem;
        }
        
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      {/* Backdrop */}
      <div className="modal-overlay" onClick={onClose} />

      {/* Modal container */}
      <div className="modal-container">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-4xl rounded-xl shiny-border"
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: "calc(100vh - 2rem)", display: "flex", flexDirection: "column" }}
            >
              <div className="bg-background shadow-2xl flex flex-col rounded-xl overflow-hidden relative">
                {/* Top decorative color bands */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-purple-500 to-blue-500"></div>
                
                {/* Club logo */}
                <div className="absolute top-6 right-20 z-40 bg-background/80 rounded-full p-1 backdrop-blur-sm shadow-md dark:shadow-primary/20 dark:bg-background/60">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={getImageUrl("/Logos/GDCLogo.png")}
                      alt="Game Development Club Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Close button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-4 top-4 z-50 hover:bg-white/10 hover:text-primary dark:text-purple-300 dark:hover:text-purple-200"
                  onClick={onClose}
                >
                  <X className="h-4 w-4" />
                </Button>

                {/* Project info header */}
                <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 p-6 md:p-8 pt-16 dark:bg-opacity-20 dark:from-primary/30 dark:to-purple-500/30 dark:via-blue-500/20 light:bg-opacity-90">
                  <Badge
                    variant="outline"
                    className="mb-2 border-primary/30 bg-background/70 dark:bg-background/50 dark:border-primary/50 light:bg-background/95 text-foreground font-medium"
                  >
                    {project.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500 dark:from-primary dark:via-purple-400 dark:to-blue-400 light:from-primary/90 light:via-purple-500/90 light:to-blue-500/90 light:text-primary">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-foreground/80 light:text-foreground/95">{project.description}</p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {project.tags.map((tag: string) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-background/70 dark:bg-background/40 dark:border-primary/20 light:bg-background/95 font-normal text-foreground/90 light:text-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div
                  className="overflow-y-auto custom-scrollbar bg-gradient-to-b from-background to-background/95 dark:from-background dark:to-background/95 light:from-background light:to-background"
                  style={{ maxHeight: "calc(100vh - 12rem)" }}
                >
                  {/* Project gallery */}
                  <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-primary/20 shadow-md group">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                      <Image
                        src={project.image || "https://placehold.co/600x400/3b82f6/ffffff?text=Game+Screenshot"}
                        alt={`${project.title} screenshot 1`}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-primary/20 shadow-md group">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                      <Image
                        src={project.secondaryImage || "https://placehold.co/600x400/8b5cf6/ffffff?text=Game+Concept"}
                        alt={`${project.title} screenshot 2`}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="px-6 md:px-8 pb-8">
                    <div className="flex flex-wrap gap-8 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10 text-primary dark:bg-primary/20 dark:text-purple-300">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Team Size</div>
                          <div className="font-medium text-foreground">{project.teamSize || "4-6 members"}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full flex items-center justify-center bg-purple-500/10 text-purple-500 dark:bg-purple-500/20 dark:text-purple-300">
                          <CalendarClock className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Estimated Time</div>
                          <div className="font-medium text-foreground">{project.duration || "5 days"}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden bg-blue-500/10 flex items-center justify-center text-blue-500 dark:bg-blue-500/20 dark:text-blue-300">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Mentor</div>
                          <div className="font-medium text-foreground">{project.mentor || project.coordinator || "Game Dev Club"}</div>
                        </div>
                      </div>
                    </div>

                    {/* Project description */}
                    <div className="bg-card/50 dark:bg-card/80 dark:border-purple-500/30 rounded-xl p-6 border border-primary/10 mb-8">
                      <h3 className="text-lg font-semibold mb-3 text-foreground dark:text-purple-100">About This Project</h3>
                      <div className="space-y-4">
                        <p className="text-foreground/90 leading-relaxed text-base">
                          {project.description}
                        </p>
                        <div className="text-foreground/70 text-sm italic bg-background/40 p-3 rounded-md border border-primary/5 dark:bg-background/20">
                          This project is part of the Alfaisal University Game Development Club's Game Jam event. 
                          We're looking for passionate individuals to join our team and bring this game to life!
                        </div>
                      </div>
                      <div className="mt-5 space-y-2 pt-2 border-t border-primary/10">
                        <div className="flex items-start gap-2">
                          <div className="min-w-2 h-2 w-2 rounded-full bg-primary mt-2 dark:bg-purple-400"></div>
                          <p className="text-foreground/80">
                            <span className="font-medium text-foreground dark:text-purple-200">Level:</span> {project.difficulty || "Intermediate"}
                          </p>
                        </div>
                        {project.gameEngine && (
                          <div className="flex items-start gap-2">
                            <div className="min-w-2 h-2 w-2 rounded-full bg-purple-500 mt-2 dark:bg-blue-400"></div>
                            <p className="text-foreground/80">
                              <span className="font-medium text-foreground dark:text-purple-200">Engine:</span> {project.gameEngine}
                            </p>
                          </div>
                        )}
                        {project.gameType && (
                          <div className="flex items-start gap-2">
                            <div className="min-w-2 h-2 w-2 rounded-full bg-blue-500 mt-2 dark:bg-indigo-400"></div>
                            <p className="text-foreground/80">
                              <span className="font-medium text-foreground dark:text-purple-200">Type:</span> {project.gameType}
                            </p>
                          </div>
                        )}
                        {project.genre && (
                          <div className="flex items-start gap-2">
                            <div className="min-w-2 h-2 w-2 rounded-full bg-teal-500 mt-2 dark:bg-teal-400"></div>
                            <p className="text-foreground/80">
                              <span className="font-medium text-foreground dark:text-purple-200">Genre:</span> {project.genre}
                            </p>
                          </div>
                        )}
                        {project.desiredRoles && (
                          <div className="flex items-start gap-2">
                            <div className="min-w-2 h-2 w-2 rounded-full bg-green-500 mt-2 dark:bg-green-400"></div>
                            <p className="text-foreground/80">
                              <span className="font-medium text-foreground dark:text-purple-200">Looking for:</span> {project.desiredRoles}
                            </p>
                          </div>
                        )}
                        {project.inspiration && (
                          <div className="flex items-start gap-2">
                            <div className="min-w-2 h-2 w-2 rounded-full bg-amber-500 mt-2 dark:bg-amber-400"></div>
                            <p className="text-foreground/80">
                              <span className="font-medium text-foreground dark:text-purple-200">Inspiration:</span> {project.inspiration}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Sign up button */}
                    <div className="flex justify-center">
                      <a 
                        href={project.spreadsheetLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <div className="glow-button">
                          <Button
                            size="lg"
                            className="relative px-8 py-6 text-base font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 dark:from-purple-600 dark:to-blue-600 dark:hover:from-purple-500 dark:hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-purple-500/20 group"
                          >
                            <span className="mr-2">Sign Up For This Project</span>
                            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>,
    document.body
  );
} 