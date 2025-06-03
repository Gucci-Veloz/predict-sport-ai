
import { ArrowRight, Shield, Zap, Target, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Readme = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2A] via-[#1a1a2e] to-[#16213e] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-mono-title text-4xl md:text-5xl font-bold text-[color:var(--c-accent)] mb-4">
            Guía de Usuario
          </h1>
          <p className="text-xl text-[color:var(--c-text-secondary)]">
            Todo lo que necesitas saber para maximizar tus predicciones
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 mb-12">
          <section className="card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[color:var(--c-accent)] rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-mono-title text-2xl font-semibold">¿Cómo Funciona?</h2>
            </div>
            <div className="text-[color:var(--c-text-secondary)] space-y-4 leading-relaxed">
              <p>
                <strong className="text-[color:var(--c-text-primary)]">AI BET</strong> utiliza algoritmos avanzados de machine learning para analizar:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Estadísticas históricas de equipos y jugadores</li>
                <li>Condiciones meteorológicas y del campo</li>
                <li>Tendencias recientes y momentum</li>
                <li>Análisis de sentiment de redes sociales</li>
                <li>Probabilidades de mercado en tiempo real</li>
              </ul>
            </div>
          </section>

          <section className="card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[color:var(--c-highlight)] rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h2 className="font-mono-title text-2xl font-semibold">Funciones Principales</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-[color:var(--c-accent)]">🎲 Predictor IA</h3>
                <p className="text-[color:var(--c-text-secondary)]">
                  Genera predicciones instantáneas con probabilidades calculadas para cualquier evento deportivo.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-[color:var(--c-accent)]">📊 Analytics</h3>
                <p className="text-[color:var(--c-text-secondary)]">
                  Visualiza tus tendencias, aciertos y ROI con gráficas interactivas y métricas detalladas.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-[color:var(--c-accent)]">🎯 Multi-Pick</h3>
                <p className="text-[color:var(--c-text-secondary)]">
                  Combina múltiples selecciones para crear parlays optimizados automáticamente.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-[color:var(--c-accent)]">🤖 Chat IA</h3>
                <p className="text-[color:var(--c-text-secondary)]">
                  Consulta con nuestro asistente virtual para obtener información sobre cualquier evento o estrategia.
                </p>
              </div>
            </div>
          </section>

          <section className="card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[color:var(--c-accent)] rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-mono-title text-2xl font-semibold">Buenas Prácticas</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-[color:var(--c-highlight)] font-semibold">✅ Recomendado</h3>
                <ul className="text-[color:var(--c-text-secondary)] space-y-1">
                  <li>• Definir un bankroll máximo</li>
                  <li>• Apostar un % fijo por pronóstico</li>
                  <li>• Evaluar el factor de riesgo</li>
                  <li>• Revisar tendencias recientes</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-[color:var(--c-error)] font-semibold">❌ Evitar</h3>
                <ul className="text-[color:var(--c-text-secondary)] space-y-1">
                  <li>• Apostar más para recuperar pérdidas</li>
                  <li>• Ignorar las métricas de riesgo</li>
                  <li>• Combinar demasiadas selecciones</li>
                  <li>• Dejarse llevar por emociones</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/dashboard')}
            className="btn-primary group relative overflow-hidden"
          >
            <span className="flex items-center gap-2">
              Ir al Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Readme;
