import React from 'react';
import { ChromosomeWithFitness } from '@/lib/geneticAlgorithm.ts';

interface MediaComparisonTableProps {
  bestAllocation: ChromosomeWithFitness;
  totalBudget: number;
}

const MediaComparisonTable: React.FC<MediaComparisonTableProps> = ({
  bestAllocation,
  totalBudget
}) => {
  // Generate some sample allocations for comparison
  const samples = [
    {
      name: 'Optimal (GA)',
      tv: bestAllocation.tv,
      radio: bestAllocation.radio,
      newspaper: bestAllocation.newspaper,
      sales: bestAllocation.fitness,
      isOptimal: true
    },
    {
      name: 'Equal Split',
      tv: totalBudget / 3,
      radio: totalBudget / 3,
      newspaper: totalBudget / 3,
      sales: (totalBudget / 3) * 0.05 + (totalBudget / 3) * 0.19 + (totalBudget / 3) * (-0.001) + 2.94
    },
    {
      name: 'TV Heavy (50%)',
      tv: totalBudget * 0.5,
      radio: totalBudget * 0.3,
      newspaper: totalBudget * 0.2,
      sales: totalBudget * 0.5 * 0.05 + totalBudget * 0.3 * 0.19 + totalBudget * 0.2 * (-0.001) + 2.94
    },
    {
      name: 'Radio Heavy (50%)',
      tv: totalBudget * 0.2,
      radio: totalBudget * 0.5,
      newspaper: totalBudget * 0.3,
      sales: totalBudget * 0.2 * 0.05 + totalBudget * 0.5 * 0.19 + totalBudget * 0.3 * (-0.001) + 2.94
    }
  ];

  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '24px',
      overflowX: 'auto'
    }}>
      <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px', color: '#111827' }}>
        📋 Allocation Strategies Comparison
      </h3>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '13px'
      }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Strategy</th>
            <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: '#374151' }}>📺 TV ($K)</th>
            <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: '#374151' }}>📻 Radio ($K)</th>
            <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: '#374151' }}>📰 News ($K)</th>
            <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: '#374151' }}>📈 Sales (K units)</th>
          </tr>
        </thead>
        <tbody>
          {samples.map((sample, idx) => (
            <tr
              key={idx}
              style={{
                borderBottom: '1px solid #e5e7eb',
                backgroundColor: sample.isOptimal ? '#f0f9ff' : idx % 2 === 0 ? '#ffffff' : '#f9fafb'
              }}
            >
              <td style={{
                padding: '12px',
                fontWeight: sample.isOptimal ? '600' : '500',
                color: sample.isOptimal ? '#0c63e4' : '#1f2937'
              }}>
                {sample.isOptimal ? '✨ ' : ''}{sample.name}
              </td>
              <td style={{ padding: '12px', textAlign: 'right', color: '#1f2937' }}>
                ${sample.tv.toFixed(2)}
              </td>
              <td style={{ padding: '12px', textAlign: 'right', color: '#1f2937' }}>
                ${sample.radio.toFixed(2)}
              </td>
              <td style={{ padding: '12px', textAlign: 'right', color: '#1f2937' }}>
                ${sample.newspaper.toFixed(2)}
              </td>
              <td style={{
                padding: '12px',
                textAlign: 'right',
                fontWeight: '600',
                color: sample.isOptimal ? '#0c63e4' : '#1f2937'
              }}>
                {sample.sales.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '20px', padding: '12px', backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '6px', fontSize: '13px', color: '#166534' }}>
        <p style={{ fontWeight: '500', marginBottom: '4px' }}>💡 Insight:</p>
        <p>The genetic algorithm found an optimal allocation that increases sales by{' '}
          {((bestAllocation.fitness - samples[1].sales) / samples[1].sales * 100).toFixed(1)}% compared to equal split.
        </p>
      </div>
    </div>
  );
};

export default MediaComparisonTable;
