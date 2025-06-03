
import { useState } from "react";
import { Card } from "@/components/Card";
import { Bell, ChevronRight, Shield, Edit2, User, Wallet } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Settings = () => {
  const [notifications, setNotifications] = useState({
    newEvents: true,
    predictionResults: true,
    systemUpdates: false,
    marketingEmails: false,
  });
  
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-h1 font-mono-title font-bold">Configuración</h1>
        <p className="text-[color:var(--c-text-secondary)]">
          Administra tu perfil, preferencias y configuración
        </p>
      </div>
      
      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Column */}
        <div className="md:col-span-1 space-y-6">
          {/* Profile Card */}
          <Card className="p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FDCB6E] mb-4 overflow-hidden flex items-center justify-center text-4xl">
                U
              </div>
              <h2 className="text-lg font-mono-title font-semibold">Usuario Demo</h2>
              <p className="text-sm text-[color:var(--c-text-secondary)] mb-6">usuario@demo.com</p>
              
              <button className="btn-secondary w-full flex items-center justify-center gap-2">
                <Edit2 className="w-4 h-4" />
                Editar Perfil
              </button>
            </div>
          </Card>
          
          {/* Stats Summary */}
          <Card className="p-6">
            <h3 className="text-h3 font-mono-title font-semibold mb-4">Estadísticas</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[color:var(--c-text-secondary)]">Miembro desde</span>
                <span className="font-medium">Junio 2023</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-[color:var(--c-text-secondary)]">Predicciones</span>
                <span className="font-medium">128</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-[color:var(--c-text-secondary)]">Tasa de éxito</span>
                <span className="font-medium text-[color:var(--c-highlight)]">65.3%</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-[color:var(--c-text-secondary)]">ROI</span>
                <span className="font-medium text-[color:var(--c-accent)]">18.7%</span>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Main Settings Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Account Settings */}
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded bg-[color:var(--c-accent)] flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <h3 className="text-h3 font-mono-title font-semibold">Cuenta</h3>
            </div>
            
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 rounded border border-[color:var(--c-divider)] hover:bg-[color:var(--c-divider)] transition-colors">
                <span>Cambiar contraseña</span>
                <ChevronRight className="w-5 h-5 text-[color:var(--c-text-secondary)]" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 rounded border border-[color:var(--c-divider)] hover:bg-[color:var(--c-divider)] transition-colors">
                <span>Correo electrónico</span>
                <ChevronRight className="w-5 h-5 text-[color:var(--c-text-secondary)]" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 rounded border border-[color:var(--c-divider)] hover:bg-[color:var(--c-divider)] transition-colors">
                <span>Configuración de seguridad</span>
                <ChevronRight className="w-5 h-5 text-[color:var(--c-text-secondary)]" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 rounded border border-[color:var(--c-divider)] hover:bg-[color:var(--c-divider)] transition-colors">
                <span>Idioma</span>
                <div className="flex items-center">
                  <span className="text-[color:var(--c-text-secondary)] mr-2">Español</span>
                  <ChevronRight className="w-5 h-5 text-[color:var(--c-text-secondary)]" />
                </div>
              </button>
            </div>
          </Card>
          
          {/* Bankroll Management */}
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded bg-[color:var(--c-accent)] flex items-center justify-center">
                <Wallet className="w-5 h-5" />
              </div>
              <h3 className="text-h3 font-mono-title font-semibold">Gestión de Bankroll</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-[color:var(--c-text-secondary)]">Balance actual</span>
                <span className="text-xl font-mono-title font-semibold">$1,250.00</span>
              </div>
              
              <div className="space-y-4">
                <label className="block text-sm">Monto de apuesta predeterminado</label>
                <input
                  type="number"
                  defaultValue="50"
                  className="w-full p-3 rounded border border-[color:var(--c-divider)] bg-[color:var(--c-bg-primary)]/40 focus:outline-none focus:border-[color:var(--c-accent)]"
                />
              </div>
              
              <div className="space-y-4">
                <label className="block text-sm">Límite de pérdida diaria</label>
                <input
                  type="number"
                  defaultValue="200"
                  className="w-full p-3 rounded border border-[color:var(--c-divider)] bg-[color:var(--c-bg-primary)]/40 focus:outline-none focus:border-[color:var(--c-accent)]"
                />
              </div>
              
              <button className="btn-primary">Guardar Cambios</button>
            </div>
          </Card>
          
          {/* Notifications */}
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded bg-[color:var(--c-accent)] flex items-center justify-center">
                <Bell className="w-5 h-5" />
              </div>
              <h3 className="text-h3 font-mono-title font-semibold">Notificaciones</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="new-events">Nuevos eventos</Label>
                  <p className="text-sm text-[color:var(--c-text-secondary)]">
                    Recibe alertas sobre eventos próximos
                  </p>
                </div>
                <Switch 
                  id="new-events" 
                  checked={notifications.newEvents}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, newEvents: checked }))
                  }
                  className="data-[state=checked]:bg-[color:var(--c-accent)]"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="prediction-results">Resultados de predicciones</Label>
                  <p className="text-sm text-[color:var(--c-text-secondary)]">
                    Notificaciones cuando finalicen tus eventos
                  </p>
                </div>
                <Switch 
                  id="prediction-results" 
                  checked={notifications.predictionResults}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, predictionResults: checked }))
                  }
                  className="data-[state=checked]:bg-[color:var(--c-accent)]"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="system-updates">Actualizaciones del sistema</Label>
                  <p className="text-sm text-[color:var(--c-text-secondary)]">
                    Novedades y mejoras de la plataforma
                  </p>
                </div>
                <Switch 
                  id="system-updates" 
                  checked={notifications.systemUpdates}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, systemUpdates: checked }))
                  }
                  className="data-[state=checked]:bg-[color:var(--c-accent)]"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="marketing-emails">Correos de marketing</Label>
                  <p className="text-sm text-[color:var(--c-text-secondary)]">
                    Promociones y ofertas especiales
                  </p>
                </div>
                <Switch 
                  id="marketing-emails" 
                  checked={notifications.marketingEmails}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, marketingEmails: checked }))
                  }
                  className="data-[state=checked]:bg-[color:var(--c-accent)]"
                />
              </div>
            </div>
          </Card>
          
          {/* Privacy */}
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded bg-[color:var(--c-accent)] flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-h3 font-mono-title font-semibold">Privacidad</h3>
            </div>
            
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 rounded border border-[color:var(--c-divider)] hover:bg-[color:var(--c-divider)] transition-colors">
                <span>Política de privacidad</span>
                <ChevronRight className="w-5 h-5 text-[color:var(--c-text-secondary)]" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 rounded border border-[color:var(--c-divider)] hover:bg-[color:var(--c-divider)] transition-colors">
                <span>Términos y condiciones</span>
                <ChevronRight className="w-5 h-5 text-[color:var(--c-text-secondary)]" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 rounded border border-[color:var(--c-divider)] hover:bg-[color:var(--c-divider)] transition-colors text-[color:var(--c-error)]">
                <span>Eliminar cuenta</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
