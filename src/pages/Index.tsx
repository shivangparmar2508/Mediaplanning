import React, { useState } from 'react';
import MediaAllocationForm from '@/components/MediaAllocationForm.tsx';
import AllocationResults from '@/components/AllocationResults.tsx';
import GenerationChart from '@/components/GenerationChart.tsx';
import MediaComparisonTable from '@/components/MediaComparisonTable.tsx';
import { ChromosomeWithFitness } from '@/lib/geneticAlgorithm.ts';

const Index = () => {
  const [optimizationResult, setOptimizationResult] = useState<{
    bestAllocation: ChromosomeWithFitness;
    generationData: ChromosomeWithFitness[];
    expectedSales: number;
    totalBudget: number;
  } | null>(null);

  const [activeTab, setActiveTab] = useState<'results' | 'chart' | 'comparison'>('results');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0', padding: '20px 0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827', marginBottom: '5px' }}>
            Media Budget Allocator
          </h1>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>
            Optimize your advertising budget across channels
          </p>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px', paddingTop: '40px', paddingBottom: '40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
          <div>
            <MediaAllocationForm onOptimize={(result) => {
              setOptimizationResult({
                ...result,
                totalBudget: result.bestAllocation.tv + result.bestAllocation.radio + result.bestAllocation.newspaper
              });
              setActiveTab('results');
            }} />
          </div>
          
          <div>
            {optimizationResult ? (
              <>
                <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', borderBottom: '1px solid #e0e0e0' }}>
                  <button
                    onClick={() => setActiveTab('results')}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: activeTab === 'results' ? '#3b82f6' : 'transparent',
                      color: activeTab === 'results' ? 'white' : '#666',
                      border: 'none',
                      borderRadius: '4px 4px 0 0',
                      cursor: 'pointer',
                      fontWeight: '500'
                    }}
                  >
                    📊 Results
                  </button>
                  <button
                    onClick={() => setActiveTab('chart')}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: activeTab === 'chart' ? '#3b82f6' : 'transparent',
                      color: activeTab === 'chart' ? 'white' : '#666',
                      border: 'none',
                      borderRadius: '4px 4px 0 0',
                      cursor: 'pointer',
                      fontWeight: '500'
                    }}
                  >
                    📈 Evolution
                  </button>
                  <button
                    onClick={() => setActiveTab('comparison')}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: activeTab === 'comparison' ? '#3b82f6' : 'transparent',
                      color: activeTab === 'comparison' ? 'white' : '#666',
                      border: 'none',
                      borderRadius: '4px 4px 0 0',
                      cursor: 'pointer',
                      fontWeight: '500'
                    }}
                  >
                    📋 Comparison
                  </button>
                </div>

                {activeTab === 'results' && (
                  <AllocationResults 
                    bestAllocation={optimizationResult.bestAllocation}
                    expectedSales={optimizationResult.expectedSales}
                    totalBudget={optimizationResult.totalBudget}
                  />
                )}

                {activeTab === 'chart' && (
                  <GenerationChart 
                    generationData={optimizationResult.generationData}
                    totalBudget={optimizationResult.totalBudget}
                  />
                )}

                {activeTab === 'comparison' && (
                  <MediaComparisonTable 
                    bestAllocation={optimizationResult.bestAllocation}
                    totalBudget={optimizationResult.totalBudget}
                  />
                )}
              </>
            ) : (
              <div style={{
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '40px'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>📊</div>
                <p style={{ fontSize: '16px', color: '#6b7280', textAlign: 'center' }}>
                  Set your parameters and click "Optimize Allocation" to see results
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
