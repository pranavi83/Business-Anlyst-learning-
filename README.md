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

3. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Suggested Next Features

1. **AI Interview Simulator:** Integrate OpenAI/Gemini to conduct voice or text-based mock interviews using the STAR method, providing instant feedback on responses.
2. **Interactive Process Modeler:** Use React Flow to allow the user to build out "As-Is" and "To-Be" process maps visually within the app, rather than just reading about them.
3. **Advanced Data Visualization Sandbox:** Expand the SQL sandbox by connecting the query output directly into a Recharts-powered dashboard builder, simulating a real Power BI workflow.
