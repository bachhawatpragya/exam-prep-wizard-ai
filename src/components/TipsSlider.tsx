
import { useState, useEffect, useRef } from "react";
import { studyTips, Tip } from "@/data/studyTips";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TipsSlider = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideIntervalRef = useRef<number | null>(null);

  const nextTip = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentTip((prev) => (prev + 1) % studyTips.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevTip = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentTip((prev) => (prev - 1 + studyTips.length) % studyTips.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToTip = (index: number) => {
    if (!isTransitioning && index !== currentTip) {
      setIsTransitioning(true);
      setCurrentTip(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    // Start the automatic slider
    slideIntervalRef.current = window.setInterval(() => {
      nextTip();
    }, 6000);
    
    // Clean up on component unmount
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, []);

  // Reset interval when manually changing slides
  const resetInterval = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = window.setInterval(() => {
        nextTip();
      }, 6000);
    }
  };

  const handleManualNav = (action: () => void) => {
    action();
    resetInterval();
  };

  return (
    <div className="relative w-full h-full">
      <div className="tip-slider h-full">
        {studyTips.map((tip: Tip, index: number) => (
          <div
            key={tip.id}
            className={`${
              index === currentTip
                ? "opacity-100 translate-y-0 scale-100 rotate-0 pointer-events-auto"
                : "opacity-0 translate-y-4 scale-95 rotate-3 pointer-events-none"
            } absolute inset-0 flex flex-col items-center text-center p-6 transition-all duration-500 ease-in-out`}
          >
            <div className="p-3 mb-4 rounded-full bg-accent/30">
              <div className="flex items-center justify-center w-12 h-12 text-2xl bg-gradient-to-r from-exam-primary to-exam-secondary text-white rounded-full">
                {tip.icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gradient">{tip.title}</h3>
            <p className="text-foreground/80 text-sm md:text-base">{tip.description}</p>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center w-full px-6 py-4 border-t border-border">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-8 w-8 p-0 flex items-center justify-center"
          onClick={() => handleManualNav(prevTip)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex gap-1">
          {studyTips.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTip 
                  ? "bg-primary scale-125" 
                  : "bg-muted hover:bg-primary/50"
              }`}
              onClick={() => handleManualNav(() => goToTip(index))}
              aria-label={`Go to tip ${index + 1}`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-8 w-8 p-0 flex items-center justify-center"
          onClick={() => handleManualNav(nextTip)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TipsSlider;
