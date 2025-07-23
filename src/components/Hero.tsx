import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="hero-glow absolute top-1/4 left-1/4 w-96 h-96 rounded-full float"></div>
        <div className="hero-glow absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full float" style={{ animationDelay: '-3s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center fade-in">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-sm">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-gradient-primary font-medium">Digital Marketing Excellence</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          Grow Your Brand with{" "}
          <span className="hero-text">Digital Innovation</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          We transform businesses through strategic digital marketing and social media campaigns that drive real results. Ready to amplify your online presence?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto border-primary/30 hover:border-primary"
          >
            View Our Work
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-gradient-primary">500+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-gradient-primary">200%</div>
            <div className="text-muted-foreground">Average ROI Increase</div>
          </div>
          <div className="slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold text-gradient-primary">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
          <div className="slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl font-bold text-gradient-primary">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;