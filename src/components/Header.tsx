import React, { useState } from 'react';
import { Menu, X, Shield, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold text-primary">Trezor Bridge</span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Features', 'Installation', 'FAQ', 'Support'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="#download"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} className="mr-1" />
              Download
            </motion.a>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {['Home', 'Features', 'Installation', 'FAQ', 'Support'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#download"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download size={18} className="mr-1" />
              Download
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;