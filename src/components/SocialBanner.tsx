import React from 'react';
import { Twitter, Youtube, MessageCircle } from 'lucide-react';

const SocialBanner = () => {
  return (
    <div className="fixed right-4 bottom-4 z-40 hidden lg:flex flex-row gap-4">
      <a
        href="#"
        className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg hover:scale-110 transition-all duration-200 group"
        title="Follow us on X (Twitter)"
      >
        <Twitter className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
      </a>
      <a
        href="#"
        className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg hover:scale-110 transition-all duration-200 group"
        title="Subscribe to our YouTube"
      >
        <Youtube className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
      </a>
      <a
        href="#"
        className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg hover:scale-110 transition-all duration-200 group"
        title="Join our Discord"
      >
        <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-indigo-600" />
      </a>
    </div>
  );
};

export default SocialBanner;