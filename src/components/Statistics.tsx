
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer } from './ui/chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';

const Statistics = () => {
  // Wealth gap data
  const wealthData = [
    { name: 'White', value: 188200, fill: '#4ade80' },
    { name: 'Latino', value: 36100, fill: '#facc15' },
    { name: 'Black', value: 24100, fill: '#f87171' },
  ];

  // School funding data
  const fundingData = {
    whiteDistricts: 14700,  // Approximate average per student
    colorDistricts: 12500,  // Approximate average per student
    gap: 2200
  };

  // Maternal mortality data
  const maternalData = {
    whiteRate: 1,
    blackRate: 3.5, // Using midpoint of 3-4 times more likely
  };

  return (
    <section id="real-world-impact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">
          Real-World Impact
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Resume Bias */}
          <div className="bg-stone-50 p-8 rounded-lg">
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
          <div className="bg-stone-50 p-8 rounded-lg">
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
          </div>
        </div>
        
        {/* New Data Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 1. Wealth Gap */}
          <Card>
            <CardHeader>
              <CardTitle>Median Household Wealth (2022)</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={wealthData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(value) => `$${value.toLocaleString()}`} />
                    <YAxis dataKey="name" type="category" width={60} />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, "Wealth"]}
                      labelFormatter={(value) => `${value}`}
                    />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm mt-4 text-stone-600">
                The typical White family holds nearly 8 times more wealth than the typical Black family.
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <p className="text-xs text-stone-500">
                Source: Federal Reserve, Survey of Consumer Finances
              </p>
            </CardFooter>
          </Card>

          {/* 2. School Funding */}
          <Card>
            <CardHeader>
              <CardTitle>School Funding Gap</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="flex flex-col items-center justify-center h-64">
                <div className="flex w-full max-w-xs justify-between mb-8">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold">${fundingData.whiteDistricts.toLocaleString()}</div>
                    <div className="h-36 w-20 bg-blue-500 rounded-t-lg relative">
                      <div className="absolute -bottom-6 w-full text-center text-sm">
                        White-majority districts
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold">${fundingData.colorDistricts.toLocaleString()}</div>
                    <div className="h-24 w-20 bg-amber-500 rounded-t-lg relative">
                      <div className="absolute -bottom-6 w-full text-center text-sm">
                        Non-white-majority districts
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <span className="font-bold text-red-600">${fundingData.gap.toLocaleString()}</span> less per student annually
                </div>
              </div>
              <p className="text-sm mt-4 text-stone-600">
                Racial funding disparities affect educational opportunity starting early in life.
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <p className="text-xs text-stone-500">
                Source: EdBuild Report
              </p>
            </CardFooter>
          </Card>

          {/* 3. Maternal Mortality */}
          <Card>
            <CardHeader>
              <CardTitle>Maternal Mortality Rate</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="flex flex-col items-center justify-center h-64">
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`aspect-square rounded-full ${i === 0 ? 'bg-blue-500' : 'bg-red-500'}`}
                    ></div>
                  ))}
                </div>
                <div className="text-center font-semibold">
                  Black women are <span className="text-red-600 text-xl">{maternalData.blackRate}×</span> more likely to die from pregnancy-related causes
                </div>
              </div>
              <p className="text-sm mt-4 text-stone-600">
                Black women face disproportionately high health risks—even when income and education are equal.
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <p className="text-xs text-stone-500">
                Source: Centers for Disease Control and Prevention (CDC)
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
