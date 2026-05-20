import React from 'react';
import { ChromosomeWithFitness } from '@/lib/geneticAlgorithm.ts';

interface GenerationChartProps {
  generationData: ChromosomeWithFitness[];
  totalBudget: number;
}

const GenerationChart: React.FC<GenerationChartProps> = ({ generationData, totalBudget }) => {
  // Simple ASCII-style chart
  if (generationData.length === 0) return null;

  const maxFitness = Math.max(...generationData.map(g => g.fitness));
  const minFitness = Math.min(...generationData.map(g => g.fitness));
  const range = maxFitness - minFitness || 1;

  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '24px'
    }}>
      <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px', color: '#111827' }}>
        📈 Evolution Over Generations
      </h3>

      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        height: '300px',
        gap: '2px',
        marginBottom: '20px'
      }}>
        {generationData.map((data, idx) => {
          const normalizedHeight = ((data.fitness - minFitness) / range) * 100;
          return (
            <div
              key={idx}
              style={{
                flex: 1,
                height: `${normalizedHeight}%`,
                backgroundColor: '#3b82f6',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
              title={`Gen ${idx}: ${data.fitness.toFixed(2)}K units`}
            />
          );
        })}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '12px',
        fontSize: '13px'
      }}>
        <div style={{ backgroundColor: '#f3f4f6', padding: '12px', borderRadius: '6px' }}>
          <p style={{ color: '#6b7280', marginBottom: '4px' }}>Generations</p>
          <p style={{ fontWeight: '600', color: '#1f2937' }}>{generationData.length}</p>
        </div>
        <div style={{ backgroundColor: '#f3f4f6', padding: '12px', borderRadius: '6px' }}>
          <p style={{ color: '#6b7280', marginBottom: '4px' }}>Best Fitness</p>
          <p style={{ fontWeight: '600', color: '#1f2937' }}>{maxFitness.toFixed(2)}K</p>
        </div>
        <div style={{ backgroundColor: '#f3f4f6', padding: '12px', borderRadius: '6px' }}>
          <p style={{ color: '#6b7280', marginBottom: '4px' }}>Initial Fitness</p>
          <p style={{ fontWeight: '600', color: '#1f2937' }}>{generationData[0].fitness.toFixed(2)}K</p>
        </div>
        <div style={{ backgroundColor: '#f3f4f6', padding: '12px', borderRadius: '6px' }}>
          <p style={{ color: '#6b7280', marginBottom: '4px' }}>Improvement</p>
          <p style={{ fontWeight: '600', color: '#1f2937' }}>
            {((maxFitness - generationData[0].fitness) / generationData[0].fitness * 100).toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenerationChart;
