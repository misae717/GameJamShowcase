import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden">
      {/* Main background - respects light/dark mode */}
      <div className="fixed inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95 dark:from-background/95 dark:via-background/90 dark:to-background/95 light:from-background light:via-background light:to-background" />
      
      {/* CSS-based noise texture (no image required) */}
      <div 
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.03] light:opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Dynamic background elements - reduced in size, opacity and subtle colors */}
      <div 
        className="fixed top-0 left-0 w-[30vw] h-[30vh] rounded-full blur-[100px] bg-primary/5 dark:opacity-20 light:opacity-10 animate-blob animation-delay-2000 pointer-events-none" 
        style={{ animationDuration: '20s' }}
      />
      <div 
        className="fixed bottom-0 right-0 w-[30vw] h-[30vh] rounded-full blur-[100px] bg-blue-500/5 dark:opacity-20 light:opacity-10 animate-blob animation-delay-4000 pointer-events-none" 
        style={{ animationDuration: '25s' }}
      />
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vh] rounded-full blur-[120px] bg-purple-500/5 dark:opacity-20 light:opacity-10 animate-blob-slow pointer-events-none" 
        style={{ animationDuration: '30s' }}
      />
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
}
