import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Download, Shield, Lock, RefreshCw } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const slides = [
    {
      title: "Secure Your Crypto with Trezor Bridge",
      description: "The essential software connection between your Trezor hardware wallet and your computer",
      icon: <Shield className="h-16 w-16 text-primary mb-4" />,
      cta: "Download Now",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Enhanced Security for Your Digital Assets",
      description: "Trezor Bridge ensures your private keys never leave your hardware wallet",
      icon: <Lock className="h-16 w-16 text-primary mb-4" />,
      cta: "Learn More",
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Always Up-to-Date with Trezor Bridge",
      description: "Regular updates ensure compatibility with the latest Trezor firmware",
      icon: <RefreshCw className="h-16 w-16 text-primary mb-4" />,
      cta: "Get Started",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section className="py-12 bg-white" id="home">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="outline-none">
              <div className="flex flex-col md:flex-row items-center">
                <motion.div 
                  className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-center md:text-left">
                    {slide.icon}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                      {slide.description}
                    </p>
                    <motion.a
                      href="#download"
                      className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors duration-300 text-lg font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={20} className="mr-2" />
                      {slide.cta}
                    </motion.a>
                  </div>
                </motion.div>
                <motion.div 
                  className="md:w-1/2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <img
                    src={slide.image}
                    alt="Trezor Bridge"
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;