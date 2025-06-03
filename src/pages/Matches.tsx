import { useState } from "react";
import { Search } from "lucide-react";
import { SelectSport } from "@/components/SelectSport";
import { SelectLeague } from "@/components/SelectLeague";
import { EventList } from "@/components/EventList";
import { MultiPickTray } from "@/components/MultiPickTray";

// Mock data
const mockEvents = [
  {
    id: '1',
    date: '2025-06-04',
    time: '19:45',
    home: 'Barcelona',
    away: 'Real Madrid',
    homeOdds: 1.85,
    drawOdds: 3.40,
    awayOdds: 4.20
  },
  {
    id: '2',
    date: '2025-06-04',
    time: '20:00',
    home: 'Manchester City',
    away: 'Liverpool',
    homeOdds: 1.75,
    drawOdds: 3.50,
    awayOdds: 4.50
  },
  {
    id: '3',
    date: '2025-06-05',
    time: '18:30',
    home: 'Bayern Munich',
    away: 'Borussia Dortmund',
    homeOdds: 1.60,
    drawOdds: 3.80,
    awayOdds: 5.00
  },
  {
    id: '4',
    date: '2025-06-05',
    time: '20:45',
    home: 'PSG',
    away: 'Olympique Marseille',
    homeOdds: 1.50,
    drawOdds: 4.00,
    awayOdds: 6.50
  },
  {
    id: '5',
    date: '2025-06-06',
    time: '20:30',
    home: 'Inter Milan',
    away: 'AC Milan',
    homeOdds: 2.10,
    drawOdds: 3.20,
    awayOdds: 3.50
  }
];

const selectionNames: Record<string, Record<string, string>> = {
  'home': { '1': 'Barcelona', '2': 'Manchester City', '3': 'Bayern Munich', '4': 'PSG', '5': 'Inter Milan' },
  'draw': { '1': 'Empate', '2': 'Empate', '3': 'Empate', '4': 'Empate', '5': 'Empate' },
  'away': { '1': 'Real Madrid', '2': 'Liverpool', '3': 'Borussia Dortmund', '4': 'Olympique Marseille', '5': 'AC Milan' }
};

const Matches = () => {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [selectedLeague, setSelectedLeague] = useState<string | null>(null);
  const [selectedEvents, setSelectedEvents] = useState<Record<string, 'home' | 'draw' | 'away'>>({});
  
  const handleSelectEvent = (eventId: string, selection: 'home' | 'draw' | 'away') => {
    setSelectedEvents(prev => {
      // If the same selection is clicked again, remove it
      if (prev[eventId] === selection) {
        const newSelections = { ...prev };
        delete newSelections[eventId];
        return newSelections;
      }
      
      // Otherwise, update or add the selection
      return { ...prev, [eventId]: selection };
    });
  };
  
  // Filter events by selected sport and league (in a real app, this would be done via API)
  const filteredEvents = mockEvents;
  
  // Build the multi-pick array
  const picks = Object.entries(selectedEvents).map(([eventId, selection]) => {
    const event = mockEvents.find(e => e.id === eventId);
    let odds = 0;
    
    if (event) {
      if (selection === 'home') odds = event.homeOdds;
      else if (selection === 'draw' && event.drawOdds) odds = event.drawOdds;
      else if (selection === 'away') odds = event.awayOdds;
    }
    
    const selectionName = selection && eventId ? selectionNames[selection][eventId] : '';
    
    return {
      eventId,
      event: event ? `${event.home} vs. ${event.away}` : '',
      selection,
      selectionName,
      odds
    };
  });
  
  return (
    <div className="space-y-8 pb-28">
      {/* Page Header */}
      <div>
        <h1 className="text-h1 font-mono-title font-bold">Eventos Deportivos</h1>
        <p className="text-[color:var(--c-text-secondary)]">
          Explora y selecciona eventos para recibir predicciones
        </p>
      </div>
      
      {/* Filter Section */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-h3 font-mono-title font-semibold">Filtros</h2>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar eventos..."
              className="pl-9 pr-4 py-2 rounded-md bg-[color:var(--c-bg-primary)]/40 border border-[color:var(--c-divider)] focus:outline-none focus:border-[color:var(--c-accent)] placeholder-[color:var(--c-text-secondary)]"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[color:var(--c-text-secondary)]" />
          </div>
        </div>
        
        {/* Sport Selection */}
        <SelectSport onSelectSport={setSelectedSport} />
        
        {/* League Selection (if sport is selected) */}
        <SelectLeague 
          sportSelected={selectedSport} 
          onSelectLeague={setSelectedLeague}
        />
      </div>
      
      {/* Events List */}
      <div className="space-y-6">
        <h2 className="text-h3 font-mono-title font-semibold">Eventos Disponibles</h2>
        
        {filteredEvents.length > 0 ? (
          <EventList 
            events={filteredEvents} 
            onSelectEvent={handleSelectEvent}
            selectedEvents={selectedEvents}
          />
        ) : (
          <div className="text-center py-12 card">
            <p className="text-[color:var(--c-text-secondary)]">
              No hay eventos disponibles con los filtros actuales.
            </p>
          </div>
        )}
      </div>
      
      {/* Multi Pick Tray */}
      {picks.length > 0 && (
        <MultiPickTray
          picks={picks}
          onRemovePick={(eventId) => {
            setSelectedEvents(prev => {
              const newSelections = { ...prev };
              delete newSelections[eventId];
              return newSelections;
            });
          }}
          onClearAll={() => setSelectedEvents({})}
        />
      )}
    </div>
  );
};

export default Matches;
