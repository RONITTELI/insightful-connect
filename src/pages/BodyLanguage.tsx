import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { MetricCard } from "@/components/ui/MetricCard";
import {
  Activity,
  CheckCircle,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  Hand,
} from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const postureData = [
  { subject: "Head Position", score: 85 },
  { subject: "Shoulder Alignment", score: 78 },
  { subject: "Spine Posture", score: 72 },
  { subject: "Arm Movement", score: 88 },
  { subject: "Hand Gestures", score: 92 },
  { subject: "Overall Balance", score: 80 },
];

const postureIndicators = [
  {
    title: "Head Position",
    status: "good" as const,
    description: "Maintained eye level, minimal tilting",
    icon: CheckCircle,
  },
  {
    title: "Shoulder Posture",
    status: "warning" as const,
    description: "Slight slouching detected at 2:15",
    icon: AlertCircle,
  },
  {
    title: "Spine Alignment",
    status: "good" as const,
    description: "Generally straight with minor deviations",
    icon: CheckCircle,
  },
];

const headMovements = [
  { type: "Nodding", count: 12, trend: "positive" },
  { type: "Tilting", count: 8, trend: "neutral" },
  { type: "Shaking", count: 3, trend: "negative" },
];

export default function BodyLanguage() {
  return (
    <DashboardLayout
      title="Body Language Analysis"
      subtitle="Analyze your posture and non-verbal communication"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pose Preview */}
        <div className="card-metric">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">
              Pose Preview
            </h3>
            <StatusBadge status="success" label="Analyzing" />
          </div>

          {/* Pose Placeholder */}
          <div className="aspect-[3/4] bg-secondary rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            
            {/* Stick Figure Placeholder */}
            <svg
              className="w-1/2 h-auto opacity-50"
              viewBox="0 0 100 200"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="3"
            >
              {/* Head */}
              <circle cx="50" cy="25" r="15" />
              {/* Body */}
              <line x1="50" y1="40" x2="50" y2="100" />
              {/* Arms */}
              <line x1="50" y1="55" x2="20" y2="85" />
              <line x1="50" y1="55" x2="80" y2="85" />
              {/* Legs */}
              <line x1="50" y1="100" x2="30" y2="160" />
              <line x1="50" y1="100" x2="70" y2="160" />
              {/* Key points */}
              <circle cx="50" cy="55" r="4" fill="hsl(var(--accent))" />
              <circle cx="20" cy="85" r="4" fill="hsl(var(--success))" />
              <circle cx="80" cy="85" r="4" fill="hsl(var(--success))" />
              <circle cx="30" cy="160" r="4" fill="hsl(var(--accent))" />
              <circle cx="70" cy="160" r="4" fill="hsl(var(--accent))" />
            </svg>

            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-sm text-muted-foreground">
                Skeleton tracking active
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="p-3 bg-secondary/50 rounded-xl text-center">
              <p className="text-2xl font-bold text-success">Good</p>
              <p className="text-xs text-muted-foreground">Posture Status</p>
            </div>
            <div className="p-3 bg-secondary/50 rounded-xl text-center">
              <p className="text-2xl font-bold text-foreground">82%</p>
              <p className="text-xs text-muted-foreground">Overall Score</p>
            </div>
          </div>
        </div>

        {/* Analysis Results */}
        <div className="lg:col-span-2 space-y-6">
          {/* Posture Radar */}
          <div className="card-metric">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Body Language Metrics
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={postureData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                  />
                  <Radar
                    name="Score"
                    dataKey="score"
                    stroke="hsl(var(--accent))"
                    fill="hsl(var(--accent))"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Posture Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {postureIndicators.map((indicator) => (
              <div
                key={indicator.title}
                className="card-metric flex items-start gap-3"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    indicator.status === "good"
                      ? "bg-success/10"
                      : "bg-warning/10"
                  }`}
                >
                  <indicator.icon
                    className={`w-5 h-5 ${
                      indicator.status === "good"
                        ? "text-success"
                        : "text-warning"
                    }`}
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {indicator.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {indicator.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Head Movement & Gestures */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-metric">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-info/10 flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-info" />
                </div>
                <h4 className="font-semibold text-foreground">Head Movements</h4>
              </div>
              <div className="space-y-3">
                {headMovements.map((movement) => (
                  <div
                    key={movement.type}
                    className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {movement.type}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">
                        {movement.count}
                      </span>
                      {movement.trend === "positive" && (
                        <ArrowUp className="w-4 h-4 text-success" />
                      )}
                      {movement.trend === "negative" && (
                        <ArrowDown className="w-4 h-4 text-destructive" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-metric">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Hand className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground">Gesture Analysis</h4>
              </div>
              <div className="space-y-4">
                <ProgressBar
                  value={92}
                  label="Hand Gesture Usage"
                  variant="success"
                />
                <ProgressBar
                  value={78}
                  label="Gesture Variety"
                  variant="accent"
                />
                <ProgressBar
                  value={85}
                  label="Appropriate Timing"
                  variant="success"
                />
                <ProgressBar
                  value={60}
                  label="Open Body Language"
                  variant="warning"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
