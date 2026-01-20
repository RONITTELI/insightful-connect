import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/ui/MetricCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  Video,
  TrendingUp,
  Gauge,
  Clock,
  Mic,
  Smile,
  Activity,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const progressData = [
  { week: "Week 1", score: 62 },
  { week: "Week 2", score: 68 },
  { week: "Week 3", score: 71 },
  { week: "Week 4", score: 78 },
  { week: "Week 5", score: 82 },
  { week: "Week 6", score: 87 },
];

const recentSessions = [
  {
    id: 1,
    title: "Job Interview Practice",
    date: "Today, 2:30 PM",
    score: 85,
    status: "success" as const,
  },
  {
    id: 2,
    title: "Presentation Skills",
    date: "Yesterday, 4:15 PM",
    score: 78,
    status: "success" as const,
  },
  {
    id: 3,
    title: "Public Speaking",
    date: "Jan 18, 11:00 AM",
    score: 72,
    status: "warning" as const,
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout
      title="Dashboard"
      subtitle="Welcome back! Here's your communication overview"
    >
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Sessions"
          value={24}
          subtitle="This month"
          icon={Video}
          trend={{ value: 12, isPositive: true }}
          variant="accent"
        />
        <MetricCard
          title="Confidence Score"
          value="87%"
          subtitle="Above average"
          icon={TrendingUp}
          trend={{ value: 5, isPositive: true }}
          variant="success"
        />
        <MetricCard
          title="Speaking Speed"
          value="142"
          subtitle="Words per minute"
          icon={Gauge}
          variant="default"
        />
        <MetricCard
          title="Avg. Duration"
          value="8:45"
          subtitle="Minutes per session"
          icon={Clock}
          variant="warning"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Chart */}
        <div className="lg:col-span-2 card-metric">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Performance Trend
              </h3>
              <p className="text-sm text-muted-foreground">
                Your confidence score over time
              </p>
            </div>
            <StatusBadge status="success" label="Improving" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="week"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  domain={[50, 100]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="hsl(var(--accent))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--accent))", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="card-metric">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">
              Recent Sessions
            </h3>
            <Link
              to="/analytics"
              className="text-sm text-accent hover:text-accent/80 flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {recentSessions.map((session) => (
              <div
                key={session.id}
                className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {session.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{session.date}</p>
                </div>
                <StatusBadge
                  status={session.status}
                  label={`${session.score}%`}
                  size="sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Analysis Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Link
          to="/speech"
          className="card-elevated p-6 hover:border-accent/50 transition-colors group"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mic className="w-6 h-6 text-info" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Speech Analysis</h4>
              <p className="text-sm text-muted-foreground">Record & analyze</p>
            </div>
          </div>
          <ProgressBar value={78} label="Last score" variant="accent" />
        </Link>

        <Link
          to="/emotion"
          className="card-elevated p-6 hover:border-accent/50 transition-colors group"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Smile className="w-6 h-6 text-warning" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Facial Emotion</h4>
              <p className="text-sm text-muted-foreground">Detect expressions</p>
            </div>
          </div>
          <ProgressBar value={85} label="Positivity" variant="success" />
        </Link>

        <Link
          to="/body-language"
          className="card-elevated p-6 hover:border-accent/50 transition-colors group"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Activity className="w-6 h-6 text-success" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Body Language</h4>
              <p className="text-sm text-muted-foreground">Posture analysis</p>
            </div>
          </div>
          <ProgressBar value={72} label="Posture score" variant="warning" />
        </Link>
      </div>
    </DashboardLayout>
  );
}
