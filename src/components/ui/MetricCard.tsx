import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "accent" | "success" | "warning";
}

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  variant = "default",
}: MetricCardProps) {
  const iconBgClasses = {
    default: "bg-secondary",
    accent: "bg-accent/10",
    success: "bg-success/10",
    warning: "bg-warning/10",
  };

  const iconClasses = {
    default: "text-muted-foreground",
    accent: "text-accent",
    success: "text-success",
    warning: "text-warning",
  };

  return (
    <div className="card-metric group hover:shadow-soft transition-all duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground mt-1">{value}</p>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
          {trend && (
            <div className="flex items-center gap-1 mt-2">
              <span
                className={cn(
                  "text-sm font-medium",
                  trend.isPositive ? "text-success" : "text-destructive"
                )}
              >
                {trend.isPositive ? "+" : "-"}{trend.value}%
              </span>
              <span className="text-xs text-muted-foreground">vs last week</span>
            </div>
          )}
        </div>
        <div
          className={cn(
            "p-3 rounded-xl transition-transform group-hover:scale-110",
            iconBgClasses[variant]
          )}
        >
          <Icon className={cn("w-6 h-6", iconClasses[variant])} />
        </div>
      </div>
    </div>
  );
}
