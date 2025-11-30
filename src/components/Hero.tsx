import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-wider uppercase text-accent">
                New Collection
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Premium Products
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Crafted for You
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Discover our curated collection of premium products designed to elevate your everyday life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:shadow-hover transition-all duration-300"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="hover:bg-secondary transition-colors"
              >
                View Collection
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/40">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={heroBanner} 
                alt="Premium Products" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-hover border border-border/50 backdrop-blur-sm animate-scale-in">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl">🎉</span>
                </div>
                <div>
                  <div className="font-semibold">Free Shipping</div>
                  <div className="text-sm text-muted-foreground">On orders over ₹8,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
