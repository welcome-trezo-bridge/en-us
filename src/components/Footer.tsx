import React from 'react';
import { Shield, Twitter, Github as GitHub, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold">Trezor Bridge</span>
            </div>
            <p className="max-w-md text-gray-200">
              Secure your cryptocurrency with Trezor Bridge, the essential connection software for your Trezor hardware wallet.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-gray-200 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors duration-300">
                <GitHub size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Documentation</a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">FAQs</a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Support</a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Blog</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Careers</a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Press</a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Contact</a>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} Trezor. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a 
                href="https://trezor.io" 
                className="text-gray-300 hover:text-white transition-colors duration-300 inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Official Trezor Website <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;