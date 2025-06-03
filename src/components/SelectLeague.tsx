
import { useState, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";
import sportsLeagues from "@/data/sports-leagues.json";
import { cn } from "@/lib/utils";

interface SelectLeagueProps {
  sportSelected: string | null;
  onSelectLeague: (league: string) => void;
  className?: string;
}

export const SelectLeague = ({
  sportSelected,
  onSelectLeague,
  className
}: SelectLeagueProps) => {
  const [leagues, setLeagues] = useState<string[]>([]);
  const [selectedLeague, setSelectedLeague] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Update leagues when sport changes
  useEffect(() => {
    if (sportSelected && sportSelected in sportsLeagues) {
      // Type assertion since we know it's in the data structure
      const sportLeagues = (sportsLeagues as Record<string, string[]>)[sportSelected];
      setLeagues(sportLeagues || []);
      setSelectedLeague(null);
    } else {
      setLeagues([]);
      setSelectedLeague(null);
    }
  }, [sportSelected]);
  
  const handleLeagueSelect = (league: string) => {
    setSelectedLeague(league);
    onSelectLeague(league);
    setIsDropdownOpen(false);
  };
  
  // If no sport selected, show disabled state
  if (!sportSelected) {
    return (
      <div className={cn("w-full", className)}>
        <button 
          disabled
          type="button"
          className="w-full flex items-center justify-between p-4 rounded-md border border-[color:var(--c-divider)] bg-[color:var(--c-bg-secondary)] opacity-50 cursor-not-allowed"
        >
          Seleccionar Deporte Primero
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    );
  }
  
  return (
    <div className={cn("relative", className)}>
      <button 
        type="button"
        className="w-full flex items-center justify-between p-4 rounded-md border border-[color:var(--c-divider)] bg-[color:var(--c-bg-secondary)] hover:border-[color:var(--c-accent)] transition-colors"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedLeague ? selectedLeague : `Ligas de ${sportSelected}`}
        <ChevronDown className={cn(
          "w-5 h-5 transition-transform",
          isDropdownOpen && "transform rotate-180"
        )} />
      </button>
      
      {isDropdownOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg border border-[color:var(--c-divider)] bg-[color:var(--c-bg-secondary)] overflow-auto max-h-64">
          {leagues.map(league => (
            <button
              key={league}
              className={cn(
                "w-full text-left px-4 py-3 flex items-center hover:bg-[color:var(--c-divider)] transition-colors",
                selectedLeague === league && "bg-black/20"
              )}
              onClick={() => handleLeagueSelect(league)}
            >
              {league}
              {selectedLeague === league && (
                <Check className="w-4 h-4 ml-auto text-[color:var(--c-accent)]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
