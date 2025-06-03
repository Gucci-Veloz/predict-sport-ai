
import { Card } from "@/components/Card";
import { KPI } from "@/components/KPI";
import { TrendingUp, BarChart2, PieChart } from "lucide-react";

const Analytics = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-h1 font-mono-title font-bold">Analytics</h1>
        <p className="text-[color:var(--c-text-secondary)]">
          Análisis detallado de tu rendimiento y tendencias
        </p>
      </div>
      
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPI 
          title="ROI Global" 
          value="18.7%" 
          trend="up" 
          trendValue="+2.3% vs período anterior" 
          icon={<TrendingUp className="w-5 h-5" />}
          variant="accent"
        />
        
        <KPI 
          title="Tasa de Aciertos" 
          value="65.3%" 
          subValue="84 de 128 predicciones" 
          trend="up" 
          trendValue="+3.2% vs período anterior" 
          icon={<BarChart2 className="w-5 h-5" />}
          variant="highlight"
        />
        
        <KPI 
          title="Ganancia Neta" 
          value="$846.50" 
          subValue="últimos 30 días" 
          trend="up" 
          trendValue="+$126.75 vs mes anterior" 
          icon={<PieChart className="w-5 h-5" />}
        />
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <Card className="p-6">
          <h2 className="text-h3 font-mono-title font-semibold mb-6">Rendimiento Histórico</h2>
          
          <div className="aspect-[5/3] bg-[color:var(--c-bg-primary)]/50 rounded-lg flex items-center justify-center">
            <div className="space-y-6 w-full px-6">
              {/* Mock line chart */}
              <div className="relative h-44">
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[color:var(--c-divider)]"></div>
                <div className="absolute left-0 h-full w-[1px] bg-[color:var(--c-divider)]"></div>
                
                {/* Data line */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="var(--c-accent)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--c-accent)" stopOpacity="0" />
                  </linearGradient>
                  
                  {/* Area fill */}
                  <path
                    d="M0,50 L0,30 C10,35 20,25 30,20 C40,15 50,25 60,20 C70,15 80,5 90,10 L100,5 L100,50 Z"
                    fill="url(#lineGradient)"
                  />
                  
                  {/* Line */}
                  <path
                    d="M0,30 C10,35 20,25 30,20 C40,15 50,25 60,20 C70,15 80,5 90,10 L100,5"
                    fill="none"
                    stroke="var(--c-accent)"
                    strokeWidth="0.5"
                  />
                </svg>
                
                {/* Year markers */}
                {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'].map((month, i) => (
                  <div 
                    key={month} 
                    className="absolute bottom-[-20px] text-xs text-[color:var(--c-text-secondary)]"
                    style={{ left: `${i * 20}%` }}
                  >
                    {month}
                  </div>
                ))}
              </div>
              
              {/* Legend */}
              <div className="flex justify-center">
                <div className="flex items-center mr-6">
                  <div className="w-3 h-3 rounded-full bg-[color:var(--c-accent)] mr-2"></div>
                  <span className="text-xs text-[color:var(--c-text-secondary)]">ROI</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[color:var(--c-highlight)] mr-2"></div>
                  <span className="text-xs text-[color:var(--c-text-secondary)]">Benchmark</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Distribution Chart */}
        <Card className="p-6">
          <h2 className="text-h3 font-mono-title font-semibold mb-6">Distribución por Deporte</h2>
          
          <div className="aspect-[5/3] bg-[color:var(--c-bg-primary)]/50 rounded-lg flex items-center justify-center">
            <div className="grid grid-cols-2 gap-8 w-full p-6">
              {/* Mock donut chart */}
              <div className="relative">
                <svg viewBox="0 0 36 36" className="w-full h-auto">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--c-divider)" strokeWidth="1"></circle>
                  
                  {/* Fútbol - 45% */}
                  <path 
                    d="M18 2.1
                      A 15.9 15.9 0 0 1 33.9 18
                      A 15.9 15.9 0 0 1 25.05 31.8"
                    fill="none" 
                    stroke="var(--c-accent)"
                    strokeWidth="4"
                  ></path>
                  
                  {/* Basket - 20% */}
                  <path 
                    d="M25.05 31.8
                      A 15.9 15.9 0 0 1 5.9 25.05"
                    fill="none" 
                    stroke="var(--c-highlight)"
                    strokeWidth="4"
                  ></path>
                  
                  {/* Otros - 35% */}
                  <path 
                    d="M5.9 25.05
                      A 15.9 15.9 0 0 1 18 2.1"
                    fill="none" 
                    stroke="var(--c-divider)"
                    strokeWidth="4"
                  ></path>
                  
                  {/* Center text */}
                  <text x="18" y="15" textAnchor="middle" className="font-mono-title font-bold" fill="white" fontSize="3">65.3%</text>
                  <text x="18" y="20" textAnchor="middle" className="text-[color:var(--c-text-secondary)]" fill="currentColor" fontSize="2">Aciertos</text>
                </svg>
              </div>
              
              {/* Legend */}
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-[color:var(--c-accent)] mr-2"></div>
                    <span className="text-sm">Fútbol <span className="text-[color:var(--c-text-secondary)]">(45%)</span></span>
                  </div>
                  <div className="w-full h-2 bg-[color:var(--c-divider)] rounded-full">
                    <div className="h-full rounded-full bg-[color:var(--c-accent)]" style={{width: '45%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-[color:var(--c-highlight)] mr-2"></div>
                    <span className="text-sm">Basketball <span className="text-[color:var(--c-text-secondary)]">(20%)</span></span>
                  </div>
                  <div className="w-full h-2 bg-[color:var(--c-divider)] rounded-full">
                    <div className="h-full rounded-full bg-[color:var(--c-highlight)]" style={{width: '20%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-[color:var(--c-divider)] mr-2"></div>
                    <span className="text-sm">Otros <span className="text-[color:var(--c-text-secondary)]">(35%)</span></span>
                  </div>
                  <div className="w-full h-2 bg-[color:var(--c-divider)] rounded-full">
                    <div className="h-full rounded-full bg-white/30" style={{width: '35%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Success by Category */}
      <Card className="p-6">
        <h2 className="text-h3 font-mono-title font-semibold mb-6">Tasa de Éxito por Categoría</h2>
        
        <div className="space-y-6">
          {[
            { category: 'Partidos como Local', success: 74, color: 'bg-[color:var(--c-accent)]' },
            { category: 'Partidos como Visitante', success: 58, color: 'bg-[color:var(--c-highlight)]' },
            { category: 'Under/Over 2.5 Goles', success: 62, color: 'bg-green-500' },
            { category: 'Ambos equipos marcan', success: 68, color: 'bg-purple-500' },
            { category: 'Apuestas de Hándicap', success: 55, color: 'bg-blue-500' }
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">{item.category}</span>
                <span className="text-sm font-mono-title font-semibold">{item.success}%</span>
              </div>
              
              <div className="w-full h-2 bg-[color:var(--c-divider)] rounded-full">
                <div className={`h-full ${item.color} rounded-full`} style={{width: `${item.success}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Analytics;
