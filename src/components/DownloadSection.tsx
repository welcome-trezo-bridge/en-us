import React from 'react';
import { motion } from 'framer-motion';
import { Download, Monitor, Apple, Link as Linux } from 'lucide-react';

const DownloadSection: React.FC = () => {
  const downloadOptions = [
    {
      icon: <Monitor className="h-12 w-12 text-primary" />,
      title: "Windows",
      description: "Compatible with Windows 8, 10, and 11",
      buttonText: "Download for Windows"
    },
    {
      icon: <Apple className="h-12 w-12 text-primary" />,
      title: "macOS",
      description: "Compatible with macOS 10.13 and newer",
      buttonText: "Download for macOS"
    },
    {
      icon: <Linux className="h-12 w-12 text-primary" />,
      title: "Linux",
      description: "Available for Ubuntu, Fedora, and other distributions",
      buttonText: "Download for Linux"
    }
  ];

  return (
    <section className="py-16 bg-white" id="download">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Download <span className="text-primary">Trezor Bridge</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with Trezor Bridge and secure your cryptocurrency assets today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {downloadOptions.map((option, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-200 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="flex justify-center mb-4">{option.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{option.title}</h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <motion.a
                href="#"
                className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} className="mr-2" />
                {option.buttonText}
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600">
            Always download Trezor Bridge from the official website to ensure security.
            <br />
            <a href="https://trezor.io/trezor-suite" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              Visit the official Trezor website
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;