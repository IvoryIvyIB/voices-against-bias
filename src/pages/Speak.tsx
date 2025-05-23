
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { AlertTriangle, Heart, MessageCircle } from 'lucide-react';

const Speak = () => {
  const [experience, setExperience] = useState('');
  const [context, setContext] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  // Mock submitted stories
  const stories = [
    {
      id: 1,
      context: "School",
      text: "I was repeatedly told I was 'articulate' in a way that felt like surprise rather than compliment. It made me question whether people expected less from me because of my race.",
      date: "2024-05-18"
    },
    {
      id: 2,
      context: "Work",
      text: "Despite having the same qualifications as my colleagues, I noticed I was often asked to speak for all people of my race during diversity discussions, which felt isolating.",
      date: "2024-05-15"
    },
    {
      id: 3,
      context: "Healthcare",
      text: "When I described my pain levels to medical professionals, I felt like I wasn't being taken seriously. I later learned about research showing pain disparities in healthcare.",
      date: "2024-05-12"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Please agree to the terms before submitting.');
      return;
    }
    if (experience.trim().length < 10) {
      alert('Please provide a more detailed experience.');
      return;
    }
    // Handle submission logic here
    alert('Thank you for sharing your experience. It will be reviewed before being published.');
    setExperience('');
    setContext('');
    setAgreedToTerms(false);
  };

  return (
    <Layout>
      <div className="py-12 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-stone-800 mb-4">Your Voice Matters</h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Share your experiences to help others understand the real impact of systemic racism. 
              Your story can create awareness and drive change.
            </p>
          </div>

          {/* Submission Form */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-stone-700 mb-2">
                  Describe your experience *
                </label>
                <textarea
                  id="experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="Share your experience with systemic racism..."
                  rows={6}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  required
                />
                <p className="text-sm text-stone-500 mt-2">
                  Please be respectful and focus on your personal experience.
                </p>
              </div>

              <div>
                <label htmlFor="context" className="block text-sm font-medium text-stone-700 mb-2">
                  Context (optional)
                </label>
                <select
                  id="context"
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">Select context...</option>
                  <option value="School">School/Education</option>
                  <option value="Work">Work/Employment</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Housing">Housing</option>
                  <option value="Public Spaces">Public Spaces</option>
                  <option value="Legal System">Legal System</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-stone-300 rounded"
                  />
                  <span className="text-sm text-stone-700">
                    Submit anonymously (recommended)
                  </span>
                </label>

                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-stone-300 rounded"
                    required
                  />
                  <span className="text-sm text-stone-700">
                    I agree that my submission may be published on this website after moderation, 
                    and I understand this is for educational purposes. *
                  </span>
                </label>
              </div>

              {/* Trigger Warning */}
              <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-amber-800">Content Notice</h3>
                    <p className="text-sm text-amber-700 mt-1">
                      Sharing experiences of racism can be emotionally challenging. Please take care of yourself 
                      and consider reaching out to support resources if needed.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 px-6 rounded-md hover:bg-amber-700 transition-colors font-medium"
              >
                Share My Experience
              </button>
            </form>
          </div>

          {/* Published Stories */}
          <div>
            <h2 className="text-2xl font-bold text-stone-800 mb-8 flex items-center">
              <MessageCircle className="h-6 w-6 mr-3 text-amber-600" />
              Community Experiences
            </h2>
            
            <div className="space-y-6">
              {stories.map(story => (
                <div key={story.id} className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                      {story.context}
                    </span>
                    <span className="text-sm text-stone-500">
                      {new Date(story.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <p className="text-stone-700 leading-relaxed italic">"{story.text}"</p>
                  
                  <div className="mt-4 pt-4 border-t border-stone-100">
                    <p className="text-sm text-stone-500">
                      Shared anonymously • This story has been reviewed and approved for publication
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-stone-600 italic flex items-center justify-center">
                <Heart className="h-4 w-4 mr-2 text-red-500" />
                Thank you to everyone who has shared their experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Speak;
