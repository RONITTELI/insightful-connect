import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  Lightbulb,
  CheckCircle,
  Target,
  TrendingUp,
  Sparkles,
  AlertCircle,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

const strengths = [
  {
    title: "Clear Articulation",
    description: "Your speech is well-paced and easy to understand",
    score: 88,
  },
  {
    title: "Positive Energy",
    description: "You maintain an engaging and enthusiastic presence",
    score: 85,
  },
  {
    title: "Eye Contact",
    description: "Strong eye contact maintained throughout sessions",
    score: 82,
  },
  {
    title: "Hand Gestures",
    description: "Effective use of gestures to emphasize points",
    score: 90,
  },
];

const improvements = [
  {
    title: "Reduce Filler Words",
    description: "Work on minimizing 'um', 'uh', and 'like' usage",
    priority: "high" as const,
    tips: [
      "Practice pausing instead of using fillers",
      "Record yourself and count filler words",
      "Prepare key phrases in advance",
    ],
  },
  {
    title: "Improve Posture",
    description: "Maintain upright posture to project confidence",
    priority: "medium" as const,
    tips: [
      "Set reminders to check your posture",
      "Practice speaking while standing",
      "Strengthen core muscles with exercises",
    ],
  },
  {
    title: "Vary Speech Pace",
    description: "Add more variation to avoid monotone delivery",
    priority: "medium" as const,
    tips: [
      "Speed up for exciting points",
      "Slow down for important information",
      "Use strategic pauses for emphasis",
    ],
  },
];

const confidenceTips = [
  "Start each session with deep breathing exercises",
  "Visualize successful outcomes before speaking",
  "Focus on your message, not yourself",
  "Practice power poses before important presentations",
  "Record and review your sessions regularly",
];

export default function Feedback() {
  return (
    <DashboardLayout
      title="AI Feedback & Recommendations"
      subtitle="Personalized insights to improve your communication"
    >
      {/* Overall Summary */}
      <div className="card-metric mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">
                Overall Performance: Excellent
              </h2>
              <p className="text-muted-foreground">
                Based on your last 10 sessions, here's your personalized
                feedback
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-success">85%</p>
              <p className="text-sm text-muted-foreground">Confidence Score</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">+12%</p>
              <p className="text-sm text-muted-foreground">Improvement</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="card-metric">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
              <ThumbsUp className="w-5 h-5 text-success" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Your Strengths
            </h3>
          </div>

          <div className="space-y-4">
            {strengths.map((strength) => (
              <div
                key={strength.title}
                className="p-4 bg-secondary/50 rounded-xl"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="font-medium text-foreground">
                      {strength.title}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-success">
                    {strength.score}%
                  </span>
                </div>
                <p className="text-sm text-muted-foreground ml-7">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Improvement */}
        <div className="card-metric">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-warning" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Areas of Improvement
            </h3>
          </div>

          <div className="space-y-4">
            {improvements.map((item) => (
              <div key={item.title} className="p-4 bg-secondary/50 rounded-xl">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle
                      className={`w-5 h-5 ${
                        item.priority === "high"
                          ? "text-destructive"
                          : "text-warning"
                      }`}
                    />
                    <span className="font-medium text-foreground">
                      {item.title}
                    </span>
                  </div>
                  <StatusBadge
                    status={item.priority === "high" ? "error" : "warning"}
                    label={item.priority}
                    size="sm"
                  />
                </div>
                <p className="text-sm text-muted-foreground ml-7 mb-3">
                  {item.description}
                </p>
                <div className="ml-7 space-y-1">
                  {item.tips.map((tip, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <ArrowRight className="w-3 h-3 text-accent" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actionable Suggestions & Confidence Tips */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Actionable Suggestions */}
        <div className="card-metric">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Action Plan
            </h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 border-l-4 border-accent bg-accent/5 rounded-r-xl">
              <p className="font-medium text-foreground mb-1">This Week</p>
              <p className="text-sm text-muted-foreground">
                Focus on reducing filler words by practicing 10-minute speeches
                daily without using "um" or "uh".
              </p>
            </div>
            <div className="p-4 border-l-4 border-info bg-info/5 rounded-r-xl">
              <p className="font-medium text-foreground mb-1">Next Week</p>
              <p className="text-sm text-muted-foreground">
                Work on posture by doing 5 standing presentations and recording
                yourself for review.
              </p>
            </div>
            <div className="p-4 border-l-4 border-success bg-success/5 rounded-r-xl">
              <p className="font-medium text-foreground mb-1">Monthly Goal</p>
              <p className="text-sm text-muted-foreground">
                Achieve 90% confidence score by consistently applying all
                feedback recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Confidence Tips */}
        <div className="card-metric">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-info/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-info" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Confidence Tips
            </h3>
          </div>

          <div className="space-y-3">
            {confidenceTips.map((tip, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-accent/20 text-accent text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-sm text-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
