
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/Card";

interface Event {
  id: string;
  date: string;
  time: string;
  home: string;
  away: string;
  homeOdds: number;
  drawOdds?: number;
  awayOdds: number;
}

interface EventListProps {
  events: Event[];
  onSelectEvent: (eventId: string, selection: 'home' | 'draw' | 'away') => void;
  selectedEvents: Record<string, 'home' | 'draw' | 'away'>;
}

export const EventList = ({ events, onSelectEvent, selectedEvents }: EventListProps) => {
  return (
    <div className="space-y-4">
      {events.map(event => (
        <EventCard 
          key={event.id} 
          event={event} 
          onSelect={onSelectEvent}
          selectedOption={selectedEvents[event.id]}
        />
      ))}
    </div>
  );
};

interface EventCardProps {
  event: Event;
  onSelect: (eventId: string, selection: 'home' | 'draw' | 'away') => void;
  selectedOption?: 'home' | 'draw' | 'away';
}

const EventCard = ({ event, onSelect, selectedOption }: EventCardProps) => {
  const formatOdds = (odds: number) => odds.toFixed(2);
  
  return (
    <Card 
      variant={selectedOption ? "bordered" : "default"}
      className="p-0 overflow-hidden"
    >
      <div className="p-4 border-b border-[color:var(--c-divider)]">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[color:var(--c-accent)] rounded-full"></div>
            <span className="text-sm text-[color:var(--c-text-secondary)]">
              {event.date} • {event.time}
            </span>
          </div>
          <div className="text-xs bg-[color:var(--c-accent)]/10 text-[color:var(--c-accent)] px-2 py-1 rounded">
            1X2
          </div>
        </div>
        
        <h3 className="mt-2 text-base font-medium">
          {event.home} vs. {event.away}
        </h3>
      </div>
      
      <div className="grid grid-cols-3 divide-x divide-[color:var(--c-divider)]">
        <SelectableOption
          label={event.home}
          odds={formatOdds(event.homeOdds)}
          isSelected={selectedOption === 'home'}
          onClick={() => onSelect(event.id, 'home')}
        />
        
        {event.drawOdds !== undefined && (
          <SelectableOption
            label="Empate"
            odds={formatOdds(event.drawOdds)}
            isSelected={selectedOption === 'draw'}
            onClick={() => onSelect(event.id, 'draw')}
          />
        )}
        
        <SelectableOption
          label={event.away}
          odds={formatOdds(event.awayOdds)}
          isSelected={selectedOption === 'away'}
          onClick={() => onSelect(event.id, 'away')}
        />
      </div>
    </Card>
  );
};

interface SelectableOptionProps {
  label: string;
  odds: string;
  isSelected: boolean;
  onClick: () => void;
}

const SelectableOption = ({ label, odds, isSelected, onClick }: SelectableOptionProps) => {
  return (
    <button
      className={cn(
        "py-3 px-4 text-center transition-all duration-200",
        isSelected ? "bg-[color:var(--c-accent)] bg-opacity-20" : "hover:bg-[color:var(--c-divider)]"
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium truncate max-w-[100px]">{label}</span>
        <Checkbox checked={isSelected} className="data-[state=checked]:bg-[color:var(--c-accent)] data-[state=checked]:border-[color:var(--c-accent)]" />
      </div>
      <div className="text-lg font-mono-title font-bold mt-1 text-[color:var(--c-highlight)]">
        {odds}
      </div>
    </button>
  );
};

function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
