import React, { useState, useCallback } from 'react';
import { TrendingUp, ArrowLeftRight, LineChart, Check, HelpCircle } from 'lucide-react';
import PerformanceModal from './PerformanceModal';

const PricingSection = () => {
  const [isBundle, setIsBundle] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState<any>(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleTooltipPosition = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    
    // Calculate tooltip width (approximate)
    const tooltipWidth = 300;
    
    // Base x position is at the center of the help icon
    let x = rect.left + (rect.width / 2) - (tooltipWidth / 2);
    
    // Ensure tooltip doesn't go off screen on the left
    x = Math.max(16, x);
    // Ensure tooltip doesn't go off screen on the right
    x = Math.min(x, viewportWidth - tooltipWidth - 16);
    
    // Position tooltip above the icon if near bottom of viewport
    const spaceBelow = window.innerHeight - rect.bottom;
    const y = spaceBelow < 100 ? rect.top - 40 : rect.bottom + 8;

    setTooltipPosition({ x, y });
    setTooltipVisible(true);
  }, []);

  const strategies = [
    {
      name: 'Trend Following',
      icon: TrendingUp,
      price: 75,
      remaining: 45,
      progress: 'bg-blue-600',
      features: [
        'Real-time trend detection',
        'Multiple timeframe analysis',
        'Risk management signals',
        'Performance analytics',
      ],
      performance: {
        monthlyReturn: 2.1,
        sharpeRatio: 1.8,
        maxDrawdown: -8.5,
        winRate: 72.5,
        description: 'Our trend following strategy uses advanced algorithms to identify and capitalize on sustained market movements across multiple timeframes.',
        monthlyPerformance: [
          { month: 'Month 6', return: 0.28 },
          { month: 'Month 5', return: 1.79 },
          { month: 'Month 4', return: 1.26 },
          { month: 'Month 3', return: 3.66 },
          { month: 'Month 2', return: 3.16 },
          { month: 'Month 1', return: 2.72 }
        ]
      }
    },
    {
      name: 'Mean Reversion',
      icon: ArrowLeftRight,
      price: 75,
      remaining: 8,
      progress: 'bg-red-600',
      features: [
        'Statistical arbitrage',
        'Volatility analysis',
        'Entry/exit signals',
        'Position sizing',
      ],
      performance: {
        monthlyReturn: 2.8,
        sharpeRatio: 1.9,
        maxDrawdown: -12.5,
        winRate: 68.5,
        description: 'The mean reversion strategy identifies and exploits temporary price deviations using statistical analysis and volatility patterns.',
        monthlyPerformance: [
          { month: 'Month 6', return: 0.28 },
          { month: 'Month 5', return: 1.79 },
          { month: 'Month 4', return: 1.26 },
          { month: 'Month 3', return: 3.66 },
          { month: 'Month 2', return: 3.16 },
          { month: 'Month 1', return: 2.72 }
        ]
      }
    },
    {
      name: 'Breakout Strategy',
      icon: LineChart,
      price: 75,
      remaining: 23,
      progress: 'bg-yellow-500',
      features: [
        'Pattern recognition',
        'Volume analysis',
        'Momentum indicators',
        'Alert system',
      ],
      performance: {
        monthlyReturn: 3.2,
        sharpeRatio: 2.1,
        maxDrawdown: -15.5,
        winRate: 65.8,
        description: 'Our breakout strategy combines technical analysis with volume confirmation to capture significant price movements.',
        monthlyPerformance: [
          { month: 'Month 6', return: 0.28 },
          { month: 'Month 5', return: 1.79 },
          { month: 'Month 4', return: 1.26 },
          { month: 'Month 3', return: 3.66 },
          { month: 'Month 2', return: 3.16 },
          { month: 'Month 1', return: 2.72 }
        ]
      }
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Trading Strategies</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose between individual strategies or get our complete bundle for maximum trading advantage
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm ${!isBundle ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
              Individual Strategies
            </span>
            <button
              onClick={() => setIsBundle(!isBundle)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                isBundle ? 'bg-blue-600' : 'bg-gray-400'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  isBundle ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${isBundle ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
              Bundle (Save $60)
            </span>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {!isBundle ? (
              strategies.map((strategy) => (
                <div key={strategy.name} className="bg-white rounded-xl shadow-lg p-8">
                  <strategy.icon className="w-12 h-12 text-blue-600 mx-auto" />
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{strategy.name}</h3>
                  <p className="mt-4 text-3xl font-bold text-gray-900">${strategy.price}<span className="text-sm text-gray-600">/mo</span></p>
                  
                  <div className="mt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Available Licenses</span>
                      <div
                        className="relative cursor-help"
                        onMouseEnter={handleTooltipPosition}
                        onMouseLeave={() => setTooltipVisible(false)}
                      >
                        <HelpCircle className="w-4 h-4 text-gray-400" />
                      </div>
                      <span className="text-sm text-gray-600">{strategy.remaining} remaining</span>
                    </div>
                    <div className="mt-2 bg-gray-200 rounded-full h-2">
                      <div className={`${strategy.progress} h-2 rounded-full`} style={{ width: `${(strategy.remaining / 50) * 100}%` }} />
                    </div>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {strategy.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-8 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Purchase License
                  </button>

                  <button 
                    onClick={() => setSelectedStrategy(strategy)}
                    className="mt-4 w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
                  >
                    View Performance
                  </button>
                </div>
              ))
            ) : (
              <div className="md:col-span-3 max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900">Complete Strategy Bundle</h3>
                <p className="mt-4 text-4xl font-bold text-gray-900">
                  $165<span className="text-sm text-gray-600">/mo</span>
                </p>
                <p className="mt-2 text-green-600 font-semibold">Save $60 monthly</p>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      Access to all strategies
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      Priority support
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      Advanced analytics dashboard
                    </li>
                  </ul>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      Strategy combination tools
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      Risk management suite
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      Monthly strategy updates
                    </li>
                  </ul>
                </div>

                <button className="mt-8 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Get Bundle Access
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {tooltipVisible && (
        <div
          className="fixed bg-gray-900 text-white text-xs px-4 py-2 rounded shadow-lg z-50"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
            maxWidth: '300px',
            transform: 'translateY(8px)',
          }}
        >
          To maintain optimal strategy performance, each strategy has a maximum capacity
        </div>
      )}

      {selectedStrategy && (
        <PerformanceModal
          isOpen={!!selectedStrategy}
          onClose={() => setSelectedStrategy(null)}
          strategy={selectedStrategy}
        />
      )}
    </section>
  );
};

export default PricingSection;