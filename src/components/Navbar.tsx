import { useState } from 'react';
import { Menu, X, Gauge } from 'lucide-react';
import ContactModal from './ContactModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Gauge className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">NTS Systems</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition">Pricing</a>
              <a href="#docs" className="text-gray-600 hover:text-blue-600 transition">Documentation</a>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 border border-gray-200 transition"
              >
                Contact Us
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
              <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Pricing</a>
              <a href="#docs" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Documentation</a>
              <button 
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full mt-2 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 border border-gray-200"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        source="navbar"
      />
    </>
  );
};

export default Navbar;