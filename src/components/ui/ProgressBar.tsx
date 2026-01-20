import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  variant?: "default" | "success" | "warning" | "accent";
  size?: "sm" | "md" | "lg";
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showValue = true,
  variant = "accent",
  size = "md",
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  const sizeClasses = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  const variantClasses = {
    default: "bg-primary",
    accent: "bg-accent",
    success: "bg-success",
    warning: "bg-warning",
  };

  return (
    <div className="space-y-2">
      {(label || showValue) && (
        <div className="flex justify-between items-center">
          {label && (
            <span className="text-sm font-medium text-foreground">{label}</span>
          )}
          {showValue && (
            <span className="text-sm font-semibold text-muted-foreground">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className={cn("bg-secondary rounded-full overflow-hidden", sizeClasses[size])}>
        <div
          className={cn(
            "h-full rounded-full transition-all duration-700 ease-out",
            variantClasses[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
