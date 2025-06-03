
import { Home, Calendar, Activity, Settings, TrendingUp, Menu } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

// Menu items
const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Matches",
    url: "/dashboard/matches",
    icon: Calendar,
  },
  {
    title: "Predictor",
    url: "/dashboard/predictor",
    icon: TrendingUp,
  },
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: Activity,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();
  
  return (
    <Sidebar className="border-r border-[color:var(--c-divider)] bg-[color:var(--c-bg-secondary)]">
      <div className="flex h-16 items-center border-b border-[color:var(--c-divider)] px-4">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="bg-[color:var(--c-accent)] w-6 h-6 rounded flex items-center justify-center font-mono-title font-bold">
            A
          </div>
          <span className="font-mono-title font-bold text-lg bg-gradient-to-r from-[#FF6B35] to-[#FDCB6E] bg-clip-text text-transparent">
            AI BET
          </span>
        </Link>
        <div className="flex-1" />
        <SidebarTrigger className="md:hidden">
          <Menu className="w-5 h-5" />
        </SidebarTrigger>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[color:var(--c-text-secondary)] text-label font-medium">
            Navegación
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url;
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link 
                        to={item.url}
                        className={cn(
                          "flex items-center gap-3 py-2 px-3 rounded-md transition-colors duration-200",
                          isActive 
                            ? "bg-[color:var(--c-accent)] text-white"
                            : "hover:bg-black/20"
                        )}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-mono-body font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-[color:var(--c-text-secondary)] text-label font-medium">
            Estadísticas
          </SidebarGroupLabel>
          <SidebarGroupContent className="p-3">
            <div className="card p-4">
              <div className="mb-3">
                <p className="text-label text-[color:var(--c-text-secondary)]">ROI Global</p>
                <p className="text-xl font-mono-title font-bold text-[color:var(--c-highlight)]">+12.7%</p>
              </div>
              <div className="mb-3">
                <p className="text-label text-[color:var(--c-text-secondary)]">Aciertos</p>
                <p className="text-xl font-mono-title font-bold text-white">63%</p>
                <div className="w-full h-1.5 bg-[color:var(--c-divider)] rounded-full mt-1">
                  <div className="w-[63%] h-full bg-gradient-to-r from-[#FF6B35] to-[#FDCB6E] rounded-full" />
                </div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
