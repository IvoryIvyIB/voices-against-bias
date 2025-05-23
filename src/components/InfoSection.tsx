
import React from 'react';
import { Book, Home, Briefcase, Heart } from 'lucide-react';

const InfoSection = () => {
  const sections = [
    {
      icon: Book,
      title: "Definition",
      description: "Systemic racism encompasses the complex array of antiblack practices, the unjustly gained political-economic power of whites, and the continuing economic and other resource inequalities."
    },
    {
      icon: Home,
      title: "Housing & Redlining",
      description: "Historical practices like redlining created segregated neighborhoods and wealth gaps that persist today, affecting property values and community resources."
    },
    {
      icon: Briefcase,
      title: "Employment Bias",
      description: "Studies show resumes with 'white-sounding' names receive 50% more callbacks than identical resumes with 'Black-sounding' names."
    },
    {
      icon: Heart,
      title: "Healthcare Disparities",
      description: "Systemic barriers in healthcare lead to significant health outcome differences, including maternal mortality rates and access to quality care."
    }
  ];

  return (
    <section id="how-it-operates" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">
          How Systemic Racism Operates
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="text-center group">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <section.icon className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-3">{section.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
