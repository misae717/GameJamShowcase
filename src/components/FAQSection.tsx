"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Lightbulb } from "lucide-react";

const faqs = [
  {
    question: "What is a Game Jam?",
    answer:
      "A Game Jam is an event where participants create video games collaboratively. Teams work together to design, develop, and present games based on specific themes or concepts. It's a great opportunity to learn new skills, meet like-minded people, and have fun creating games!",
  },
  {
    question: "Do I need prior experience to participate?",
    answer:
      "No prior experience is required! Game Jams are perfect for beginners and experienced developers alike. We welcome all skill levels and provide resources to help you succeed.",
  },
  {
    question: "What kind of games can I make?",
    answer:
      "You can create any type of game you want - 2D, 3D, mobile, PC, web-based, or even board games! The only requirement is that your game should incorporate the theme or concept of the project you choose.",
  },
  {
    question: "Do I need to be a member of the GDC?",
    answer:
      "No, anyone can join! While we encourage becoming a member of the Game Development Club for regular activities, the Game Jam is open to all interested participants regardless of membership status, just make sure you join the discord.",
  },
  {
    question: "How are teams formed?",
    answer:
      "You can form your own team with friends or join as an individual and we'll help match you with a team. Teams typically consist of 2-5 members with a mix of skills including programming, art, design, and audio.",
  },
  {
    question: "What tools or engines should I use?",
    answer:
      "You're free to use any game development tools or engines you're comfortable with. Popular options include Unity, Unreal Engine, Godot, GameMaker Studio, or web technologies like HTML5 and JavaScript.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-28 relative w-full">
      {/* Section divider - top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-20" />
      
      {/* Minimal background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background pointer-events-none" />
      
      {/* More colorful accent gradients - but static instead of animated */}
      <div className="absolute left-1/4 bottom-1/3 w-[30vw] max-w-[400px] h-[30vh] max-h-[400px] rounded-full blur-3xl bg-blue-500/10 opacity-30 pointer-events-none" />
      <div className="absolute right-1/4 top-1/3 w-[30vw] max-w-[400px] h-[30vh] max-h-[400px] rounded-full blur-3xl bg-purple-500/10 opacity-30 pointer-events-none" />
      
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto">
        <div className="relative z-10 max-w-[2000px] mx-auto">
          <div className="space-y-4 text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20 shadow-md hover:from-blue-500/30 hover:to-purple-500/30 transition-colors group">
              <HelpCircle className="h-4 w-4 text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Frequently Asked Questions</span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-primary hover:bg-[size:200%] transition-all duration-700 hover:from-primary hover:via-purple-500 hover:to-blue-500 drop-shadow-sm">
              Got Questions?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl">
              Find answers to common questions about our Game Jam and how to participate.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/90 rounded-xl border border-blue-500/10 shadow-lg overflow-hidden group transition-all hover:border-blue-500/20 hover:shadow-blue-500/5"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium hover:no-underline group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-blue-500/5 group-data-[state=open]:to-purple-500/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-500/10 text-primary shrink-0 transition-colors group-hover:bg-blue-500/20 group-data-[state=open]:bg-gradient-to-br group-data-[state=open]:from-blue-500/15 group-data-[state=open]:to-purple-500/15">
                        <HelpCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-muted-foreground">
                    <div className="flex gap-3">
                      <div className="h-6 w-6 rounded-full flex items-center justify-center bg-primary/10 text-primary shrink-0 mt-1 group-data-[state=open]:animate-pulse">
                        <Lightbulb className="h-3 w-3" />
                      </div>
                      <div className="group-data-[state=open]:text-foreground/80 transition-colors">
                        {faq.answer}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      
      {/* Section divider - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-20" />
    </section>
  );
} 