
import { X, ChevronUp, ChevronDown, Trash2 } from "lucide-react";
import { useState } from "react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

interface Pick {
  eventId: string;
  event: string;
  selection: 'home' | 'draw' | 'away';
  selectionName: string;
  odds: number;
}

interface MultiPickTrayProps {
  picks: Pick[];
  onRemovePick: (eventId: string) => void;
  onClearAll: () => void;
}

export const MultiPickTray = ({ picks, onRemovePick, onClearAll }: MultiPickTrayProps) => {
  const [isOpen, setIsOpen] = useState(true);
  
  // Calculate total odds
  const totalOdds = picks.reduce((acc, pick) => acc * pick.odds, 1);
  
  if (picks.length === 0) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-4">
        <Card className={cn(
          "rounded-b-none border-b-0 transition-all duration-300 shadow-lg",
          isOpen ? "rounded-t-lg" : "rounded-t-xl"
        )}>
          {/* Header */}
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[color:var(--c-accent)] flex items-center justify-center text-xs">
                {picks.length}
              </div>
              <h3 className="font-medium">Multi-Pick</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <span className="text-sm text-[color:var(--c-text-secondary)]">Cuota Total:</span>
                <span className="ml-2 text-lg font-mono-title font-bold text-[color:var(--c-highlight)]">
                  {totalOdds.toFixed(2)}x
                </span>
              </div>
              <button
                className="text-[color:var(--c-text-secondary)] hover:text-[color:var(--c-error)] transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  onClearAll();
                }}
              >
                <Trash2 className="w-4 h-4" />
              </button>
              {isOpen ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronUp className="w-5 h-5" />
              )}
            </div>
          </div>
          
          {/* Content */}
          {isOpen && (
            <div className="p-4 pt-0 border-t border-[color:var(--c-divider)]">
              <div className="max-h-60 overflow-y-auto space-y-2 mb-4">
                {picks.map((pick) => (
                  <div 
                    key={pick.eventId}
                    className="flex items-center justify-between bg-[color:var(--c-bg-primary)]/50 p-3 rounded"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium truncate">{pick.event}</p>
                      <p className="text-xs text-[color:var(--c-text-secondary)]">
                        {pick.selectionName} <span className="ml-2 text-[color:var(--c-highlight)]">{pick.odds.toFixed(2)}</span>
                      </p>
                    </div>
                    <button
                      onClick={() => onRemovePick(pick.eventId)}
                      className="text-[color:var(--c-text-secondary)] hover:text-[color:var(--c-error)] ml-3"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="md:hidden">
                  <span className="text-sm text-[color:var(--c-text-secondary)]">Cuota Total:</span>
                  <span className="ml-2 text-lg font-mono-title font-bold text-[color:var(--c-highlight)]">
                    {totalOdds.toFixed(2)}x
                  </span>
                </div>
                
                <div className="flex items-center gap-3 ml-auto">
                  <input
                    type="number"
                    placeholder="Monto"
                    className="w-24 p-2 bg-[color:var(--c-bg-primary)]/50 border border-[color:var(--c-divider)] rounded focus:outline-none focus:border-[color:var(--c-accent)]"
                  />
                  <button className="btn-primary py-2">
                    Apostar
                  </button>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};
