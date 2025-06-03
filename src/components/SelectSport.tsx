
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Card } from "@/components/Card";
import sportsLeagues from "@/data/sports-leagues.json";
import { cn } from "@/lib/utils";

interface SelectSportProps {
  onSelectSport: (sport: string) => void;
  className?: string;
}

export const SelectSport = ({ onSelectSport, className }: SelectSportProps) => {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const sports = Object.keys(sportsLeagues);
  
  const handleSportSelect = (sport: string) => {
    setSelectedSport(sport);
    onSelectSport(sport);
    setIsDropdownOpen(false);
  };
  
  // Sports icons mapping
  const sportIcons: Record<string, string> = {
    "Fútbol": "⚽",
    "Fútbol Americano": "🏈",
    "F1": "🏎️",
    "Basket Ball": "🏀",
    "Base Ball": "⚾",
    "Combates": "🥊"
  };
  
  return (
    <div className={cn("relative", className)}>
      {/* Desktop View (Cards) */}
      <div className="hidden md:grid grid-cols-6 gap-4">
        {sports.map(sport => (
          <Card 
            key={sport}
            variant={selectedSport === sport ? "accent" : "default"}
            className={cn(
              "p-3 cursor-pointer text-center transition-all duration-200",
              selectedSport === sport ? "glow-orange" : "hover:scale-105"
            )}
            onClick={() => handleSportSelect(sport)}
          >
            <div className="text-2xl mb-2">{sportIcons[sport] || "🎮"}</div>
            <p className="text-sm font-medium truncate">{sport}</p>
          </Card>
        ))}
      </div>
      
      {/* Mobile View (Dropdown) */}
      <div className="md:hidden">
        <button 
          type="button"
          className="w-full flex items-center justify-between p-4 rounded-md border border-[color:var(--c-divider)] bg-[color:var(--c-bg-secondary)]"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedSport ? (
            <span className="flex items-center">
              <span className="mr-2">{sportIcons[selectedSport] || "🎮"}</span>
              {selectedSport}
            </span>
          ) : (
            "Seleccionar Deporte"
          )}
          <ChevronDown className={cn(
            "w-5 h-5 transition-transform",
            isDropdownOpen && "transform rotate-180"
          )} />
        </button>
        
        {isDropdownOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg border border-[color:var(--c-divider)] bg-[color:var(--c-bg-secondary)] overflow-hidden">
            {sports.map(sport => (
              <button
                key={sport}
                className={cn(
                  "w-full text-left px-4 py-3 flex items-center hover:bg-[color:var(--c-divider)]",
                  selectedSport === sport && "bg-black/20"
                )}
                onClick={() => handleSportSelect(sport)}
              >
                <span className="mr-2">{sportIcons[sport] || "🎮"}</span>
                {sport}
                {selectedSport === sport && (
                  <Check className="w-4 h-4 ml-auto text-[color:var(--c-accent)]" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
