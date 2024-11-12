import React from 'react';
import { History, Zap, Shield, FileText } from 'lucide-react';

const SocialProof = () => {
  const metrics = [
    {
      icon: History,
      value: '10+',
      label: 'Years',
      sublabel: 'Backtesting History'
    },
    {
      icon: Zap,
      value: '100%',
      label: 'Automated',
      sublabel: 'Execution'
    },
    {
      icon: Shield,
      value: '2008/2020',
      label: 'Crash',
      sublabel: 'Tested'
    },
    {
      icon: FileText,
      value: 'Monthly',
      label: 'Performance',
      sublabel: 'Reports'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-4">
                <metric.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <div className="text-lg text-blue-100">{metric.label}</div>
              <div className="text-sm text-blue-200">{metric.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;