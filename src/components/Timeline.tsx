
import React from 'react';

const Timeline = () => {
  const events = [
    { year: 1896, title: "Plessy v. Ferguson", description: "'Separate but equal' doctrine established" },
    { year: 1954, title: "Brown v. Board", description: "Segregation in schools ruled unconstitutional" },
    { year: 1964, title: "Civil Rights Act", description: "Prohibited discrimination in public places" },
    { year: 1965, title: "Voting Rights Act", description: "Protected voting rights for all citizens" },
    { year: 1968, title: "Fair Housing Act", description: "Prohibited housing discrimination" },
    { year: 2020, title: "Nationwide Protests", description: "Renewed focus on racial justice and reform" }
  ];

  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">
          Historical Timeline
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-amber-300"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-stone-200">
                    <div className="text-2xl font-bold text-amber-700 mb-2">{event.year}</div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-2">{event.title}</h3>
                    <p className="text-stone-600 text-sm">{event.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
