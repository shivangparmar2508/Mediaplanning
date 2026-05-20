import React, { useState } from 'react';
import { optimizeAllocation, OptimizationParams, ChromosomeWithFitness } from '@/lib/geneticAlgorithm.ts';

interface MediaAllocationFormProps {
  onOptimize: (result: {
    bestAllocation: ChromosomeWithFitness;
    generationData: ChromosomeWithFitness[];
    expectedSales: number;
  }) => void;
}

const MediaAllocationForm: React.FC<MediaAllocationFormProps> = ({ onOptimize }) => {
  const [budget, setBudget] = useState<number>(5000);
  const [populationSize, setPopulationSize] = useState<number>(50);
  const [generations, setGenerations] = useState<number>(100);
  const [mutationRate, setMutationRate] = useState<number>(0.15);
  const [isLoading, setIsLoading] = useState(false);

  const handleOptimize = async () => {
    setIsLoading(true);
    try {
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const result = optimizeAllocation({
        budget,
        populationSize,
        generations,
        mutationRate
      });

      onOptimize(result);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '24px'
    }}>
      <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', color: '#111827' }}>
        Optimization Parameters
      </h2>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
          Total Budget ($K)
        </label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          min="1000"
          max="100000"
          step="1000"
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
          Population Size
        </label>
        <input
          type="number"
          value={populationSize}
          onChange={(e) => setPopulationSize(Number(e.target.value))}
          min="10"
          max="500"
          step="10"
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
          Generations
        </label>
        <input
          type="number"
          value={generations}
          onChange={(e) => setGenerations(Number(e.target.value))}
          min="10"
          max="500"
          step="10"
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px'
          }}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
          Mutation Rate ({(mutationRate * 100).toFixed(0)}%)
        </label>
        <input
          type="range"
          value={mutationRate}
          onChange={(e) => setMutationRate(Number(e.target.value))}
          min="0.05"
          max="0.5"
          step="0.05"
          style={{
            width: '100%'
          }}
        />
      </div>

      <button
        onClick={handleOptimize}
        disabled={isLoading}
        style={{
          width: '100%',
          padding: '12px 16px',
          backgroundColor: isLoading ? '#9ca3af' : '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.2s'
        }}
      >
        {isLoading ? 'Optimizing...' : '🚀 Optimize Allocation'}
      </button>
    </div>
  );
};

export default MediaAllocationForm;
