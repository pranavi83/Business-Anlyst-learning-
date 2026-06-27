"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, FileText, Code, CheckSquare, MessageSquare } from "lucide-react";

export default function SurvivalGuide() {
  const [activeTab, setActiveTab] = useState<"brd" | "agile" | "notes">("brd");

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">The "No-Theory" BA Survival Guide</h1>
        <p className="text-muted-foreground mt-2">Skip the textbook. Learn how to explain complex concepts using everyday analogies.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Button 
          variant={activeTab === "brd" ? "default" : "outline"}
          onClick={() => setActiveTab("brd")}
          className="gap-2"
        >
          <FileText className="w-4 h-4" /> BRD vs. FRD
        </Button>
        <Button 
          variant={activeTab === "agile" ? "default" : "outline"}
          onClick={() => setActiveTab("agile")}
          className="gap-2"
        >
          <Code className="w-4 h-4" /> Agile & Scrum
        </Button>
        <Button 
          variant={activeTab === "notes" ? "default" : "outline"}
          onClick={() => setActiveTab("notes")}
          className="gap-2"
        >
          <MessageSquare className="w-4 h-4" /> Stakeholder Meetings
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "brd" && (
          <motion.div
            key="brd"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="bg-primary/20 text-primary p-2 rounded-md">BRD</span>
                  The Customer's Order
                </CardTitle>
                <CardDescription>Business Requirements Document (The "What")</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  <strong>The Analogy:</strong> Imagine you are at a high-end restaurant. The BRD is the customer telling the waiter, "I want a medium-rare steak with peppercorn sauce, and I need it in 20 minutes because I have a flight."
                </p>
                <p className="text-muted-foreground text-sm">
                  It focuses entirely on the business need, constraints (time), and the desired outcome. It never tells the chef *how* to cook the steak.
                </p>
                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <h4 className="font-semibold mb-2">Plug-and-Play Template</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> <strong>Current State:</strong> What is broken right now?</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> <strong>Future State:</strong> What does success look like?</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> <strong>In-Scope/Out-of-Scope:</strong> What are we NOT doing?</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> <strong>Business Rules:</strong> Regulatory/compliance constraints.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="bg-accent/20 text-accent-foreground p-2 rounded-md">FRD</span>
                  The Chef's Recipe
                </CardTitle>
                <CardDescription>Functional Requirements Document (The "How")</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  <strong>The Analogy:</strong> The FRD is the recipe the chef uses in the kitchen. "Heat the cast-iron skillet to 450°F. Sear the steak for 3 minutes on each side. Rest for 5 minutes."
                </p>
                <p className="text-muted-foreground text-sm">
                  This translates the customer's order into precise, technical steps for the developers (the chefs) to build the software.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <h4 className="font-semibold mb-2">Plug-and-Play Template</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-primary mt-0.5 shrink-0"/> <strong>System Behavior:</strong> "When button X is clicked, system shall..."</li>
                    <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-primary mt-0.5 shrink-0"/> <strong>Data Mappings:</strong> Field A maps to Database Column B.</li>
                    <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-primary mt-0.5 shrink-0"/> <strong>Error Handling:</strong> What message shows if it fails?</li>
                    <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-primary mt-0.5 shrink-0"/> <strong>Integrations:</strong> API endpoints and payloads.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === "agile" && (
          <motion.div
            key="agile"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Agile & Scrum: Building a Custom House</CardTitle>
                <CardDescription>
                  Forget IT jargon. Agile is just building a house room by room so the client can move in faster, rather than waiting three years for the whole mansion to be finished.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-lg border-b pb-2">The Product Backlog (Jira)</h4>
                    <p className="text-sm text-foreground">
                      This is the master wish list for the house. It has everything from "build a roof" to "install a golden chandelier in the hallway."
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-lg border-b pb-2">Sprint Planning</h4>
                    <p className="text-sm text-foreground">
                      We look at the wish list and say, "Okay, for the next two weeks, we are only focusing on building the kitchen." We ignore the chandelier for now.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-lg border-b pb-2">The User Story</h4>
                    <p className="text-sm text-foreground mb-2">
                      This is the specific blueprint given to the builder. It doesn't just say "make a sink."
                    </p>
                    <div className="bg-muted p-3 rounded text-sm italic">
                      "As a homeowner (Who), I want a double-basin sink (What), so I can wash and rinse dishes at the same time (Why)."
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-lg border-b pb-2">Daily Standup</h4>
                    <p className="text-sm text-foreground">
                      The 15-minute morning huddle on the construction site. The plumber says: "Yesterday I laid the pipes, today I'm installing the faucet, but I am blocked because the tile guy hasn't finished the wall."
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      Your job as the Senior BA: Go unblock the plumber by talking to the tile guy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === "notes" && (
          <motion.div
            key="notes"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">The Senior BA Elicitation Method</CardTitle>
                <CardDescription>
                  How to capture actionable requirements in meetings, not just useless chatter.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</div>
                    <div>
                      <h4 className="font-bold text-lg">Identify the "Pain" (Not the Solution)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Stakeholders will say: "Build me a dashboard." <br/>
                        You ask: "What decision are you trying to make today that you can't because you don't have this dashboard?"
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">2</div>
                    <div>
                      <h4 className="font-bold text-lg">Map the Process ("Show Me")</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Don't just take notes. Say: "Can you share your screen and walk me through exactly how you do this in Excel today?" <br/>
                        Record the session. Note every manual click.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</div>
                    <div>
                      <h4 className="font-bold text-lg">Define Success Quantitatively</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        "If we automate this step, how many hours a week will your team save?" <br/>
                        This is the golden metric you will put on your resume later.
                      </p>
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
