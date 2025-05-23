
import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6 leading-tight">
          Understanding Systemic Racism
        </h1>
        <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
          Systemic racism refers to the ways in which institutional policies and practices create different outcomes for people of different races.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button 
            onClick={() => scrollToSection('how-it-operates')}
            className="bg-amber-600 text-white hover:bg-amber-700"
          >
            How It Operates
          </Button>
          <Button 
            onClick={() => scrollToSection('historical-timeline')}
            className="bg-amber-600 text-white hover:bg-amber-700"
          >
            Historical Timeline
          </Button>
          <Button 
            onClick={() => scrollToSection('real-world-impact')}
            className="bg-amber-600 text-white hover:bg-amber-700"
          >
            Real-World Impact
          </Button>
          <Button 
            onClick={() => scrollToSection('what-you-can-do')}
            className="bg-amber-600 text-white hover:bg-amber-700"
          >
            What You Can Do
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
