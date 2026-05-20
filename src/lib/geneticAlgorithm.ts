export interface ChromosomeWithFitness {
  tv: number;
  radio: number;
  newspaper: number;
  fitness: number;
}

export interface OptimizationParams {
  budget: number;
  populationSize: number;
  generations: number;
  mutationRate: number;
}

// Sample sales prediction model based on the notebook
const MODEL_COEFFICIENTS = {
  tv: 0.05,
  radio: 0.19,
  newspaper: -0.001
};

const INTERCEPT = 2.94;

/**
 * Predict sales based on budget allocation
 * Uses a simplified linear regression model from the data
 */
function predictSales(tv: number, radio: number, newspaper: number): number {
  return (
    INTERCEPT +
    MODEL_COEFFICIENTS.tv * tv +
    MODEL_COEFFICIENTS.radio * radio +
    MODEL_COEFFICIENTS.newspaper * newspaper
  );
}

/**
 * Generate random population
 */
function generatePopulation(size: number, budget: number): ChromosomeWithFitness[] {
  const population: ChromosomeWithFitness[] = [];
  
  for (let i = 0; i < size; i++) {
    const tv = Math.random() * budget;
    const radio = Math.random() * (budget - tv);
    const newspaper = budget - tv - radio;
    
    const fitness = predictSales(tv, radio, newspaper);
    
    population.push({ tv, radio, newspaper, fitness });
  }
  
  return population;
}

/**
 * Crossover: combine two parents
 */
function crossover(parent1: ChromosomeWithFitness, parent2: ChromosomeWithFitness): ChromosomeWithFitness {
  const tvChild = (parent1.tv + parent2.tv) / 2;
  const radioChild = (parent1.radio + parent2.radio) / 2;
  const newspaperChild = (parent1.newspaper + parent2.newspaper) / 2;
  
  const fitness = predictSales(tvChild, radioChild, newspaperChild);
  
  return { tv: tvChild, radio: radioChild, newspaper: newspaperChild, fitness };
}

/**
 * Mutation: randomly adjust genes
 */
function mutate(chromosome: ChromosomeWithFitness, mutationRate: number, budget: number): ChromosomeWithFitness {
  let { tv, radio, newspaper } = chromosome;
  
  if (Math.random() < mutationRate) {
    const adjustment = (Math.random() - 0.5) * budget * 0.2; // ±10% of budget
    tv = Math.max(0, Math.min(budget, tv + adjustment));
  }
  
  if (Math.random() < mutationRate) {
    const adjustment = (Math.random() - 0.5) * budget * 0.2;
    radio = Math.max(0, Math.min(budget - tv, radio + adjustment));
  }
  
  newspaper = Math.max(0, budget - tv - radio);
  
  const fitness = predictSales(tv, radio, newspaper);
  
  return { tv, radio, newspaper, fitness };
}

/**
 * Main Genetic Algorithm
 */
export function optimizeAllocation(params: OptimizationParams): {
  bestAllocation: ChromosomeWithFitness;
  generationData: ChromosomeWithFitness[];
  expectedSales: number;
} {
  const { budget, populationSize, generations, mutationRate } = params;
  
  let population = generatePopulation(populationSize, budget);
  const generationData: ChromosomeWithFitness[] = [];
  
  for (let gen = 0; gen < generations; gen++) {
    // Sort by fitness (descending)
    population.sort((a, b) => b.fitness - a.fitness);
    
    // Store best of this generation
    generationData.push({ ...population[0] });
    
    // Selection: keep top performers
    const parents = population.slice(0, Math.ceil(populationSize * 0.2));
    
    // Generate children
    const children: ChromosomeWithFitness[] = [];
    while (children.length < populationSize - parents.length) {
      const parent1 = parents[Math.floor(Math.random() * parents.length)];
      const parent2 = parents[Math.floor(Math.random() * parents.length)];
      const child = crossover(parent1, parent2);
      const mutatedChild = mutate(child, mutationRate, budget);
      children.push(mutatedChild);
    }
    
    // New population
    population = [...parents, ...children];
  }
  
  // Final sort
  population.sort((a, b) => b.fitness - a.fitness);
  const bestAllocation = population[0];
  
  return {
    bestAllocation,
    generationData,
    expectedSales: bestAllocation.fitness
  };
}
