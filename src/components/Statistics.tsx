
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChartContainer, ChartTooltipContent } from './ui/chart';
import { ArrowUp } from 'lucide-react';

const Statistics = () => {
  const wealthData = [
    { name: 'White', value: 188200, fill: '#22c55e' },
    { name: 'Latino', value: 36100, fill: '#f59e0b' },
    { name: 'Black', value: 24100, fill: '#ef4444' },
  ];

  return (
    <section id="real-world-impact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">
          Real-World Impact
        </h2>
        
        <div className="grid grid-cols-1 gap-12">
          {/* Resume Bias */}
          <div className="bg-stone-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-stone-800 mb-6">Resume Callback Rates</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-stone-600">"White-sounding" names</span>
                  <span className="font-semibold">10.1%</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: '10.1%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-stone-600">"Black-sounding" names</span>
                  <span className="font-semibold">6.7%</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full" style={{width: '6.7%'}}></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-stone-600 mt-4">
              Source: National Bureau of Economic Research study
            </p>
          </div>
          
          {/* Arrest Rates */}
          <div className="bg-stone-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-stone-800 mb-6">Drug Arrest Disparities</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-stone-600">Black Americans</span>
                  <span className="font-semibold">3.7x higher</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-stone-600">White Americans</span>
                  <span className="font-semibold">baseline</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: '20%'}}></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-stone-600 mt-4">
              Despite similar usage rates across racial groups
            </p>
            <p className="text-sm text-stone-600 mt-1">
              Source: ACLU, FBI arrest statistics
            </p>
          </div>

          {/* Wealth Gap */}
          <div className="bg-stone-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-stone-800 mb-6">Median Household Wealth (2022)</h3>
            <div className="h-64">
              <ChartContainer
                config={{
                  white: { label: "White", color: "#22c55e" },
                  latino: { label: "Latino", color: "#f59e0b" },
                  black: { label: "Black", color: "#ef4444" },
                }}
                className="h-full"
              >
                <BarChart
                  layout="vertical"
                  data={wealthData}
                  margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                >
                  <XAxis type="number" tickFormatter={(value) => `$${value.toLocaleString()}`} />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip content={<ChartTooltipContent formatter={(value) => `$${value.toLocaleString()}`} />} />
                  <Bar dataKey="value" fill="#8884d8">
                    {wealthData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
            <p className="text-sm text-stone-600 mt-4">
              The typical White family holds nearly 8 times more wealth than the typical Black family.
            </p>
            <p className="text-sm text-stone-600 mt-1">
              Source: Federal Reserve, Survey of Consumer Finances
            </p>
          </div>

          {/* School Funding Disparity */}
          <div className="bg-stone-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-stone-800 mb-6">School Funding Gap</h3>
            <div className="flex justify-center items-end space-x-8 h-64">
              <div className="flex flex-col items-center">
                <div className="h-48 w-32 bg-blue-500 rounded-t-lg flex items-start justify-center pt-2">
                  <span className="font-semibold text-white">$12,000</span>
                </div>
                <div className="w-full text-center mt-2 text-stone-600">White-majority districts</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-32 w-32 bg-red-500 rounded-t-lg flex items-start justify-center pt-2">
                  <span className="font-semibold text-white">$9,800</span>
                </div>
                <div className="w-full text-center mt-2 text-stone-600">Non-white-majority districts</div>
              </div>
              <div className="flex flex-col items-center justify-end h-48">
                <div className="bg-red-100 border border-red-500 p-3 rounded-lg text-center">
                  <span className="font-bold text-red-600 text-xl">- $2,200</span>
                  <span className="block text-sm text-red-800">per student annually</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-stone-600 mt-4">
              Racial funding disparities affect educational opportunity starting early in life.
            </p>
            <p className="text-sm text-stone-600 mt-1">
              Source: EdBuild Report
            </p>
          </div>

          {/* Maternal Mortality */}
          <div className="bg-stone-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-stone-800 mb-6">Maternal Mortality Rate</h3>
            <div className="flex flex-col items-center justify-center h-64">
              <div className="flex items-center justify-center space-x-12">
                <div className="text-center">
                  <div className="flex">
                    <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center">
                      <ArrowUp className="h-10 w-10 text-white" />
                    </div>
                    <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center">
                      <ArrowUp className="h-10 w-10 text-white" />
                    </div>
                    <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center">
                      <ArrowUp className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <p className="mt-3 font-semibold text-stone-800">Black women</p>
                </div>
                <div className="text-center">
                  <div className="flex">
                    <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
                      <ArrowUp className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <p className="mt-3 font-semibold text-stone-800">White women</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <span className="text-xl font-bold text-red-600">3-4x higher risk</span>
                <span className="block text-stone-800">of pregnancy-related death</span>
              </div>
            </div>
            <p className="text-sm text-stone-600 mt-4">
              Black women face disproportionately high health risks—even when income and education are equal.
            </p>
            <p className="text-sm text-stone-600 mt-1">
              Source: Centers for Disease Control and Prevention (CDC)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
