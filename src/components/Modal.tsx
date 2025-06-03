
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md'
}: ModalProps) => {
  if (!isOpen) return null;
  
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div 
        className={cn(
          "bg-[color:var(--c-bg-secondary)] w-full rounded-lg shadow-xl border border-[color:var(--c-divider)] animate-fade-in-up",
          sizeClasses[size]
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-[color:var(--c-divider)]">
          <h3 className="text-lg font-mono-title font-semibold">{title}</h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[color:var(--c-divider)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          {children}
        </div>
        
        {/* Footer */}
        {footer && (
          <div className="p-4 border-t border-[color:var(--c-divider)] flex justify-end space-x-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
