
import { cn } from "@/lib/utils";

interface KPIProps {
  title: string;
  value: string | number;
  subValue?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  variant?: 'default' | 'outline' | 'accent' | 'highlight';
}

export const KPI = ({
  title,
  value,
  subValue,
  icon,
  trend,
  trendValue,
  variant = 'default'
}: KPIProps) => {
  return (
    <div className={cn(
      "card p-6 transition-all duration-200 hover:translate-y-[-2px]",
      variant === 'accent' && "border-[color:var(--c-accent)] border-2",
      variant === 'highlight' && "border-[color:var(--c-highlight)] border-2"
    )}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-label uppercase tracking-wider font-mono-body text-[color:var(--c-text-secondary)]">
          {title}
        </h3>
        
        {icon && (
          <div className={cn(
            "w-10 h-10 rounded-md flex items-center justify-center",
            variant === 'accent' && "bg-[color:var(--c-accent)]",
            variant === 'highlight' && "bg-[color:var(--c-highlight)] text-black",
            variant === 'default' && "bg-[color:var(--c-divider)]"
          )}>
            {icon}
          </div>
        )}
      </div>
      
      <div className="flex items-baseline">
        <p className={cn(
          "text-h1 font-mono-title font-bold tracking-tight",
          variant === 'accent' && "text-[color:var(--c-accent)]",
          variant === 'highlight' && "text-[color:var(--c-highlight)]"
        )}>
          {value}
        </p>
        
        {subValue && (
          <p className="ml-1 text-sm text-[color:var(--c-text-secondary)]">
            {subValue}
          </p>
        )}
      </div>
      
      {trend && (
        <div className={cn(
          "flex items-center gap-1 mt-2 text-sm",
          trend === 'up' && "text-green-500",
          trend === 'down' && "text-[color:var(--c-error)]",
          trend === 'neutral' && "text-[color:var(--c-text-secondary)]"
        )}>
          {trend === 'up' && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
            </svg>
          )}
          
          {trend === 'down' && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
            </svg>
          )}
          
          {trend === 'neutral' && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
            </svg>
          )}
          
          {trendValue}
        </div>
      )}
    </div>
  );
};
