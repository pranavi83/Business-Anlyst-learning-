"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Server, Tractor, Settings2, FileCheck2, ChevronDown } from "lucide-react";

function SimpleAccordion({ title, content }: { title: string, content: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b last:border-0 py-2">
      <button 
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between items-center text-sm font-semibold py-2 hover:text-primary transition-colors text-left"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="text-sm text-muted-foreground pb-2 overflow-hidden">
          {content}
        </motion.div>
      )}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">Real-World Case Studies</h1>
        <p className="text-muted-foreground mt-2">Study these to prepare for situational interviews at top-tier consulting firms.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="overflow-hidden">
            <div className="bg-primary/10 p-6 flex items-center gap-4 border-b">
              <div className="bg-primary p-3 rounded-xl text-primary-foreground">
                <Server className="w-8 h-8" />
              </div>
              <div>
                <CardTitle className="text-2xl text-primary">Oracle 19c to 20c Migration</CardTitle>
                <CardDescription className="text-base mt-1">Focus: Zero Downtime Strategy</CardDescription>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg border-b pb-2">The Business Problem</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The enterprise relies on an Oracle 19c database for core operations processing 50k transactions/hour. Extended support is ending. We need to upgrade to 20c without halting the global supply chain operations.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-lg border-b pb-2">The Senior BA Approach</h3>
                  <div className="w-full">
                    <SimpleAccordion 
                      title="1. Stakeholder Alignment" 
                      content="Don't talk about SQL schemas. Ask: 'What is the financial cost of 1 hour of downtime?' Use this to justify the budget for parallel testing environments." 
                    />
                    <SimpleAccordion 
                      title="2. The Cutover Strategy" 
                      content="Document the rollback plan *first*. Set up GoldenGate for real-time replication between 19c and 20c. Run them in parallel for a week to validate data consistency before flipping the switch." 
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 p-4 border-t">
              <p className="text-xs font-semibold text-muted-foreground uppercase flex items-center gap-2">
                <FileCheck2 className="w-4 h-4" /> Interview Takeaway: Show you manage risk, not just tickets.
              </p>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="overflow-hidden">
            <div className="bg-accent/20 p-6 flex items-center gap-4 border-b">
              <div className="bg-accent p-3 rounded-xl text-accent-foreground">
                <Tractor className="w-8 h-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl text-primary">Agritech Supply Chain Dashboard</CardTitle>
                <CardDescription className="text-base mt-1">Focus: Data-Driven Storytelling (Power BI)</CardDescription>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg border-b pb-2">The Business Problem</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Regional managers can't see fertilizer inventory levels across 40 different warehouses. They are hoarding stock, causing capital tie-up and expiration waste.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-lg border-b pb-2">The Senior BA Approach</h3>
                  <div className="w-full">
                    <SimpleAccordion 
                      title="1. Defining Metrics" 
                      content="Instead of showing 'Total Inventory', define 'Days of Inventory Outstanding (DIO)'. This shifts the conversation from volume to financial efficiency." 
                    />
                    <SimpleAccordion 
                      title="2. The Dashboard Layout" 
                      content="Top: High-level KPI (Total Capital Tied Up). Middle: Heatmap of warehouses with expiring stock. Bottom: Predictive model for next month's demand." 
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="overflow-hidden">
            <div className="bg-secondary p-6 flex items-center gap-4 border-b">
              <div className="bg-background p-3 rounded-xl text-foreground">
                <Settings2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl text-primary">Process Optimization & Automation</CardTitle>
                <CardDescription className="text-base mt-1">Focus: Feasibility and ROI</CardDescription>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg border-b pb-2">The Business Problem</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The operations team spends 20 hours a week manually downloading CSV files from a vendor portal, reformatting them, and uploading them to the ERP system.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-lg border-b pb-2">The Senior BA Approach</h3>
                  <div className="w-full">
                    <SimpleAccordion 
                      title="1. Root Cause Analysis" 
                      content="Don't jump to RPA (Robotic Process Automation). Ask the vendor if they have an API. Turns out they do, but the operations team didn't know what an API was." 
                    />
                    <SimpleAccordion 
                      title="2. Building the Business Case" 
                      content="Cost of manual work: 20 hrs/week * $40/hr * 52 weeks = $41,600/year. Cost of API integration: 1 Sprint ($10,000). ROI is realized in 3 months. The project is instantly approved." 
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
