import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">NeuralEdge</span>
            </Link>
          </div>
          <div className="flex space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/services', label: 'Services' },
              // { path: '/case-studies', label: 'Case Studies' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive(path)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-2">
            <p>Email: contact@neuraledge.in</p>
            <p>Phone: +91 9958282084</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div>
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center">
        <p>&copy; {new Date().getFullYear()} NeuralEdge Consulting. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}