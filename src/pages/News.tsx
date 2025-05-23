
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Search, Calendar, BookOpen } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState('all');

  // Mock news data
  const newsArticles = [
    {
      id: 1,
      headline: "Study Reveals Persistent Hiring Bias in Tech Industry",
      source: "Research Journal",
      date: "2024-05-20",
      summary: "New research shows significant disparities in hiring rates for technology positions, with implications for workplace diversity.",
      tags: ["Employment"],
      isPeerReviewed: true,
      url: "#"
    },
    {
      id: 2,
      headline: "Housing Discrimination Cases Rise in Major Cities",
      source: "City News Network",
      date: "2024-05-18",
      summary: "Fair housing advocates report increased discrimination complaints, particularly in rental housing markets.",
      tags: ["Housing"],
      isPeerReviewed: false,
      url: "#"
    },
    {
      id: 3,
      headline: "Educational Achievement Gap Study Released",
      source: "Education Research Institute",
      date: "2024-05-15",
      summary: "Comprehensive analysis reveals ongoing disparities in educational outcomes and resource allocation.",
      tags: ["Education"],
      isPeerReviewed: true,
      url: "#"
    },
    {
      id: 4,
      headline: "Healthcare Access Barriers Documented in Rural Areas",
      source: "Health Policy Review",
      date: "2024-05-12",
      summary: "Research highlights systematic barriers to healthcare access affecting minority communities in rural regions.",
      tags: ["Health"],
      isPeerReviewed: true,
      url: "#"
    }
  ];

  const filters = [
    { value: 'all', label: 'All Topics' },
    { value: 'Policing', label: 'Policing' },
    { value: 'Education', label: 'Education' },
    { value: 'Housing', label: 'Housing' },
    { value: 'Health', label: 'Health' },
    { value: 'Employment', label: 'Employment' }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || article.tags.includes(selectedFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <Layout>
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-stone-800 mb-4">Latest News & Research</h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Stay informed with the latest news, research, and developments related to systemic racism and social justice.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-stone-50 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              {/* Topic Filter */}
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                {filters.map(filter => (
                  <option key={filter.value} value={filter.value}>{filter.label}</option>
                ))}
              </select>

              {/* Time Filter */}
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="all">All Time</option>
                <option value="week">Past 7 Days</option>
                <option value="month">This Month</option>
              </select>
            </div>
          </div>

          {/* Articles List */}
          <div className="space-y-6">
            {filteredArticles.map(article => (
              <article key={article.id} className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-stone-500">{article.source}</span>
                      <span className="text-stone-300">•</span>
                      <span className="text-sm text-stone-500 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                      {article.isPeerReviewed && (
                        <>
                          <span className="text-stone-300">•</span>
                          <span className="text-sm text-amber-700 flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            Peer-reviewed
                          </span>
                        </>
                      )}
                    </div>
                    
                    <h2 className="text-xl font-semibold text-stone-800 mb-3 hover:text-amber-700 transition-colors">
                      <a href={article.url}>{article.headline}</a>
                    </h2>
                    
                    <p className="text-stone-600 mb-4 leading-relaxed">{article.summary}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map(tag => (
                          <span key={tag} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href={article.url}
                        className="text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors"
                      >
                        Read Full Article →
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-500 text-lg">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default News;
