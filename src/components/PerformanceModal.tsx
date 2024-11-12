import React, { useState } from 'react';
import { X, TrendingUp, ChevronRight } from 'lucide-react';

interface MonthlyPerformance {
  month: string;
  return: number;
}

interface StrategyPerformance {
  monthlyReturn: number;
  sharpeRatio: number;
  maxDrawdown: number;
  winRate: number;
  description: string;
  monthlyPerformance: MonthlyPerformance[];
}

interface Strategy {
  name: string;
  performance: StrategyPerformance;
}

interface PerformanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  strategy: Strategy;
}

const PerformanceModal: React.FC<PerformanceModalProps> = ({ isOpen, onClose, strategy }) => {
  const [activeTab, setActiveTab] = useState<'performance' | 'explanation'>('performance');

  if (!isOpen || !strategy) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="relative w-full max-w-4xl mx-4 bg-white rounded-xl shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{strategy.name} Performance</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('performance')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === 'performance' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Performance
              </button>
              <button
                onClick={() => setActiveTab('explanation')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === 'explanation' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Strategy Details
              </button>
            </div>
          </div>

          {activeTab === 'performance' ? (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Monthly Return</div>
                  <div className="text-2xl font-bold text-green-600">
                    +{strategy.performance.monthlyReturn}%
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Sharpe Ratio</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {strategy.performance.sharpeRatio}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Max Drawdown</div>
                  <div className="text-2xl font-bold text-red-600">
                    {strategy.performance.maxDrawdown}%
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Win Rate</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {strategy.performance.winRate}%
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4 h-[300px] flex items-center justify-center">
                <TrendingUp className="w-12 h-12 text-gray-400" />
                <span className="ml-2 text-gray-500">Performance chart will be displayed here</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Monthly Performance</h3>
                  <div className="space-y-2">
                    {strategy.performance.monthlyPerformance.map((month) => (
                      <div key={month.month} className="flex justify-between items-center">
                        <span className="text-gray-600">{month.month}</span>
                        <span className="text-green-600">+{month.return}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Risk Metrics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Beta</span>
                      <span className="text-gray-900">0.85</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Alpha</span>
                      <span className="text-gray-900">4.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sortino Ratio</span>
                      <span className="text-gray-900">2.1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Strategy Overview</h3>
                <p className="text-gray-600 leading-relaxed">{strategy.performance.description}</p>
              </div>

              <div className="space-y-4">
                {['Entry Rules', 'Exit Rules', 'Position Sizing', 'Risk Management'].map((section) => (
                  <div key={section} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between cursor-pointer">
                      <h4 className="text-gray-900 font-medium">{section}</h4>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceModal;