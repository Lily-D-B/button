import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-foreground mb-2">
            Counter App
          </h1>
          <p className="text-xl text-muted-foreground">
            Click the button to count up!
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="text-8xl font-bold text-primary font-mono bg-gradient-secondary rounded-lg p-8 shadow-glow">
            {count}
          </div>
          
          <Button 
            variant="counter" 
            size="lg" 
            onClick={incrementCount}
            className="text-lg px-12 py-6 h-auto font-semibold"
          >
            Count Up! 🚀
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
