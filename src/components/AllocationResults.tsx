import React from 'react';
import { ChromosomeWithFitness } from '@/lib/geneticAlgorithm.ts';

interface AllocationResultsProps {
  bestAllocation: ChromosomeWithFitness;
  expectedSales: number;
  totalBudget: number;
}

const AllocationResults: React.FC<AllocationResultsProps> = ({
  bestAllocation,
  expectedSales,
  totalBudget
}) => {
  const tvPercent = (bestAllocation.tv / totalBudget) * 100;
  const radioPercent = (bestAllocation.radio / totalBudget) * 100;
  const newspaperPercent = (bestAllocation.newspaper / totalBudget) * 100;

  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '24px'
    }}>
      <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px', color: '#111827' }}>
        📊 Optimal Budget Allocation
      </h3>

      <div style={{ marginBottom: '24px' }}>
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontWeight: '500', color: '#374151' }}>📺 TV</span>
            <span style={{ fontWeight: '600', color: '#1f2937' }}>${bestAllocation.tv.toFixed(2)}K</span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: '#e5e7eb',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${tvPercent}%`,
              height: '100%',
              backgroundColor: '#ef4444'
            }} />
          </div>
          <span style={{ fontSize: '12px', color: '#6b7280' }}>{tvPercent.toFixed(1)}%</span>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontWeight: '500', color: '#374151' }}>📻 Radio</span>
            <span style={{ fontWeight: '600', color: '#1f2937' }}>${bestAllocation.radio.toFixed(2)}K</span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: '#e5e7eb',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${radioPercent}%`,
              height: '100%',
              backgroundColor: '#3b82f6'
            }} />
          </div>
          <span style={{ fontSize: '12px', color: '#6b7280' }}>{radioPercent.toFixed(1)}%</span>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontWeight: '500', color: '#374151' }}>📰 Newspaper</span>
            <span style={{ fontWeight: '600', color: '#1f2937' }}>${bestAllocation.newspaper.toFixed(2)}K</span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: '#e5e7eb',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${newspaperPercent}%`,
              height: '100%',
              backgroundColor: '#f59e0b'
            }} />
          </div>
          <span style={{ fontSize: '12px', color: '#6b7280' }}>{newspaperPercent.toFixed(1)}%</span>
        </div>
      </div>

      <div style={{
        backgroundColor: '#f0f9ff',
        border: '1px solid #bfdbfe',
        borderRadius: '6px',
        padding: '16px'
      }}>
        <p style={{ fontSize: '12px', color: '#0369a1', marginBottom: '8px', fontWeight: '500' }}>
          🎯 Expected Sales
        </p>
        <p style={{ fontSize: '24px', fontWeight: '700', color: '#0c63e4' }}>
          {expectedSales.toFixed(2)}K units
        </p>
      </div>
    </div>
  );
};

export default AllocationResults;
