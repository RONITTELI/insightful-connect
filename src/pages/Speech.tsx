import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/ui/MetricCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mic,
  Square,
  Clock,
  Gauge,
  AlertCircle,
  Volume2,
  Play,
} from "lucide-react";
import { cn } from "@/lib/utils";

const scenarios = [
  { id: "interview", name: "Job Interview" },
  { id: "presentation", name: "Business Presentation" },
  { id: "pitch", name: "Elevator Pitch" },
  { id: "speech", name: "Public Speech" },
  { id: "meeting", name: "Team Meeting" },
];

const analysisResults = {
  duration: "4:32",
  speed: 148,
  fillerWords: 12,
  clarity: 82,
  tone: "Confident",
  pauses: 8,
};

export default function Speech() {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState("");
  const [hasRecording, setHasRecording] = useState(true); // Demo state

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <DashboardLayout
      title="Speech Analysis"
      subtitle="Record and analyze your speaking patterns"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recording Section */}
        <div className="card-metric">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Recording Studio
          </h3>

          {/* Scenario Selection */}
          <div className="mb-6">
            <label className="text-sm font-medium text-foreground mb-2 block">
              Select Scenario
            </label>
            <Select value={selectedScenario} onValueChange={setSelectedScenario}>
              <SelectTrigger className="w-full h-12 bg-secondary border-border">
                <SelectValue placeholder="Choose a scenario..." />
              </SelectTrigger>
              <SelectContent>
                {scenarios.map((scenario) => (
                  <SelectItem key={scenario.id} value={scenario.id}>
                    {scenario.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Recording Interface */}
          <div className="bg-secondary/50 rounded-2xl p-8 text-center">
            <div className="relative inline-block">
              <button
                onClick={toggleRecording}
                className={cn(
                  "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300",
                  isRecording
                    ? "bg-destructive recording-pulse"
                    : "bg-gradient-primary hover:opacity-90"
                )}
              >
                {isRecording ? (
                  <Square className="w-8 h-8 text-white" />
                ) : (
                  <Mic className="w-8 h-8 text-white" />
                )}
              </button>
            </div>

            <p className="mt-4 text-foreground font-medium">
              {isRecording ? "Recording in progress..." : "Tap to start recording"}
            </p>

            {isRecording && (
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground font-mono">
                  00:45
                </span>
              </div>
            )}

            {/* Audio Waveform Placeholder */}
            {isRecording && (
              <div className="mt-6 flex items-center justify-center gap-1 h-12">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-accent rounded-full animate-pulse"
                    style={{
                      height: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.05}s`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Recording Status */}
          <div className="mt-6 flex items-center justify-between">
            <StatusBadge
              status={isRecording ? "error" : hasRecording ? "success" : "neutral"}
              label={isRecording ? "Recording" : hasRecording ? "Ready to analyze" : "No recording"}
            />
            {hasRecording && !isRecording && (
              <button className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors">
                <Play className="w-4 h-4" />
                Play recording
              </button>
            )}
          </div>
        </div>

        {/* Analysis Results */}
        <div className="space-y-6">
          <div className="card-metric">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Analysis Results
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Duration</span>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {analysisResults.duration}
                </p>
              </div>

              <div className="p-4 bg-secondary/50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Gauge className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Speed</span>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {analysisResults.speed}
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    WPM
                  </span>
                </p>
              </div>

              <div className="p-4 bg-secondary/50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Filler Words
                  </span>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {analysisResults.fillerWords}
                </p>
              </div>

              <div className="p-4 bg-secondary/50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Volume2 className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Tone</span>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {analysisResults.tone}
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Metrics */}
          <div className="card-metric">
            <h4 className="font-semibold text-foreground mb-4">
              Detailed Metrics
            </h4>

            <div className="space-y-4">
              <ProgressBar
                value={analysisResults.clarity}
                label="Speech Clarity"
                variant="success"
              />
              <ProgressBar
                value={75}
                label="Pacing Consistency"
                variant="accent"
              />
              <ProgressBar
                value={88}
                label="Vocabulary Diversity"
                variant="success"
              />
              <ProgressBar
                value={65}
                label="Engagement Level"
                variant="warning"
              />
            </div>
          </div>

          {/* Filler Words Breakdown */}
          <div className="card-metric">
            <h4 className="font-semibold text-foreground mb-4">
              Filler Words Detected
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                { word: "um", count: 5 },
                { word: "uh", count: 3 },
                { word: "like", count: 2 },
                { word: "you know", count: 2 },
              ].map((item) => (
                <span
                  key={item.word}
                  className="px-3 py-1.5 bg-warning/10 text-warning text-sm font-medium rounded-full"
                >
                  "{item.word}" × {item.count}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
