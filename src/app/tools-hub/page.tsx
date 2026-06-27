"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, FileSpreadsheet, LayoutDashboard, Layout, FileCode2, PieChart } from "lucide-react";

const tools = [
  {
    id: "jira",
    name: "Jira",
    category: "Agile",
    icon: LayoutDashboard,
    tagline: "The Builder's Blueprint",
    color: "bg-blue-100 text-blue-700 border-blue-200",
    description: "Don't just move tickets around. Use Jira to protect your developers' time.",
    mentorTip: "A 5-year BA doesn't just create a ticket saying 'Fix the login'. They write the Given/When/Then acceptance criteria so developers don't have to guess.",
  },
  {
    id: "confluence",
    name: "Confluence",
    category: "Agile",
    icon: FileCode2,
    tagline: "The Master Wishlist",
    color: "bg-blue-100 text-blue-700 border-blue-200",
    description: "The source of truth where business logic lives before it becomes code.",
    mentorTip: "Structure your PRDs (Product Requirements Documents) here. Use macros, tables, and link directly to Jira epics to create a traceable matrix.",
  },
  {
    id: "sql",
    name: "SQL",
    category: "Data",
    icon: Database,
    tagline: "The Prep Cook",
    color: "bg-orange-100 text-orange-700 border-orange-200",
    description: "Go into the freezer, extract exactly the ingredients we need, and bring them to the counter.",
    mentorTip: "Stop 'pulling data'. Start answering questions. Use JOINs and aggregate functions to summarize raw table rows into business insights.",
  },
  {
    id: "excel",
    name: "Excel",
    category: "Data",
    icon: FileSpreadsheet,
    tagline: "The Prototyper",
    color: "bg-green-100 text-green-700 border-green-200",
    description: "The universal language of business stakeholders.",
    mentorTip: "Use Pivot Tables and VLOOKUPs to quickly validate a hypothesis before spending 3 weeks building a complex dashboard in Power BI.",
  },
  {
    id: "powerbi",
    name: "Power BI",
    category: "Data",
    icon: PieChart,
    tagline: "The Plated Dish",
    color: "bg-yellow-100 text-yellow-700 border-yellow-200",
    description: "Cooking raw numbers into a beautiful, digestible presentation.",
    mentorTip: "No one wants to look at a data dump. A Senior BA uses Power BI to tell a business story—highlighting margins, bottlenecks, and trends using DAX.",
  },
  {
    id: "oracle",
    name: "Oracle",
    category: "Enterprise",
    icon: Layout,
    tagline: "The Walk-in Freezer",
    color: "bg-red-100 text-red-700 border-red-200",
    description: "The massive, chaotic storage system holding the company's most critical assets.",
    mentorTip: "You don't need to be a DBA. You just need to understand the schema relationships. How does the 'Customer' table link to the 'Orders' table?",
  },
];

export default function ToolsHub() {
  const [filter, setFilter] = useState<"All" | "Agile" | "Data" | "Enterprise">("All");

  const filteredTools = tools.filter((tool) => filter === "All" || tool.category === filter);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">Tools & Technologies Hub</h1>
        <p className="text-muted-foreground mt-2">How a 5-year Senior BA actually uses these tools on the job.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {["All", "Agile", "Data", "Enterprise"].map((f) => (
          <Button
            key={f}
            variant={filter === f ? "default" : "outline"}
            onClick={() => setFilter(f as any)}
            className="rounded-full"
          >
            {f}
          </Button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <motion.div
                layout
                key={tool.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full flex flex-col hover:border-primary/50 transition-colors group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg border ${tool.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{tool.name}</CardTitle>
                    <CardDescription className="font-medium text-foreground/80">{tool.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                    <div className="bg-accent/10 border border-accent/20 p-3 rounded-md mt-auto">
                      <p className="text-xs font-bold text-accent-foreground mb-1 uppercase tracking-wide">Mentor Tip:</p>
                      <p className="text-sm text-foreground/90 italic">"{tool.mentorTip}"</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
