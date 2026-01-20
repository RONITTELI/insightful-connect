import { Bell, Search, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TopbarProps {
  title: string;
  subtitle?: string;
}

export function Topbar({ title, subtitle }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 h-16 bg-background/80 backdrop-blur-md border-b border-border flex items-center justify-between px-6">
      <div>
        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-secondary rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-sm w-40 placeholder:text-muted-foreground"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-foreground">John Doe</p>
            <p className="text-xs text-muted-foreground">Premium User</p>
          </div>
          <Avatar className="h-9 w-9 border-2 border-accent/20">
            <AvatarFallback className="bg-gradient-primary text-primary-foreground text-sm font-medium">
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
