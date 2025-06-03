
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#1a1a2e] to-[#16213e]"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF6B35] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FDCB6E] rounded-full opacity-10 blur-3xl"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="font-mono-title text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FDCB6E] bg-clip-text text-transparent mb-4">
            AI BET
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FDCB6E] mx-auto rounded-full glow-orange"></div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[color:var(--c-text-secondary)] mb-12 font-mono-body leading-relaxed">
          Predicciones deportivas impulsadas por <br />
          <span className="text-[color:var(--c-highlight)] font-semibold">Inteligencia Artificial</span>
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="card p-6 hover:glow-orange transition-all duration-300">
            <div className="w-12 h-12 bg-[color:var(--c-accent)] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-mono-title text-lg font-semibold mb-2">Análisis Avanzado</h3>
            <p className="text-[color:var(--c-text-secondary)] text-sm">Algoritmos de IA procesan miles de variables para predicciones precisas</p>
          </div>
          
          <div className="card p-6 hover:glow-orange transition-all duration-300">
            <div className="w-12 h-12 bg-[color:var(--c-accent)] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-mono-title text-lg font-semibold mb-2">Tiempo Real</h3>
            <p className="text-[color:var(--c-text-secondary)] text-sm">Actualizaciones instantáneas y análisis en vivo de los eventos</p>
          </div>
          
          <div className="card p-6 hover:glow-orange transition-all duration-300">
            <div className="w-12 h-12 bg-[color:var(--c-accent)] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="font-mono-title text-lg font-semibold mb-2">ROI Optimizado</h3>
            <p className="text-[color:var(--c-text-secondary)] text-sm">Gestión inteligente de bankroll y maximización de ganancias</p>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => navigate('/readme')}
          className="btn-primary text-xl px-12 py-4 group relative overflow-hidden animate-glow-pulse"
        >
          <span className="relative z-10 flex items-center gap-3">
            Iniciar Experiencia
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>

        <p className="mt-6 text-[color:var(--c-text-secondary)] text-sm">
          Sin registros complicados • Interfaz intuitiva • Resultados inmediatos
        </p>
      </div>
    </div>
  );
};

export default Index;
