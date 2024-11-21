import { useState } from 'react';
import { Play, X } from 'lucide-react';

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div 
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200"
              alt="Trading Platform Demo!"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">
              <div className="bg-white/90 p-4 rounded-full">
                <Play className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 bg-black/70 text-white px-4 py-2 rounded-lg">
              12:34
            </div>
          </div>

          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">See Our Platform in Action</h2>
            <p className="mt-4 text-gray-600">
              Watch how our algorithmic trading strategies analyze market data in real-time to identify profitable trading opportunities.
            </p>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl mx-4">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="bg-black aspect-video rounded-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Am3ZWaHpp24?si=iW5bwpXMiI_5t71j" // Replace with actual video URL
                  title="Platform Demo"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
