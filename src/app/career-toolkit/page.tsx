"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, MessageCircle, ArrowRight, Star } from "lucide-react";

export default function CareerToolkit() {
  const [activeTab, setActiveTab] = useState<"resume" | "interview">("resume");
  
  const [resumeTask, setResumeTask] = useState("");
  const [translatedTask, setTranslatedTask] = useState("");

  const handleTranslate = () => {
    if (resumeTask.toLowerCase().includes("data") || resumeTask.toLowerCase().includes("report")) {
      setTranslatedTask("Engineered a data-driven reporting framework using Power BI, reducing manual extraction time by 20 hours/week and enabling C-suite to monitor supply chain KPIs in real-time.");
    } else if (resumeTask.toLowerCase().includes("meeting") || resumeTask.toLowerCase().includes("requirement")) {
      setTranslatedTask("Orchestrated cross-functional elicitation workshops across 5 global teams, translating ambiguous stakeholder needs into 50+ INVEST-ready user stories and reducing sprint rework by 15%.");
    } else {
      setTranslatedTask("Spearheaded [initiative/project] by aligning cross-functional stakeholders, resulting in a [metric/percentage] improvement in [business value/efficiency].");
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">Career Toolkit</h1>
        <p className="text-muted-foreground mt-2">Tools to help you sound like the Senior BA you are.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Button 
          variant={activeTab === "resume" ? "default" : "outline"}
          onClick={() => setActiveTab("resume")}
          className="gap-2"
        >
          <FileText className="w-4 h-4" /> Resume Translator
        </Button>
        <Button 
          variant={activeTab === "interview" ? "default" : "outline"}
          onClick={() => setActiveTab("interview")}
          className="gap-2"
        >
          <MessageCircle className="w-4 h-4" /> Interview Bank
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "resume" && (
          <motion.div
            key="resume"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>What you did (Junior Level)</CardTitle>
                <CardDescription>Enter a basic task you perform daily.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <textarea
                  value={resumeTask}
                  onChange={(e) => setResumeTask(e.target.value)}
                  placeholder="e.g. Gathered requirements for the new dashboard"
                  className="w-full rounded-md border p-3 text-sm bg-background min-h-[120px] focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <Button onClick={handleTranslate} className="w-full gap-2">
                  Translate to Senior Level <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/50 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary">What you achieved (Senior Level)</CardTitle>
                <CardDescription>Impact-driven, outcome-focused bullet point.</CardDescription>
              </CardHeader>
              <CardContent>
                {translatedTask ? (
                  <div className="p-4 bg-background border rounded-lg shadow-sm text-foreground leading-relaxed text-sm">
                    • {translatedTask}
                  </div>
                ) : (
                  <div className="p-4 bg-background/50 border border-dashed rounded-lg text-muted-foreground text-sm italic text-center">
                    Your translated bullet point will appear here.
                  </div>
                )}
                
                <div className="mt-6 space-y-2">
                  <h4 className="text-sm font-semibold text-primary">The Formula:</h4>
                  <p className="text-xs text-muted-foreground bg-accent/20 p-2 rounded-md border border-accent/30">
                    <strong>Action Verb</strong> + what you did + <strong>How you did it</strong> + <strong>Business Result/Metric</strong>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === "interview" && (
          <motion.div
            key="interview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">The STAR Method Bank</CardTitle>
                <CardDescription>
                  Top-tier firms (Accenture, Deloitte) don't ask "What is a BRD?". They ask situational questions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="border rounded-lg p-5 hover:border-primary/50 transition-colors">
                    <div className="flex gap-2 items-start mb-3">
                      <Star className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                      <h4 className="font-bold text-base text-foreground">"Tell me about a time stakeholders completely disagreed on requirements."</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 font-semibold">The Trap: Picking a side or forcing a vote.</p>
                    <div className="text-sm bg-muted p-3 rounded-md">
                      <span className="font-bold text-primary">Senior Answer:</span> "I took it out of the realm of opinion and back to the data. I mapped both proposed processes and tied them back to the project's success metric (ROI). When they saw that Option A saved 10 hours a week and Option B saved 2, the decision made itself."
                    </div>
                  </div>

                  <div className="border rounded-lg p-5 hover:border-primary/50 transition-colors">
                    <div className="flex gap-2 items-start mb-3">
                      <Star className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                      <h4 className="font-bold text-base text-foreground">"How do you handle a developer who says a requirement is impossible?"</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 font-semibold">The Trap: Saying you escalate to management.</p>
                    <div className="text-sm bg-muted p-3 rounded-md">
                      <span className="font-bold text-primary">Senior Answer:</span> "I never throw it over the fence. I sit down with the dev and ask, 'What part exactly is impossible? The data extraction, or the UI rendering?' Usually, it's just a constraint we can negotiate. We compromise on the 'How', but protect the 'Why'."
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
