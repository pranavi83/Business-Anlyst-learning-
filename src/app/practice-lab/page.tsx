"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hammer, Database, Play, CheckCircle2, AlertCircle } from "lucide-react";
import initSqlJs from "sql.js";

// Mock Agricultural Data
const setupSql = `
  CREATE TABLE crop_yields (
    id INTEGER PRIMARY KEY,
    region TEXT,
    crop TEXT,
    yield_tons REAL,
    year INTEGER
  );
  INSERT INTO crop_yields (region, crop, yield_tons, year) VALUES
    ('Midwest', 'Corn', 120.5, 2022),
    ('Midwest', 'Soybeans', 85.2, 2022),
    ('South', 'Cotton', 45.1, 2022),
    ('Midwest', 'Corn', 125.0, 2023),
    ('South', 'Cotton', 42.8, 2023);
`;

export default function PracticeLab() {
  const [activeTab, setActiveTab] = useState<"story" | "sql">("story");
  
  // User Story State
  const [who, setWho] = useState("");
  const [what, setWhat] = useState("");
  const [why, setWhy] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    let s = 0;
    if (who.length > 5) s += 20;
    if (what.length > 10) s += 40;
    if (why.length > 10) s += 40;
    setScore(s);
  }, [who, what, why]);

  // SQL State
  const [db, setDb] = useState<any>(null);
  const [query, setQuery] = useState("SELECT * FROM crop_yields;");
  const [results, setResults] = useState<any[]>([]);
  const [sqlError, setSqlError] = useState("");
  const [isDbLoading, setIsDbLoading] = useState(true);

  useEffect(() => {
    async function initDb() {
      try {
        const SQL = await initSqlJs({
          // Use CDN for the wasm file
          locateFile: file => `https://sql.js.org/dist/${file}`
        });
        const database = new SQL.Database();
        database.run(setupSql);
        setDb(database);
      } catch (err) {
        console.error("Failed to init SQLite", err);
        setSqlError("Failed to initialize database engine.");
      } finally {
        setIsDbLoading(false);
      }
    }
    initDb();
  }, []);

  const runQuery = () => {
    if (!db) return;
    try {
      setSqlError("");
      const res = db.exec(query);
      if (res && res.length > 0) {
        setResults(res[0]);
      } else {
        setResults([]);
      }
    } catch (err: any) {
      setSqlError(err.message);
      setResults([]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">Practice Lab</h1>
        <p className="text-muted-foreground mt-2">Interactive sandboxes to hone your BA skills safely.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Button 
          variant={activeTab === "story" ? "default" : "outline"}
          onClick={() => setActiveTab("story")}
          className="gap-2"
        >
          <Hammer className="w-4 h-4" /> User Story Forge
        </Button>
        <Button 
          variant={activeTab === "sql" ? "default" : "outline"}
          onClick={() => setActiveTab("sql")}
          className="gap-2"
        >
          <Database className="w-4 h-4" /> SQL Sandbox
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "story" && (
          <motion.div
            key="story"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Drafting Board</CardTitle>
                <CardDescription>Write your story in the standard format.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">As a... (Who)</label>
                  <input
                    value={who}
                    onChange={(e) => setWho(e.target.value)}
                    placeholder="e.g. Warehouse Manager"
                    className="w-full rounded-md border p-2 text-sm bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">I want to... (What)</label>
                  <textarea
                    value={what}
                    onChange={(e) => setWhat(e.target.value)}
                    placeholder="e.g. see real-time crop yields by region"
                    className="w-full rounded-md border p-2 text-sm bg-background min-h-[80px] focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">So that... (Why)</label>
                  <textarea
                    value={why}
                    onChange={(e) => setWhy(e.target.value)}
                    placeholder="e.g. I can optimize logistics routing for harvest season"
                    className="w-full rounded-md border p-2 text-sm bg-background min-h-[80px] focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-accent">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">INVEST Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-primary">{score}%</div>
                    <div className="text-sm text-muted-foreground">
                      {score < 50 && "Keep going. Provide more specific details."}
                      {score >= 50 && score < 100 && "Getting there. Is it testable and independent?"}
                      {score === 100 && "Excellent. Ready for sprint planning!"}
                    </div>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full mt-4 overflow-hidden">
                    <div className="bg-primary h-full transition-all duration-500" style={{ width: `${score}%` }} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Gherkin Acceptance Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  {score === 100 ? (
                    <div className="bg-muted p-4 rounded-md font-mono text-xs space-y-2 text-muted-foreground">
                      <p><span className="text-primary font-bold">Given</span> I am authenticated as a {who}</p>
                      <p><span className="text-primary font-bold">When</span> I navigate to the dashboard</p>
                      <p><span className="text-primary font-bold">Then</span> I should {what}</p>
                      <p><span className="text-primary font-bold">And</span> this allows me to {why}</p>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">Complete your story to generate acceptance criteria.</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}

        {activeTab === "sql" && (
          <motion.div
            key="sql"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Agricultural Database Sandbox</span>
                  <span className="text-xs font-normal px-2 py-1 bg-accent/20 text-accent-foreground rounded-full">
                    {isDbLoading ? "Initializing DB..." : "Engine Ready"}
                  </span>
                </CardTitle>
                <CardDescription>
                  Table: <code>crop_yields (id, region, crop, yield_tons, year)</code>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full font-mono text-sm rounded-md border p-3 bg-muted focus:ring-2 focus:ring-primary focus:outline-none min-h-[120px]"
                    disabled={isDbLoading}
                  />
                  <Button onClick={runQuery} disabled={isDbLoading} className="gap-2">
                    <Play className="w-4 h-4" /> Run Query
                  </Button>
                </div>

                {sqlError && (
                  <div className="bg-destructive/10 text-destructive p-3 rounded-md flex items-center gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{sqlError}</span>
                  </div>
                )}

                {(() => {
                  const hasResults = results && (results as any).columns;
                  if (hasResults) {
                    return (
                      <div className="overflow-x-auto border rounded-md">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-muted text-muted-foreground border-b">
                            <tr>
                              {(results as any).columns.map((col: string, i: number) => (
                                <th key={i} className="px-4 py-2 font-medium">{col}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {(results as any).values.map((row: any[], i: number) => (
                              <tr key={i} className="border-b last:border-0 hover:bg-muted/50">
                                {row.map((val: any, j: number) => (
                                  <td key={j} className="px-4 py-2">{val}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  if (!sqlError) {
                    return <p className="text-sm text-muted-foreground italic">No results or query executed successfully without output.</p>;
                  }
                  return null;
                })()}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
