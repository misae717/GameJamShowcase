"use client";

import { motion } from "framer-motion";
import { Users, Gamepad, Award, ArrowRight, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-28 relative w-full">
      {/* Section divider - top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-20" />
      
      {/* Simple, subtle section transition */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-[linear-gradient(to_top,rgba(0,0,0,0),rgba(0,0,0,0.01),rgba(0,0,0,0.02))] pointer-events-none" />
      
      {/* Minimal background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background pointer-events-none" />
      
      {/* Very subtle accents - reduced significantly */}
      <div className="absolute right-0 top-1/4 w-[30vw] max-w-[400px] h-[30vh] max-h-[400px] rounded-full blur-3xl bg-primary/3 opacity-10 pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[30vw] max-w-[400px] h-[30vh] max-h-[400px] rounded-full blur-3xl bg-purple-500/3 opacity-10 pointer-events-none" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto">
        <div className="relative z-10 max-w-[2000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center mb-16"
          >
            <Badge 
              variant="outline" 
              className="px-3.5 py-1.5 border-primary/20 bg-gradient-to-r from-primary/5 to-purple-500/5 text-primary shadow-md hover:from-primary/10 hover:to-purple-500/10 transition-all duration-300"
            >
              About Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500 hover:bg-[size:200%] transition-all duration-500 hover:from-blue-500 hover:via-purple-500 hover:to-primary">
              Game Development at Alfaisal
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl">
              Learn more about the Alfaisal University Game Development Club and our Game Jam event.
            </p>
          </motion.div>
          
          <div className="grid gap-10 md:grid-cols-2 relative px-4 sm:px-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-primary/10 to-transparent md:hidden" />
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 w-full"
            >
              <div className="inline-flex items-center gap-2 border border-primary/20 bg-gradient-to-r from-primary/5 to-purple-500/5 p-2 pr-4 rounded-full shadow-md hover:shadow-primary/20 hover:from-primary/10 hover:to-purple-500/10 transition-all duration-300 group">
                <Avatar className="h-8 w-8 border-2 border-background group-hover:rotate-6 transition-transform duration-300">
                  <AvatarImage src="https://placehold.co/200x200/3b82f6/ffffff?text=GDC" alt="Game Dev Club" />
                  <AvatarFallback>GD</AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm group-hover:text-primary transition-colors duration-300">The Game Development Club</span>
              </div>
              <Card className="border-primary/10 bg-card/50 backdrop-blur-sm shadow-lg w-full hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors duration-300">
                      <Users className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary group-hover:from-primary group-hover:to-purple-500 transition-all duration-300">Community of Creators</h3>
                      <p className="text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors duration-300">
                        The Alfaisal University Game Development Club is a community of passionate
                        game developers, artists, designers, and storytellers who come together to
                        create amazing games and share knowledge.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/15 transition-colors duration-300">
                      <Gamepad className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-purple-500 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">All Skill Levels Welcome</h3>
                      <p className="text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors duration-300">
                        We welcome members of all skill levels, from beginners to experienced
                        developers. Our club hosts regular workshops, game jams, and social events
                        to help members improve their skills and connect with others.
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="link" className="gap-1 pl-0 text-primary hover:text-purple-500 transition-colors group" asChild>
                    <a href="https://discord.gg/Xt4zcedDXa" target="_blank" rel="noopener noreferrer">
                      <span>Join our Discord community</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6 w-full"
            >
              <div className="inline-flex items-center gap-2 border border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-blue-500/5 p-2 pr-4 rounded-full shadow-md hover:shadow-purple-500/20 hover:from-purple-500/10 hover:to-blue-500/10 transition-all duration-300 group">
                <Avatar className="h-8 w-8 border-2 border-background group-hover:rotate-6 transition-transform duration-300">
                  <AvatarImage src="https://placehold.co/200x200/8b5cf6/ffffff?text=GJ" alt="Game Jam" />
                  <AvatarFallback>GJ</AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm group-hover:text-purple-500 transition-colors duration-300">The Game Jam Event</span>
              </div>
              <Card className="border-purple-500/10 bg-card/50 backdrop-blur-sm shadow-lg w-full hover:shadow-purple-500/5 hover:border-purple-500/20 transition-all duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/15 transition-colors duration-300">
                      <Award className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-blue-500 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">Exciting Competition</h3>
                      <p className="text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors duration-300">
                        Our Game Jam is an exciting event where participants form teams to create
                        games based on a specific theme within a limited timeframe. It's an excellent
                        opportunity to challenge your creativity and collaborate with others.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary" className="hover:bg-purple-500/80 hover:text-white transition-colors duration-300 group-hover:translate-y-[-2px] transform transition-transform">Creativity</Badge>
                    <Badge variant="secondary" className="hover:bg-blue-500/80 hover:text-white transition-colors duration-300 group-hover:translate-y-[-2px] transform transition-transform">Teamwork</Badge>
                    <Badge variant="secondary" className="hover:bg-primary/80 hover:text-white transition-colors duration-300 group-hover:translate-y-[-2px] transform transition-transform">Problem Solving</Badge>
                    <Badge variant="secondary" className="hover:bg-purple-500/80 hover:text-white transition-colors duration-300 group-hover:translate-y-[-2px] transform transition-transform">Game Design</Badge>
                    <Badge variant="secondary" className="hover:bg-blue-500/80 hover:text-white transition-colors duration-300 group-hover:translate-y-[-2px] transform transition-transform">Programming</Badge>
                    <Badge variant="secondary" className="hover:bg-primary/80 hover:text-white transition-colors duration-300 group-hover:translate-y-[-2px] transform transition-transform">Art & Animation</Badge>
                  </div>
                  
                  <div className="bg-card/40 p-3 rounded-lg mt-2 border border-purple-500/5 group-hover:border-purple-500/10 group-hover:bg-card/60 transition-all duration-300">
                    <div className="flex gap-2 mb-1 items-center">
                      <Star className="h-4 w-4 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="text-xs font-semibold group-hover:text-purple-500/80 transition-colors duration-300">From previous participants</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic group-hover:text-foreground/80 transition-colors duration-300">
                      "During the Game Jam, teams will work together to design, develop, and
                      present their games. We provide resources, mentorship, and a supportive
                      environment to help you succeed!"
                    </p>
                  </div>

                  <Button variant="default" className="w-full mt-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md group" asChild>
                    <a href="#projects">
                      <span className="mr-2">Register for Game Jam</span>
                      <ArrowRight className="h-4 w-4 inline-block group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Section divider - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-20" />
    </section>
  );
} 