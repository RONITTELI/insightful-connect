import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  Mic,
  Smile,
  Activity,
  Lightbulb,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Profile & Personality", url: "/profile", icon: User },
  { title: "Speech Analysis", url: "/speech", icon: Mic },
  { title: "Facial Emotion", url: "/emotion", icon: Smile },
  { title: "Body Language", url: "/body-language", icon: Activity },
  { title: "AI Feedback", url: "/feedback", icon: Lightbulb },
  { title: "Progress & Analytics", url: "/analytics", icon: BarChart3 },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out flex flex-col",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto scrollbar-hide">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <li key={item.title}>
                <NavLink
                  to={item.url}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary font-medium"
                      : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-5 h-5 flex-shrink-0 transition-colors",
                      isActive ? "text-accent" : "group-hover:text-accent"
                    )}
                  />
                  {!collapsed && (
                    <span className="truncate">{item.title}</span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom section */}
      <div className="px-3 py-4 border-t border-sidebar-border">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5" />
              <span>Collapse</span>
            </>
          )}
        </button>
        <NavLink
          to="/"
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200 mt-1"
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span>Logout</span>}
        </NavLink>
      </div>
    </aside>
  );
}
