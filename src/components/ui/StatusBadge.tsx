import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "success" | "warning" | "error" | "info" | "neutral";
  label: string;
  size?: "sm" | "md";
}

export function StatusBadge({ status, label, size = "md" }: StatusBadgeProps) {
  const statusClasses = {
    success: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    error: "bg-destructive/10 text-destructive border-destructive/20",
    info: "bg-info/10 text-info border-info/20",
    neutral: "bg-secondary text-muted-foreground border-border",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border",
        statusClasses[status],
        sizeClasses[size]
      )}
    >
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full mr-1.5",
          status === "success" && "bg-success",
          status === "warning" && "bg-warning",
          status === "error" && "bg-destructive",
          status === "info" && "bg-info",
          status === "neutral" && "bg-muted-foreground"
        )}
      />
      {label}
    </span>
  );
}
