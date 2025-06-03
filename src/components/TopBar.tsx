
import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu, ChevronRight } from "lucide-react";

export const TopBar = () => {
  const location = useLocation();
  
  // Get breadcrumb items based on current location
  const getBreadcrumbItems = () => {
    const path = location.pathname.split('/').filter(Boolean);
    
    const items = [
      { label: 'Dashboard', path: '/dashboard' },
    ];
    
    if (path.length > 1) {
      const currentPage = path[1].charAt(0).toUpperCase() + path[1].slice(1);
      items.push({ label: currentPage, path: `/${path[0]}/${path[1]}` });
    }
    
    return items;
  };
  
  const breadcrumbItems = getBreadcrumbItems();
  
  return (
    <header className="h-16 border-b border-[color:var(--c-divider)] bg-[color:var(--c-bg-secondary)] px-4 flex items-center">
      <SidebarTrigger className="lg:hidden">
        <Menu className="w-5 h-5" />
      </SidebarTrigger>
      
      {/* Breadcrumbs */}
      <div className="flex items-center ml-2">
        {breadcrumbItems.map((item, index) => (
          <Fragment key={item.path}>
            <a 
              href={item.path}
              className="text-sm font-mono-body text-[color:var(--c-text-secondary)] hover:text-[color:var(--c-accent)] transition-colors"
            >
              {item.label}
            </a>
            
            {index < breadcrumbItems.length - 1 && (
              <ChevronRight className="w-4 h-4 mx-2 text-[color:var(--c-divider)]" />
            )}
          </Fragment>
        ))}
      </div>
      
      <div className="flex-1" />
      
      {/* Avatar */}
      <div className="flex items-center gap-3">
        <div className="text-right hidden md:block">
          <p className="text-sm font-semibold">Usuario Demo</p>
          <p className="text-xs text-[color:var(--c-text-secondary)]">Saldo: $1,000.00</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FDCB6E]" />
      </div>
    </header>
  );
};
