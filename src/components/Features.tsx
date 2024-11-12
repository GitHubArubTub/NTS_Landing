import { 
  BarChart2,
  Shield,
  MessageSquare,
  Database,
  Brain,
  Cloud
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BarChart2,
      title: 'Advanced Price Analysis',
      description: 'Statistical arbitrage and mean reversion models based on rigorous mathematical frameworks'
    },
    {
      icon: Shield,
      title: 'Institutional Grade Risk Management',
      description: 'Comprehensive risk controls including VaR analysis, position limits, and correlation monitoring'
    },
    {
      icon: MessageSquare,
      title: 'SMS Execution Alerts',
      description: 'Real-time notifications for trade execution and position updates'
    },
    {
      icon: Database,
      title: 'Historical Backtesting',
      description: 'Test strategies against decades of historical market data'
    },
    {
      icon: Brain,
      title: 'Proprietary Market Sentiment',
      description: 'Advanced sentiment analysis using proprietary algorithms'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Enterprise-grade reliability and minimal latency'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Platform Features</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of trading tools and features helps you stay ahead in the markets
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;