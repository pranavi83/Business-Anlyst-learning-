# Pranavi BA Lab

A No-Theory Senior Business Analyst mentoring platform designed to elevate a techno-functional professional to a credible, 5-year experienced Senior Business Analyst level. 

## Features

- **Radical Simplicity:** Clean, minimalist design using English Blue and Soft Peach.
- **Onboarding & Dashboard:** Streak tracker and modular progression.
- **"No-Theory" Survival Guide:** Understand Agile, BRDs, and Stakeholder Elicitation through real-world analogies (e.g., building a house, restaurant kitchen).
- **Tools Hub:** Practical insights on how a senior BA uses Jira, Confluence, SQL, Power BI, and Oracle.
- **Practice Lab:**
  - *User Story Forge:* Live INVEST scoring and Gherkin acceptance criteria generation.
  - *SQL Sandbox:* In-browser SQLite engine loaded with Agritech data for instant practice without a DB connection.
- **Case Studies:** High-level scenarios modeled after top-tier consulting firm interviews (e.g., Oracle migrations, Supply Chain Dashboards).
- **Career Toolkit:**
  - *Resume Translator:* Converts basic junior tasks into impact-driven senior bullets.
  - *Interview Bank:* Deep-dive into the STAR method for situational questions.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand (with localStorage persistence)
- **Animations:** Framer Motion
- **Database (Client-side):** sql.js (WebAssembly)

## Setup Instructions

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/pranavi83/Business-Anlyst-learning-.git
   cd Business-Anlyst-learning-
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server (CRITICAL STEP):**
   > [!IMPORTANT]
   > You MUST run the development server for the website to be accessible! If you get a "Site can't be reached" error, it means you skipped this step or closed the terminal window.
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser. Keep the terminal running in the background while you use the app.

## Troubleshooting

- **Site can't be reached on `localhost:3000`?** 
  Make sure you have opened a terminal in the project folder and executed `npm run dev`. Do not close this terminal, otherwise the server will shut down.
- **Missing dependencies?** 
  Run `npm install` to ensure all packages (including animations and sql.js) are correctly installed.

## Suggested Next Features

1. **AI Interview Simulator:** Integrate OpenAI/Gemini to conduct voice or text-based mock interviews using the STAR method, providing instant feedback on responses.
2. **Interactive Process Modeler:** Use React Flow to allow the user to build out "As-Is" and "To-Be" process maps visually within the app, rather than just reading about them.
3. **Advanced Data Visualization Sandbox:** Expand the SQL sandbox by connecting the query output directly into a Recharts-powered dashboard builder, simulating a real Power BI workflow.

---

## Interactive AI Tutor Mode

This repository includes a specialized prompt configuration to turn any advanced AI model into your personal, interactive Business Analyst tutor. 

### How to use:
Copy the prompt below and paste it into ChatGPT, Claude, Gemini, or any advanced LLM to start a continuous, step-by-step masterclass:

> **Role & Objective:**
> Act as an Elite Business Analyst Instructor and Resource Curator. Your goal is to teach me BRD, FRD, Agile, Jira, Excel, and Power BI up to the standard of a 5-year Senior BA working at top-tier global IT firms like Accenture.
>
> **Teaching Rules:**
> 1. **No Dry Theory:** Explain everything using real-world corporate scenarios.
> 2. **Paced Learning:** Teach me one module at a time. Provide a short reading or task, wait for my response, grade my work, and *then* move to the next module.
> 3. **Curate Resources:** For every topic, provide a highly realistic template (for BRDs/FRDs) and exact search terms to use on YouTube to find the best visual tutorials.
> 4. **The Master Case Study:** Use one continuous case study for the entire course: *Building an automated pricing and supply chain dashboard for an Agricultural Solutions Provider.*
>
> **Curriculum:**
> - **Module 1: The Blueprint (BRD & FRD)** (Agri-tech Business vs Functional Requirements)
> - **Module 2: The Engine (Agile & Jira)** (Sprint Planning, User Stories, Gherkin syntax)
> - **Module 3: Data Foundation (Excel)** (Pivot Tables, VLOOKUP/XLOOKUP, Data Validation)
> - **Module 4: The Presentation (Power BI)** (Connecting Excel data, choosing KPI visuals & charts)

### Reference Case Study & Model Answers

As you progress through the modules, refer to these industry-standard model answers for our **Agritech Solutions Dashboard** case study:

#### **Module 1: BRD & FRD (Model Answer)**
- **Business Requirement (BR-001):** The business requires a real-time tracking system to monitor the shelf-life of all agricultural inventory (e.g., seeds, liquid fertilizers).
  - *Value/Impact:* To prevent the distribution of expired goods and reduce inventory spoilage costs by 15% this fiscal year.
- **Functional Requirement (FR-001 - mapped to BR-001):** The dashboard system shall automatically calculate the days remaining until expiry for each product batch based on the "Date of Manufacture" data feed.
  - *System Behavior:* When a batch of fertilizer drops to exactly 30 days before its expiration date, the system must highlight that row in **RED** on the dashboard and trigger an automated email alert to the Regional Warehouse Manager.
  - *Data Dependencies:* Connection to the central inventory database.


