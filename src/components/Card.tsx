
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "accent" | "highlight";
  glow?: boolean;
  children: React.ReactNode;
}

export const Card = ({
  variant = "default",
  glow = false,
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        "card",
        glow && "hover:shadow-lg hover:shadow-black/50 transition-shadow duration-300",
        variant === "bordered" && "border-2 border-[color:var(--c-divider)]",
        variant === "accent" && "border-2 border-[color:var(--c-accent)]",
        variant === "highlight" && "border-2 border-[color:var(--c-highlight)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
