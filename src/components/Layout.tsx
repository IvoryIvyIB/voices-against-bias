
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Globe, Newspaper, Speech } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-semibold text-stone-800">Understanding Equity</span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-amber-700 bg-amber-50' 
                    : 'text-stone-600 hover:text-amber-700'
                }`}
              >
                What is Systemic Racism?
              </Link>
              <Link 
                to="/news" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/news') 
                    ? 'text-amber-700 bg-amber-50' 
                    : 'text-stone-600 hover:text-amber-700'
                }`}
              >
                News
              </Link>
              <Link 
                to="/speak" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/speak') 
                    ? 'text-amber-700 bg-amber-50' 
                    : 'text-stone-600 hover:text-amber-700'
                }`}
              >
                Speak Your Voice
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-stone-600 hover:text-amber-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-4">About This Project</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Made by high school students with <Heart className="inline h-4 w-4 text-red-500" /> for educational purposes. 
                This project aims to increase awareness and understanding about systemic racism.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li><a href="#" className="hover:text-amber-700 transition-colors">Books</a></li>
                <li><a href="#" className="hover:text-amber-700 transition-colors">Podcasts</a></li>
                <li><a href="#" className="hover:text-amber-700 transition-colors">Support Organizations</a></li>
                <li><a href="#" className="hover:text-amber-700 transition-colors">Research Papers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Share</h3>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
                  Twitter
                </button>
                <button className="bg-blue-800 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-900 transition-colors">
                  Facebook
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-stone-200">
            <p className="text-center text-sm text-stone-500">
              © 2024 Understanding Equity. This project is for educational purposes only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
