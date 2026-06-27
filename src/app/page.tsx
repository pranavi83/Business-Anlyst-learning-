"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const { progress, setName, updateStreak } = useAppStore();
  const [isMounted, setIsMounted] = useState(false);
  const [step, setStep] = useState(1);
  const [localName, setLocalName] = useState("Pranavi");

  useEffect(() => {
    setIsMounted(true);
    if (progress.name) {
      updateStreak();
      router.push("/dashboard");
    }
  }, [progress.name, router, updateStreak]);

  if (!isMounted) return null;

  if (progress.name) {
    return null; // Will redirect
  }

  const handleNext = () => {
    if (step === 1) setStep(2);
    else {
      setName(localName);
      updateStreak();
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 ml-[-16rem] sm:ml-0">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-[400px] border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Welcome to Pranavi BA Lab</CardTitle>
                <CardDescription>
                  Your No-Theory mentor for stepping up to Senior Business Analyst.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    value={localName}
                    onChange={(e) => setLocalName(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleNext}>
                  Continue
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
        
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-[400px] border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Set Your Goal</CardTitle>
                <CardDescription>
                  What is your main focus right now?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <Button variant="outline" className="justify-start hover:bg-accent/20" onClick={handleNext}>
                    Transition to Senior BA
                  </Button>
                  <Button variant="outline" className="justify-start hover:bg-accent/20" onClick={handleNext}>
                    Master Data & SQL
                  </Button>
                  <Button variant="outline" className="justify-start hover:bg-accent/20" onClick={handleNext}>
                    Prepare for Top-Tier Interviews
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
