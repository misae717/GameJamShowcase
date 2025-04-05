"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { GameProject } from "@/lib/types";
import { ArrowUpRight, Users } from "lucide-react";
import { ProjectSignUpModal } from "./ProjectSignUpModal";
import { getImageUrl } from "@/lib/utils";

interface ProjectCardProps {
  project: GameProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to get difficulty color
  const getDifficultyColor = () => {
    switch(project.difficulty) {
      case "Beginner": return "text-green-500";
      case "Beginner / Intermediate": return "text-green-500";
      case "Intermediate": return "text-amber-500";
      case "Advanced": return "text-red-500";
      default: return "text-amber-500";
    }
  };

  return (
    <>
      <Card className="border-primary/10 dark:border-purple-500/30 shadow-md transition-all duration-300 hover:shadow-xl dark:hover:shadow-purple-800/30 bg-card/90 dark:bg-card/90 light:bg-card backdrop-blur-sm group w-full h-full flex flex-col p-0 overflow-hidden">
        {/* Image container with all overlays in a single container */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          {/* The main image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={project.image || "https://placehold.co/1600x900/3b82f6/ffffff?text=Game+Project"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
              priority
            />
          </div>

          {/* Static gradient overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-background/70 pointer-events-none" />
          
          {/* Hover effect overlay - appears on hover */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-40 dark:group-hover:opacity-40 dark:from-primary/20 dark:to-blue-500/20 light:group-hover:opacity-20 transition-opacity pointer-events-none" />
          
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <Badge variant="outline" className="bg-background/90 dark:bg-background/70 dark:border-primary/40 light:bg-background border-primary/20 text-foreground font-medium shadow-sm">
              {project.category}
            </Badge>
          </div>
          
          {/* Difficulty badge */}
          <div className="absolute bottom-3 right-3">
            <Badge variant="outline" className="bg-background/90 dark:bg-background/70 dark:border-primary/40 light:bg-background border-primary/20 text-foreground shadow-sm flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-current"></div>
              <span className={getDifficultyColor()}>{project.difficulty}</span>
            </Badge>
          </div>
          
          {/* Club logo watermark */}
          <div className="absolute top-3 right-3 opacity-70 group-hover:opacity-100 transition-opacity">
            <Image
              src={getImageUrl("/Logos/GDCLogo.png")}
              alt="Game Development Club Logo"
              width={32}
              height={32}
              className="object-contain drop-shadow-md hover:scale-110 transition-transform duration-300"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
        </div>
        
        <CardContent className="flex-grow p-5 mt-6 space-y-3">
          <h3 className="font-bold text-xl leading-tight dark:text-purple-100 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground dark:text-muted-foreground light:text-foreground/80 line-clamp-2 text-sm">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal text-xs bg-secondary/50 dark:bg-secondary/50 dark:border-purple-500/20 dark:text-purple-100 light:bg-secondary/90">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="secondary" className="font-normal text-xs bg-secondary/50 dark:bg-secondary/50 dark:border-purple-500/20 dark:text-purple-100 light:bg-secondary/90">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
          
          <div className="pt-3 flex items-center justify-start text-sm text-muted-foreground dark:text-muted-foreground dark:text-purple-300/80 light:text-foreground/70">
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              <span>{project.teamSize || "4-6"}</span>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span>ETA:</span>
              <span className="font-medium text-primary dark:text-purple-300">{project.duration}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="px-5 pb-5 pt-0">
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-gradient-to-r from-primary/90 to-purple-600/90 hover:from-primary hover:to-purple-600 dark:from-purple-600 dark:to-blue-600 dark:hover:from-purple-500 dark:hover:to-blue-500 dark:shadow-lg dark:shadow-purple-900/20 group transition-all duration-300"
          >
            <span>View Project</span>
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </CardFooter>
      </Card>
      
      <ProjectSignUpModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 