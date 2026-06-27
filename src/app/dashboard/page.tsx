"use client";

import { useAppStore } from "@/store/useAppStore";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Flame, PlayCircle, Trophy, BookOpen, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { progress } = useAppStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Calculate progress based on completed modules out of 10 total for demo
  const progressPercentage = Math.min((progress.completedModules.length / 10) * 100, 100);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Welcome back, {progress.name}</h1>
          <p className="text-muted-foreground mt-1">Ready to step up to Senior BA?</p>
        </div>
        <div className="flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full border border-accent/50">
          <Flame className="w-5 h-5 text-orange-500" />
          <span className="font-semibold">{progress.streak} Day Streak</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Progress Ring Card */}
        <Card className="col-span-1 md:col-span-1 border-primary/10 shadow-sm flex flex-col items-center justify-center p-6 text-center">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                className="text-muted stroke-current"
                strokeWidth="8"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              ></circle>
              <motion.circle
                className="text-primary stroke-current"
                strokeWidth="8"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                initial={{ strokeDasharray: "0 251.2" }}
                animate={{ strokeDasharray: `${(progressPercentage * 251.2) / 100} 251.2` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              ></motion.circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-primary">{Math.round(progressPercentage)}%</span>
            </div>
          </div>
          <h3 className="mt-4 font-semibold text-foreground">Techno-Functional</h3>
          <p className="text-sm text-muted-foreground">Path to Senior BA</p>
        </Card>

        {/* Today's Action */}
        <Card className="col-span-1 md:col-span-2 border-accent/30 shadow-sm bg-gradient-to-br from-background to-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <PlayCircle className="w-6 h-6 text-primary" />
              Today's 10-Min Action
            </CardTitle>
            <CardDescription>Small consistent steps beat weekend cramming.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-card border rounded-lg p-4 mb-4 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-lg">Master the BRD vs. FRD Analogy</h4>
                <p className="text-muted-foreground text-sm mt-1 mb-3">
                  Learn how to explain requirements gathering like a restaurant order. Stop using textbook definitions in your interviews.
                </p>
                <Link href="/survival-guide">
                  <Button className="gap-2">
                    Start Module <PlayCircle className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Recent Modules
            </CardTitle>
          </CardHeader>
          <CardContent>
            {progress.completedModules.length === 0 ? (
              <p className="text-muted-foreground italic text-sm">You haven't completed any modules yet. Get started!</p>
            ) : (
              <ul className="space-y-3">
                {progress.completedModules.slice(-3).map((mod, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <span>Module: <span className="font-medium">{mod}</span></span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" /> Consistency Tracker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">You've logged in today! Keep the streak alive to build habits.</p>
            <div className="flex gap-2">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={i} 
                  className={`flex-1 h-8 rounded-sm ${i < progress.streak ? 'bg-primary' : 'bg-muted'} transition-colors duration-300`}
                  title={i < progress.streak ? 'Active day' : 'Upcoming'}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
