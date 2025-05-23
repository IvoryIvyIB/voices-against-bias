
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6 leading-tight">
          Understanding Systemic Racism
        </h1>
        <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
          Systemic racism refers to the ways in which institutional policies and practices create different outcomes for people of different races.
        </p>
        <div className="mt-10">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-amber-700 transition-colors shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
