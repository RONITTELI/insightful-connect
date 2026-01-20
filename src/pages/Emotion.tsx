import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Camera, Eye, Smile, Frown, Meh, AlertTriangle } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const emotionTimeline = [
  { time: "0:00", happy: 70, neutral: 20, sad: 10 },
  { time: "0:30", happy: 65, neutral: 25, sad: 10 },
  { time: "1:00", happy: 80, neutral: 15, sad: 5 },
  { time: "1:30", happy: 75, neutral: 20, sad: 5 },
  { time: "2:00", happy: 60, neutral: 30, sad: 10 },
  { time: "2:30", happy: 85, neutral: 10, sad: 5 },
  { time: "3:00", happy: 78, neutral: 17, sad: 5 },
];

const emotionBreakdown = [
  { name: "Happy", value: 55, color: "hsl(var(--success))" },
  { name: "Neutral", value: 30, color: "hsl(var(--info))" },
  { name: "Surprised", value: 10, color: "hsl(var(--warning))" },
  { name: "Sad", value: 5, color: "hsl(var(--muted-foreground))" },
];

const emotions = [
  { name: "Happy", value: 55, icon: Smile, variant: "success" as const },
  { name: "Neutral", value: 30, icon: Meh, variant: "info" as const },
  { name: "Surprised", value: 10, icon: AlertTriangle, variant: "warning" as const },
  { name: "Sad", value: 5, icon: Frown, variant: "neutral" as const },
];

export default function Emotion() {
  return (
    <DashboardLayout
      title="Facial Emotion Analysis"
      subtitle="Analyze your facial expressions and emotional patterns"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Camera Preview */}
        <div className="card-metric">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">
              Camera Preview
            </h3>
            <StatusBadge status="success" label="Live" />
          </div>

          {/* Camera Placeholder */}
          <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="text-center z-10">
              <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">
                Camera preview will appear here
              </p>
              <button className="mt-4 px-4 py-2 bg-gradient-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                Enable Camera
              </button>
            </div>

            {/* Face Detection Overlay Placeholder */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-30">
                <rect
                  x="30%"
                  y="15%"
                  width="40%"
                  height="70%"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  rx="8"
                />
              </svg>
            </div>
          </div>

          {/* Eye Contact Indicator */}
          <div className="mt-6">
            <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Eye Contact
                </p>
                <p className="text-xs text-muted-foreground">
                  Maintained 78% of the time
                </p>
              </div>
              <StatusBadge status="success" label="Good" size="sm" />
            </div>
          </div>
        </div>

        {/* Emotion Detection Results */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Emotions */}
          <div className="card-metric">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Detected Emotions
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {emotions.map((emotion) => (
                <div
                  key={emotion.name}
                  className="p-4 bg-secondary/50 rounded-xl text-center"
                >
                  <emotion.icon
                    className={`w-8 h-8 mx-auto mb-2 ${
                      emotion.variant === "success"
                        ? "text-success"
                        : emotion.variant === "info"
                        ? "text-info"
                        : emotion.variant === "warning"
                        ? "text-warning"
                        : "text-muted-foreground"
                    }`}
                  />
                  <p className="text-sm font-medium text-foreground">
                    {emotion.name}
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-1">
                    {emotion.value}%
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Emotion Distribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-metric">
              <h4 className="font-semibold text-foreground mb-4">
                Emotion Distribution
              </h4>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={emotionBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {emotionBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {emotionBreakdown.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-metric">
              <h4 className="font-semibold text-foreground mb-4">
                Expression Metrics
              </h4>
              <div className="space-y-4">
                <ProgressBar
                  value={78}
                  label="Eye Contact"
                  variant="success"
                />
                <ProgressBar
                  value={85}
                  label="Smile Frequency"
                  variant="accent"
                />
                <ProgressBar
                  value={92}
                  label="Engagement"
                  variant="success"
                />
                <ProgressBar
                  value={65}
                  label="Expression Variety"
                  variant="warning"
                />
              </div>
            </div>
          </div>

          {/* Emotion Timeline */}
          <div className="card-metric">
            <h4 className="font-semibold text-foreground mb-4">
              Emotion Timeline
            </h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={emotionTimeline}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    dataKey="time"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="happy"
                    stackId="1"
                    stroke="hsl(var(--success))"
                    fill="hsl(var(--success) / 0.3)"
                  />
                  <Area
                    type="monotone"
                    dataKey="neutral"
                    stackId="1"
                    stroke="hsl(var(--info))"
                    fill="hsl(var(--info) / 0.3)"
                  />
                  <Area
                    type="monotone"
                    dataKey="sad"
                    stackId="1"
                    stroke="hsl(var(--muted-foreground))"
                    fill="hsl(var(--muted) / 0.3)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
