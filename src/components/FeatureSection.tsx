import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, RefreshCw, Zap, Layers, Globe } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Enhanced Security",
      description: "Trezor Bridge creates a secure connection between your hardware wallet and computer, ensuring your private keys never leave your device."
    },
    {
      icon: <Lock className="h-12 w-12 text-primary" />,
      title: "Data Encryption",
      description: "All communications between your Trezor device and computer are encrypted, protecting your sensitive information from potential threats."
    },
    {
      icon: <RefreshCw className="h-12 w-12 text-primary" />,
      title: "Regular Updates",
      description: "Trezor Bridge receives regular updates to maintain compatibility with the latest firmware and to enhance security features."
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Fast Performance",
      description: "Optimized for speed, Trezor Bridge ensures quick transaction signing and verification without compromising security."
    },
    {
      icon: <Layers className="h-12 w-12 text-primary" />,
      title: "Multi-Platform Support",
      description: "Compatible with Windows, macOS, and Linux, ensuring you can securely manage your assets regardless of your operating system."
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Browser Integration",
      description: "Seamlessly integrates with major web browsers, allowing you to access your Trezor wallet through the Trezor Wallet web interface."
    }
  ];

  return (
    <section className="py-16 bg-accent" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Key Features of <span className="text-primary">Trezor Bridge</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why Trezor Bridge is essential for secure cryptocurrency management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;