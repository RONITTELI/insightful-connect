import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { MetricCard } from "@/components/ui/MetricCard";
import {
  BarChart3,
  TrendingUp,
  Calendar,
  Clock,
  Video,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const confidenceData = [
  { month: "Aug", score: 62, sessions: 4 },
  { month: "Sep", score: 68, sessions: 6 },
  { month: "Oct", score: 71, sessions: 5 },
  { month: "Nov", score: 78, sessions: 8 },
  { month: "Dec", score: 82, sessions: 7 },
  { month: "Jan", score: 87, sessions: 10 },
];

const sessionHistory = [
  {
    id: 1,
    title: "Job Interview Practice",
    date: "Jan 20, 2026",
    duration: "8:32",
    confidence: 88,
    speech: 82,
    emotion: 85,
    trend: "up" as const,
  },
  {
    id: 2,
    title: "Presentation Skills",
    date: "Jan 18, 2026",
    duration: "12:15",
    confidence: 82,
    speech: 78,
    emotion: 80,
    trend: "up" as const,
  },
  {
    id: 3,
    title: "Public Speaking",
    date: "Jan 15, 2026",
    duration: "6:45",
    confidence: 75,
    speech: 70,
    emotion: 78,
    trend: "down" as const,
  },
  {
    id: 4,
    title: "Team Meeting Prep",
    date: "Jan 12, 2026",
    duration: "4:20",
    confidence: 80,
    speech: 75,
    emotion: 82,
    trend: "up" as const,
  },
  {
    id: 5,
    title: "Elevator Pitch",
    date: "Jan 10, 2026",
    duration: "2:15",
    confidence: 72,
    speech: 68,
    emotion: 75,
    trend: "down" as const,
  },
];

const comparisonData = [
  { metric: "Confidence", current: 87, previous: 75 },
  { metric: "Speech", current: 82, previous: 70 },
  { metric: "Emotion", current: 85, previous: 72 },
  { metric: "Posture", current: 78, previous: 65 },
];

export default function Analytics() {
  return (
    <DashboardLayout
      title="Progress & Analytics"
      subtitle="Track your communication improvement over time"
    >
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Total Sessions"
          value={40}
          subtitle="All time"
          icon={Video}
          trend={{ value: 25, isPositive: true }}
          variant="accent"
        />
        <MetricCard
          title="Current Streak"
          value="7 days"
          subtitle="Keep it up!"
          icon={Calendar}
          variant="success"
        />
        <MetricCard
          title="Avg. Duration"
          value="6:45"
          subtitle="Per session"
          icon={Clock}
          variant="default"
        />
        <MetricCard
          title="Improvement"
          value="+25%"
          subtitle="Last 30 days"
          icon={TrendingUp}
          trend={{ value: 8, isPositive: true }}
          variant="success"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Confidence Growth Chart */}
        <div className="lg:col-span-2 card-metric">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Confidence Growth
              </h3>
              <p className="text-sm text-muted-foreground">
                Your progress over the last 6 months
              </p>
            </div>
            <StatusBadge status="success" label="+25% overall" />
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={confidenceData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis
                  dataKey="month"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  domain={[50, 100]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="score"
                  name="Confidence Score"
                  stroke="hsl(var(--accent))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Session Comparison */}
        <div className="card-metric">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            This Month vs Last Month
          </h3>
          <div className="space-y-4">
            {comparisonData.map((item) => (
              <div key={item.metric}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">
                    {item.metric}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {item.previous}%
                    </span>
                    <ArrowUp className="w-4 h-4 text-success" />
                    <span className="text-sm font-semibold text-success">
                      {item.current}%
                    </span>
                  </div>
                </div>
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-muted-foreground/30 rounded-full"
                    style={{ width: `${item.previous}%` }}
                  />
                  <div
                    className="absolute h-full bg-accent rounded-full"
                    style={{ width: `${item.current}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Session History Table */}
      <div className="card-metric mt-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">
            Session History
          </h3>
          <button className="text-sm text-accent hover:text-accent/80 transition-colors">
            Export Data
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Session
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Date
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Duration
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Confidence
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Speech
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Emotion
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody>
              {sessionHistory.map((session) => (
                <tr
                  key={session.id}
                  className="border-b border-border/50 hover:bg-secondary/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <span className="font-medium text-foreground">
                      {session.title}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">
                    {session.date}
                  </td>
                  <td className="py-4 px-4 text-sm text-foreground">
                    {session.duration}
                  </td>
                  <td className="py-4 px-4">
                    <StatusBadge
                      status={session.confidence >= 80 ? "success" : session.confidence >= 70 ? "info" : "warning"}
                      label={`${session.confidence}%`}
                      size="sm"
                    />
                  </td>
                  <td className="py-4 px-4">
                    <StatusBadge
                      status={session.speech >= 80 ? "success" : session.speech >= 70 ? "info" : "warning"}
                      label={`${session.speech}%`}
                      size="sm"
                    />
                  </td>
                  <td className="py-4 px-4">
                    <StatusBadge
                      status={session.emotion >= 80 ? "success" : session.emotion >= 70 ? "info" : "warning"}
                      label={`${session.emotion}%`}
                      size="sm"
                    />
                  </td>
                  <td className="py-4 px-4">
                    {session.trend === "up" ? (
                      <ArrowUp className="w-5 h-5 text-success" />
                    ) : (
                      <ArrowDown className="w-5 h-5 text-destructive" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
