
import React from 'react';

const Timeline = () => {
  const events = [
    {
      year: 1896,
      title: "Plessy v. Ferguson",
      description: "The Supreme Court upheld racial segregation under the \"separate but equal\" doctrine, legitimizing decades of systemic discrimination in public facilities."
    },
    {
      year: 1934,
      title: "Redlining Institutionalized",
      description: "The Federal Housing Administration (FHA) created residential security maps, systematically denying home loans to Black communities—leading to generational wealth gaps and segregated neighborhoods."
    },
    {
      year: 1954,
      title: "Brown v. Board of Education",
      description: "The Supreme Court ruled that racial segregation in public schools was unconstitutional, overturning Plessy v. Ferguson and sparking the modern civil rights movement."
    },
    {
      year: 1964,
      title: "Civil Rights Act",
      description: "Banned discrimination based on race, color, religion, sex, or national origin in employment practices and public accommodations—one of the most significant legislative achievements in U.S. history."
    },
    {
      year: 1965,
      title: "Voting Rights Act",
      description: "Outlawed discriminatory voting practices like literacy tests and poll taxes. Empowered federal oversight in states with histories of voter suppression."
    },
    {
      year: 1968,
      title: "Fair Housing Act",
      description: "Prohibited housing discrimination in the sale, rental, and financing of housing based on race, religion, national origin, or sex. Aimed to dismantle the legacy of redlining."
    },
    {
      year: 1971,
      title: "War on Drugs Declared",
      description: "Federal policies targeting drug use disproportionately affected Black and Latino communities. Mass incarceration surged, especially for nonviolent offenses."
    },
    {
      year: 2013,
      title: "Shelby County v. Holder",
      description: "The Supreme Court invalidated a key part of the Voting Rights Act, removing federal oversight and allowing states to enact new voter ID laws—many of which disproportionately affect communities of color."
    },
    {
      year: 2014,
      title: "Black Lives Matter Movement Rises",
      description: "Following the killing of Michael Brown in Ferguson, Missouri, a national movement emerged to address police brutality, racial injustice, and systemic inequality."
    },
    {
      year: 2020,
      title: "Nationwide Protests",
      description: "After the killing of George Floyd, millions joined protests worldwide calling for justice, police reform, and an end to systemic racism, reigniting the push for structural change."
    }
  ];

  return (
    <section id="historical-timeline" className="py-16 bg-stone-50">
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
