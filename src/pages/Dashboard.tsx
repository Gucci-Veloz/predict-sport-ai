
import { Activity, TrendingUp, Users, BarChart2, Calendar, Award } from "lucide-react";
import { KPI } from "@/components/KPI";
import { Card } from "@/components/Card";

// Mock data
const mockData = {
  weeklyData: [65, 59, 80, 81, 56, 55, 72],
  labels: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
};

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-h1 font-mono-title font-bold">Dashboard</h1>
        <p className="text-[color:var(--c-text-secondary)]">
          Bienvenido de nuevo, revisa tus estadísticas y predicciones
        </p>
      </div>
      
      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KPI 
          title="ROI (Retorno de Inversión)" 
          value="23.4%" 
          trend="up" 
          trendValue="+4.3% esta semana" 
          icon={<TrendingUp className="w-5 h-5" />}
          variant="highlight"
        />
        
        <KPI 
          title="Tasa de Aciertos" 
          value="68%" 
          subValue="de 25 predicciones" 
          trend="up" 
          trendValue="+5% vs. mes anterior" 
          icon={<Activity className="w-5 h-5" />}
          variant="accent"
        />
        
        <KPI 
          title="Bankroll Actual" 
          value="$1,250.00" 
          trend="up" 
          trendValue="+$250.00 (25%)" 
          icon={<BarChart2 className="w-5 h-5" />}
        />
      </div>
      
      {/* Recent Events & Upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bets */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-h2 font-mono-title font-semibold">Predicciones Recientes</h2>
            <Calendar className="w-5 h-5 text-[color:var(--c-text-secondary)]" />
          </div>
          
          <div className="space-y-4">
            {[
              { 
                event: 'Barcelona vs. Real Madrid', 
                prediction: 'Victoria Barcelona', 
                odds: 1.85, 
                result: 'won' 
              },
              { 
                event: 'Liverpool vs. Man City', 
                prediction: 'Empate', 
                odds: 3.5, 
                result: 'lost' 
              },
              { 
                event: 'PSG vs. Bayern Munich', 
                prediction: 'Victoria Bayern', 
                odds: 2.1, 
                result: 'won' 
              }
            ].map((bet, index) => (
              <div 
                key={index} 
                className="p-3 rounded bg-[color:var(--c-bg-primary)]/40 border border-[color:var(--c-divider)]"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{bet.event}</p>
                    <p className="text-sm text-[color:var(--c-text-secondary)]">{bet.prediction}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[color:var(--c-highlight)] font-mono-title font-bold">
                      {bet.odds}
                    </span>
                    <div className={
                      bet.result === 'won' 
                        ? 'text-green-500 text-xs' 
                        : 'text-[color:var(--c-error)] text-xs'
                    }>
                      {bet.result === 'won' ? 'Acertada' : 'Fallada'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-2 text-center border border-[color:var(--c-divider)] rounded hover:bg-[color:var(--c-divider)] transition-colors">
            Ver todas las predicciones
          </button>
        </Card>
        
        {/* Top Leagues */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-h2 font-mono-title font-semibold">Ligas con Mejor Rendimiento</h2>
            <Award className="w-5 h-5 text-[color:var(--c-text-secondary)]" />
          </div>
          
          <div className="space-y-6">
            {[
              { league: 'Premier League', roi: '+28.4%', success: 72 },
              { league: 'La Liga', roi: '+19.2%', success: 65 },
              { league: 'Bundesliga', roi: '+15.8%', success: 61 },
              { league: 'Serie A', roi: '+12.3%', success: 58 }
            ].map((league, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      index === 0 ? 'bg-[color:var(--c-highlight)]' : 'bg-[color:var(--c-accent)]'
                    }`}></div>
                    <span className="font-medium">{league.league}</span>
                  </div>
                  <span className="text-green-500 font-mono-title font-bold">{league.roi}</span>
                </div>
                
                <div className="w-full h-2 bg-[color:var(--c-divider)] rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FDCB6E] rounded-full" 
                    style={{ width: `${league.success}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-xs text-[color:var(--c-text-secondary)]">
                  <span>Tasa de Acierto</span>
                  <span>{league.success}%</span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-2 text-center border border-[color:var(--c-divider)] rounded hover:bg-[color:var(--c-divider)] transition-colors">
            Ver análisis completo
          </button>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
