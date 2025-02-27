import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { CryptoPrice } from '../types';

const CryptoTicker: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 10,
              page: 1,
              sparkline: false,
              price_change_percentage: '24h',
            },
          }
        );
        setCryptoData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
        setLoading(false);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-primary text-white py-2 overflow-hidden">
        <div className="container mx-auto">
          <p className="text-center">Loading cryptocurrency prices...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-primary text-white py-2 overflow-hidden">
      <div className="flex animate-pulse-slow">
        <div className="flex space-x-8 whitespace-nowrap animate-[scroll_30s_linear_infinite]">
          {cryptoData.map((crypto) => (
            <motion.div
              key={crypto.id}
              className="flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={crypto.image} alt={crypto.name} className="w-5 h-5" />
              <span className="font-medium">{crypto.name}</span>
              <span>${crypto.current_price.toLocaleString()}</span>
              <span
                className={`flex items-center ${
                  crypto.price_change_percentage_24h >= 0
                    ? 'text-green-300'
                    : 'text-red-300'
                }`}
              >
                {crypto.price_change_percentage_24h >= 0 ? (
                  <ArrowUp size={14} />
                ) : (
                  <ArrowDown size={14} />
                )}
                {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoTicker;