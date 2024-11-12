import React, { useState } from 'react';
import { Calendar, Play, X } from 'lucide-react';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              <span className="text-[#1e40af]">Data Driven</span> Strategies.<br />
              Automated.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Institutional-grade algorithms for retail traders.
            </p>
            <p className="mt-4 text-gray-600">
              Technical analysis and alternative risk management, automated and backtested across market regimes spanning a decade of data. All strategies are continuously monitored for consistent performance.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition flex items-center justify-center">
                14-Day Free Trial
              </button>
              <a 
                href="#" 
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded hover:bg-gray-50 transition flex items-center justify-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Demo
              </a>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              Past performance does not guarantee future results. Trading involves substantial risk of loss.
            </div>
          </div>

          <div className="relative">
            <div 
              className="relative bg-white rounded shadow-sm p-4 cursor-pointer group"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <img 
                src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800"
                alt="Trading Platform"
                className="rounded w-full"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition rounded">
                <div className="bg-white/90 p-4 rounded-full group-hover:scale-110 transition-transform duration-200">
                  <Play className="w-12 h-12 text-[#2563EB]" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gray-900 text-white px-6 py-2 rounded shadow-sm">
                Platform Overview
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-black aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="about:blank" // Replace with actual video URL
                title="Platform Demo"
                className="rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;