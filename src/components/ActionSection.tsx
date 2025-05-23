
import React from 'react';
import { Vote, MessageCircle, Share2, BookOpen } from 'lucide-react';

const ActionSection = () => {
  const actions = [
    {
      icon: Vote,
      title: "Vote",
      description: "Participate in elections at all levels to support candidates who prioritize racial equity."
    },
    {
      icon: MessageCircle,
      title: "Speak Up",
      description: "Challenge racist comments and behaviors when you encounter them in your daily life."
    },
    {
      icon: Share2,
      title: "Share Knowledge",
      description: "Educate others about systemic racism and share reliable resources and information."
    },
    {
      icon: BookOpen,
      title: "Keep Learning",
      description: "Continue educating yourself through books, documentaries, and conversations."
    }
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">What You Can Do</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Everyone has a role to play in addressing systemic racism. Here are meaningful ways to make a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {actions.map((action, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <action.icon className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-3">{action.title}</h3>
              <p className="text-stone-600 text-sm">{action.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-stone-800 mb-4">Remember</h3>
            <p className="text-stone-600 leading-relaxed">
              Creating change takes time and sustained effort. Small actions, when multiplied by millions of people, 
              can transform the world. Your voice and actions matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
