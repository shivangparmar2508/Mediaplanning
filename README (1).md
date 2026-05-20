
📊 Media Budget Allocator
Optimize your advertising budget using intelligent planning and data-driven decision-making.

Website_link: http://media-planner-vision.lovable.app

🧠 Overview
Media Budget Allocator is a web-based application that helps marketing professionals allocate their advertising budget optimally across three major media channels:

📺 Television (TV)

📻 Radio

📰 Newspaper

The tool uses a Genetic Algorithm to determine the best combination of budget distribution that maximizes expected sales. It simulates generations of optimization to improve the allocation strategy iteratively.

🎯 Objective
The purpose of this project is to:

Simplify the media planning process

Provide a visual and interactive platform for decision-making

Leverage AI (via evolutionary algorithms) to deliver data-backed allocation insights

🛠️ Features
➤ Media Allocation Form
Users input:

Total advertising budget

Optimization parameters (like population size, generations, etc.)

➤ Allocation Results
Displays:

Optimal budget distribution across TV, Radio, and Newspaper

Estimated sales output

➤ Evolution Chart
Visualizes how budget efficiency improves across generations of the genetic algorithm.

➤ Media Comparison Table
Compares optimal allocation with sample/manual allocation strategies.

📐 Genetic Algorithm Formula
The optimization is based on the fitness function:

text
Copy
Edit
F(C) = 22.1 * F(TV) + 10.4 * F(Radio) + 9.3 * F(Newspaper)
Where:

F(TV), F(Radio), F(Newspaper) = budget fractions for each channel

The weights represent the sales efficiency factor of each media channel.

🧩 Tech Stack
Layer	Technologies Used
Frontend	React + TypeScript
Backend	Node.js / Serverless Functions (optional)
UI Components	Tailwind CSS + Lucide Icons
Logic Engine	Genetic Algorithm (in JS/TS)
Visualization	Custom Chart & Table Components

🚀 How It Works
User enters budget and settings.

The Genetic Algorithm generates a population of allocations.

It evolves them using selection, crossover, and mutation.

After several generations, it picks the best-performing budget plan.

Results are visualized using pie charts, evolution graphs, and comparison tables.

📸 Screenshots
Homepage with form and media icons

Tabs for results, evolution chart, and comparison

Dynamic visualizations and tables for user analysis

(Add screenshots here if needed)

📦 How to Run Locally
bash
Copy
Edit
git clone <your-repo-link>
cd media-budget-allocator
npm install
npm run dev
Then open http://localhost:3000 in your browser.

✅ Future Enhancements
Add more media channels (e.g., Social Media, Web Ads)

Integrate real sales data for training

Enable user accounts and campaign history saving

Export reports as PDF

👤 Author
Shivang
Final Year B.Tech Project (2025)
Email: shivang.parmar.ug22@nsut.ac.in



