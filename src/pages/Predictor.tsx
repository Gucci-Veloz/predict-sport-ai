
import { useState } from "react";
import { Card } from "@/components/Card";
import { SelectSport } from "@/components/SelectSport";
import { SelectLeague } from "@/components/SelectLeague";
import { SlotMachineButton } from "@/components/SlotMachineButton";
import { PredictionCards } from "@/components/PredictionCards";

const Predictor = () => {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [selectedLeague, setSelectedLeague] = useState<string | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  // Mock data
  const mockEvents = [
    {
      id: '1',
      date: '2025-06-04',
      time: '19:45',
      home: 'Barcelona',
      away: 'Real Madrid',
    },
    {
      id: '2',
      date: '2025-06-04',
      time: '20:00',
      home: 'Manchester City',
      away: 'Liverpool',
    },
    {
      id: '3',
      date: '2025-06-05',
      time: '18:30',
      home: 'Bayern Munich',
      away: 'Borussia Dortmund',
    }
  ];
  
  const mockResult = {
    prediction: 'home' as 'home' | 'draw' | 'away',
    confidence: 78,
    risk: 'medium' as 'low' | 'medium' | 'high',
    odds: 1.85,
    explanation: 'Factores de riesgo incluyen: lesión reciente del delantero estrella, historial equilibrado de enfrentamientos directos.'
  };
  
  const handleGenerate = () => {
    if (!selectedEventId) return;
    
    setIsAnalyzing(true);
    setShowResults(false);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2200);
  };
  
  const selectedEvent = mockEvents.find(e => e.id === selectedEventId);
  
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-h1 font-mono-title font-bold">Predictor IA</h1>
        <p className="text-[color:var(--c-text-secondary)]">
          Utiliza inteligencia artificial para generar predicciones precision
        </p>
      </div>
      
      {/* Selection Section */}
      <Card className="p-6 space-y-6">
        <h2 className="text-h3 font-mono-title font-semibold">Seleccionar Evento</h2>
        
        <div className="space-y-6">
          {/* Sport Selection */}
          <div>
            <label className="block mb-2 text-[color:var(--c-text-secondary)]">Deporte</label>
            <SelectSport onSelectSport={setSelectedSport} />
          </div>
          
          {/* League Selection */}
          <div>
            <label className="block mb-2 text-[color:var(--c-text-secondary)]">Liga</label>
            <SelectLeague 
              sportSelected={selectedSport} 
              onSelectLeague={setSelectedLeague}
            />
          </div>
          
          {/* Event Selection */}
          <div>
            <label className="block mb-2 text-[color:var(--c-text-secondary)]">Evento</label>
            <div className="grid md:grid-cols-3 gap-4">
              {mockEvents.map(event => (
                <button
                  key={event.id}
                  className={`p-4 text-left rounded border ${
                    selectedEventId === event.id 
                      ? 'border-[color:var(--c-accent)] bg-[color:var(--c-accent)]/10' 
                      : 'border-[color:var(--c-divider)] hover:bg-[color:var(--c-divider)]'
                  } transition-colors`}
                  onClick={() => setSelectedEventId(event.id)}
                >
                  <p className="font-medium">
                    {event.home} vs. {event.away}
                  </p>
                  <p className="text-sm text-[color:var(--c-text-secondary)] mt-1">
                    {event.date} • {event.time}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>
      
      {/* Generate Button */}
      <div className="max-w-md mx-auto">
        <SlotMachineButton 
          onClick={handleGenerate}
          isAnalyzing={isAnalyzing}
        />
      </div>
      
      {/* Results Section */}
      {showResults && selectedEvent && (
        <div className="space-y-6">
          <h2 className="text-h2 font-mono-title font-semibold">Resultados del Análisis</h2>
          <PredictionCards 
            event={{
              home: selectedEvent.home,
              away: selectedEvent.away,
              date: `${selectedEvent.date} • ${selectedEvent.time}`
            }}
            result={mockResult}
          />
          
          <div className="text-center mt-8">
            <button className="btn-secondary">
              Guardar Predicción
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Predictor;
