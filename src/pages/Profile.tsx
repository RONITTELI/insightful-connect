import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  User,
  Mail,
  Calendar,
  Globe,
  Target,
  BookOpen,
  Award,
  Star,
} from "lucide-react";

const personalityTraits = [
  { trait: "Openness", value: 78 },
  { trait: "Conscientiousness", value: 85 },
  { trait: "Extraversion", value: 62 },
  { trait: "Agreeableness", value: 90 },
  { trait: "Emotional Stability", value: 74 },
];

const languages = [
  { name: "English", level: 95, badge: "Native" },
  { name: "Spanish", level: 65, badge: "Intermediate" },
  { name: "French", level: 40, badge: "Beginner" },
];

const interests = [
  "Public Speaking",
  "Leadership",
  "Negotiation",
  "Team Collaboration",
  "Presentation Skills",
];

const goals = [
  { goal: "Improve confidence in presentations", progress: 75 },
  { goal: "Reduce filler words usage", progress: 60 },
  { goal: "Enhance body language", progress: 45 },
];

export default function Profile() {
  return (
    <DashboardLayout
      title="Profile & Personality"
      subtitle="Your communication profile and personality insights"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="card-metric">
          <div className="text-center">
            <Avatar className="w-24 h-24 mx-auto border-4 border-accent/20">
              <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl font-bold">
                JD
              </AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold text-foreground mt-4">John Doe</h2>
            <p className="text-muted-foreground">Premium Member</p>
            <div className="flex justify-center gap-2 mt-3">
              <StatusBadge status="success" label="Active" size="sm" />
              <StatusBadge status="info" label="Pro Plan" size="sm" />
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">Joined January 2024</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">San Francisco, CA</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                Profile Completion
              </span>
              <span className="text-sm font-semibold text-accent">85%</span>
            </div>
            <ProgressBar value={85} showValue={false} variant="accent" />
          </div>
        </div>

        {/* Personality Type */}
        <div className="lg:col-span-2 card-metric">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <User className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Personality Profile
              </h3>
              <p className="text-sm text-muted-foreground">
                Based on Big Five personality traits
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {personalityTraits.map((item) => (
              <div key={item.trait}>
                <ProgressBar
                  value={item.value}
                  label={item.trait}
                  variant={item.value >= 80 ? "success" : item.value >= 60 ? "accent" : "warning"}
                  size="md"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-secondary rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="font-medium text-foreground">
                Personality Type: The Diplomat
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              You show high agreeableness and conscientiousness, making you
              effective in collaborative and structured environments. Your
              communication style is empathetic and goal-oriented.
            </p>
          </div>
        </div>

        {/* Language Proficiency */}
        <div className="card-metric">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-info/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-info" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Languages</h3>
          </div>

          <div className="space-y-4">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">
                    {lang.name}
                  </span>
                  <StatusBadge
                    status={lang.level >= 80 ? "success" : lang.level >= 50 ? "info" : "warning"}
                    label={lang.badge}
                    size="sm"
                  />
                </div>
                <ProgressBar
                  value={lang.level}
                  showValue={false}
                  variant={lang.level >= 80 ? "success" : lang.level >= 50 ? "accent" : "warning"}
                  size="sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="card-metric">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-warning" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Communication Interests
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1.5 bg-secondary text-sm font-medium text-foreground rounded-full hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div className="card-metric">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-success" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Active Goals
            </h3>
          </div>

          <div className="space-y-4">
            {goals.map((goal) => (
              <div key={goal.goal}>
                <ProgressBar
                  value={goal.progress}
                  label={goal.goal}
                  variant={goal.progress >= 70 ? "success" : goal.progress >= 50 ? "accent" : "warning"}
                  size="sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
