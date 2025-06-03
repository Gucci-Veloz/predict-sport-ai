
import { Target, TrendingUp, AlertTriangle } from "lucide-react";
import { Card } from "./Card";

interface PredictionProps {
  event: {
    home: string;
    away: string;
    date: string;
  };
  result: {
    prediction: 'home' | 'draw' | 'away';
    confidence: number;
    risk: 'low' | 'medium' | 'high';
    odds: number;
    explanation: string;
  };
}

export const PredictionCards = ({ event, result }: PredictionProps) => {
  const getPredictionText = () => {
    switch(result.prediction) {
      case 'home':
        return `Victoria ${event.home}`;
      case 'draw':
        return 'Empate';
      case 'away':
        return `Victoria ${event.away}`;
      default:
        return 'No disponible';
    }
  };
  
  const getRiskColor = () => {
    switch(result.risk) {
      case 'low':
        return 'bg-green-500';
      case 'medium':
        return 'bg-[color:var(--c-highlight)]';
      case 'high':
        return 'bg-[color:var(--c-error)]';
      default:
        return 'bg-gray-500';
    }
  };
  
  return (
    <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
      {/* Confidence Card */}
      <Card variant="bordered" className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-mono-title font-semibold">Probabilidad</h3>
          <div className="w-10 h-10 rounded bg-[color:var(--c-accent)] flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-[color:var(--c-text-secondary)]">Confianza</span>
              <span className="text-lg font-mono-title font-bold">
                {result.confidence}%
              </span>
            </div>
            <div className="w-full h-2 bg-[color:var(--c-divider)] rounded-full">
              <div 
                className="h-full bg-[color:var(--c-accent)] rounded-full" 
                style={{ width: `${result.confidence}%` }}
              ></div>
            </div>
          </div>
          
          <p className="text-sm text-[color:var(--c-text-secondary)] italic">
            "Basado en 1,250+ partidos analizados con condiciones similares."
          </p>
        </div>
      </Card>

      {/* Prediction Card */}
      <Card variant="accent" className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-mono-title font-semibold">Predicción IA</h3>
          <div className="w-10 h-10 rounded bg-[color:var(--c-accent)] flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          <div className="py-3 px-5 rounded-full bg-[color:var(--c-accent)]/20 font-mono-title font-bold">
            {getPredictionText()}
          </div>
          
          <div className="text-center">
            <p className="text-[color:var(--c-text-secondary)] text-sm mb-1">
              Cuota sugerida
            </p>
            <p className="text-[color:var(--c-highlight)] text-3xl font-mono-title font-bold">
              {result.odds.toFixed(2)}
            </p>
          </div>
          
          <div className="text-sm bg-[color:var(--c-bg-primary)]/50 p-3 rounded">
            <div className="mb-2">
              <span className="text-[color:var(--c-accent)] font-medium">Evento:</span>{" "}
              <span className="text-[color:var(--c-text-primary)]">
                {event.home} vs. {event.away}
              </span>
            </div>
            <div>
              <span className="text-[color:var(--c-accent)] font-medium">Fecha:</span>{" "}
              <span className="text-[color:var(--c-text-primary)]">{event.date}</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Risk Level Card */}
      <Card variant="bordered" className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-mono-title font-semibold">Factor de Riesgo</h3>
          <div className="w-10 h-10 rounded bg-[color:var(--c-accent)] flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 rounded-full border-8 border-[color:var(--c-divider)] mb-3">
              <div className={`absolute top-0 left-0 w-full h-full rounded-full ${getRiskColor()} opacity-20`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-mono-title font-bold capitalize">
                  {result.risk}
                </span>
              </div>
              <div 
                className={`absolute top-0 left-0 w-1/2 h-full rounded-l-full ${getRiskColor()} opacity-50`}
                style={{ transform: 'rotate(45deg)', transformOrigin: 'right center' }}
              ></div>
            </div>
            
            <p className="text-sm text-[color:var(--c-text-secondary)] text-center">
              {result.explanation}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
