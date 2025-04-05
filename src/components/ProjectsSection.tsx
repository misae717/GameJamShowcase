"use client";

import { motion } from "framer-motion";
import { gameProjects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 overflow-hidden w-full"
    >
      {/* Section divider - top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-20" />
      
      {/* Simple, subtle section transitions */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-[linear-gradient(to_top,rgba(0,0,0,0),rgba(0,0,0,0.01),rgba(0,0,0,0.02))] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.01),rgba(0,0,0,0.02))] pointer-events-none z-10" />
      
      {/* Section divider - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-20" />
      
      {/* Minimal background with slight texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background pointer-events-none" />
      
      {/* Subtle accents - reduced in opacity and size */}
      <div className="absolute -top-[30%] right-[5%] w-[30vw] max-w-[500px] h-[30vh] max-h-[400px] rounded-full blur-3xl bg-primary/3 opacity-20 pointer-events-none" />
      <div className="absolute -bottom-[30%] left-[5%] w-[30vw] max-w-[500px] h-[30vh] max-h-[400px] rounded-full blur-3xl bg-primary/3 opacity-20 pointer-events-none" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto relative z-20">
        <div className="max-w-[2000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-center mb-20"
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/10 shadow-md hover:from-primary/20 hover:to-purple-500/20 hover:border-primary/20 hover:shadow-primary/10 transition-all duration-300 group">
              <div className="h-4 w-4 relative">
                <Image
                  src="/Logos/GDCLogo.png"
                  alt="Game Development Club Logo"
                  width={16}
                  height={16}
                  className="object-contain transition-transform duration-300 group-hover:rotate-12"
                />
              </div>
              <span className="text-sm font-medium text-primary group-hover:text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500 transition-all duration-300">Browse Projects</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500 drop-shadow-sm hover:bg-[size:200%] transition-all duration-700 hover:from-blue-500 hover:via-purple-500 hover:to-primary">
              Game Jam Projects
            </h2>
            
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl hover:text-foreground/80 transition-colors duration-300">
              Browse through the exciting game development projects and sign up for the one that interests you most.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
            {gameProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:z-20"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex gap-2 items-center justify-center rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <span>Show more projects coming soon</span>
              <div className="h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-[8px] font-semibold group-hover:scale-110 transition-transform duration-300">+</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 