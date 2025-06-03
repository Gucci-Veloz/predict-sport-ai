
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SlotMachineButtonProps {
  onClick: () => void;
  isAnalyzing: boolean;
  label?: string;
}

export const SlotMachineButton = ({ 
  onClick, 
  isAnalyzing,
  label = "Generar Predicción"
}: SlotMachineButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  
  useEffect(() => {
    if (isPressed) {
      // Automatically reset pressed state after animation
      const timer = setTimeout(() => {
        setIsPressed(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isPressed]);
  
  const handleClick = () => {
    if (!isAnalyzing) {
      setIsPressed(true);
      onClick();
    }
  };
  
  return (
    <button
      onClick={handleClick}
      disabled={isAnalyzing}
      className={cn(
        "relative flex items-center justify-center w-full py-6 px-8 rounded-lg overflow-hidden bg-gradient-to-r from-[#FF6B35] to-[#FDCB6E] shadow-xl transition-all duration-300",
        isAnalyzing ? "animate-glow-pulse" : "hover:scale-[1.02]",
        isPressed && "scale-[0.98] opacity-90"
      )}
      style={{
        perspective: "1000px"
      }}
    >
      <div className="absolute inset-0 bg-black opacity-10 rounded-lg" />
      
      {isAnalyzing ? (
        <div className="flex flex-col items-center">
          <div className="flex justify-center mb-3">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className={cn(
                  "w-14 h-16 mx-1 perspective-box bg-[color:var(--c-bg-secondary)] border-2 border-white/10 rounded shadow-inner flex items-center justify-center text-2xl font-mono-title font-bold",
                  "animate-slot-spin"
                )}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                ?
              </div>
            ))}
          </div>
          <span className="text-white font-semibold">Analizando datos...</span>
        </div>
      ) : (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xl transform rotate-12">
            🎲
          </div>
          <span className="text-xl font-mono-title font-bold text-white">
            {label}
          </span>
        </div>
      )}
    </button>
  );
};
