
import React from 'react';

const Statistics = () => {
  return (
    <section id="real-world-impact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">
          Real-World Impact
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
      </div>
    </section>
  );
};

export default Statistics;
