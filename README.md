# 📊 Media Budget Allocator

**Optimize your advertising spend with AI-driven planning and actionable insights.**  
A final-year B.Tech project by [Shivang](mailto:shivang.parmar.ug22@nsut.ac.in)

🔗 **Live Demo**: [media-planner-vision.lovable.app](http://media-planner-vision.lovable.app)

---

## 🧠 Overview

**Media Budget Allocator** is a web-based tool that empowers marketing professionals to make smarter budget allocation decisions across three traditional advertising channels:

- 📺 **Television**
- 📻 **Radio**
- 📰 **Newspaper**

The application uses a **Genetic Algorithm** to simulate and evolve different allocation strategies. It determines the optimal distribution of a given advertising budget to **maximize expected sales**.

---

## 🎯 Project Goals

- 🎯 Simplify the media planning process  
- 📊 Provide a visual and interactive decision-making platform  
- 🤖 Use AI (Genetic Algorithms) to uncover the most effective budget split  
- 📈 Empower users with data-backed insights

---

## 🛠️ Features

### 🧾 Media Allocation Form
Users can input:
- Total advertising budget
- Optimization parameters (e.g., population size, number of generations, mutation rate)

### 📊 Allocation Results
- Optimal budget split across TV, Radio, Newspaper
- Estimated total sales based on the optimized allocation

### 📈 Evolution Chart
- Real-time line graph showing how allocation effectiveness improves over each generation

### 📋 Media Comparison Table
- Compare optimized budget with sample/manual allocations
- Visual insight into the impact of poor vs. ideal allocation

---

## 📐 Optimization Formula

The Genetic Algorithm maximizes the following **fitness function**:

F(C) = 22.1 * F(TV) + 10.4 * F(Radio) + 9.3 * F(Newspaper)


Where:

- `F(TV)`, `F(Radio)`, `F(Newspaper)` are the **fractions of the total budget**
- Coefficients (`22.1`, `10.4`, `9.3`) reflect the **sales efficiency** of each medium

The algorithm aims to evolve the population to reach an optimal `F(C)` value by selection, crossover, and mutation techniques.

---

## 🧩 Tech Stack

| Layer         | Technology                          |
|---------------|-------------------------------------|
| Frontend      | React + TypeScript                  |
| UI Framework  | Tailwind CSS + Lucide Icons         |
| Backend       | Node.js / Serverless Functions (optional) |
| Algorithm     | Genetic Algorithm (JavaScript/TypeScript)   |
| Visualization | Custom Charts and Tables            |

---

## 🚀 How It Works

1. User inputs the total advertising budget and tuning parameters for the genetic algorithm
2. A population of candidate budget splits is randomly initialized
3. Each generation:
   - Selects the fittest individuals
   - Performs crossover and mutation to generate new candidates
4. After several generations, the best candidate is selected as the **optimal allocation**

---

## 📦 Running Locally

```bash
git clone <your-repo-link>
cd media-budget-allocator
npm install
npm run dev
👤 Author
Shivang
Final Year B.Tech (2025)
📧 shivang.parmar.ug22@nsut.ac.in
