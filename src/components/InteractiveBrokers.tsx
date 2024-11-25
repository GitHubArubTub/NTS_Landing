const InteractiveBrokers = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                 src="/assets/InteractiveLogo.png"
                alt="Interactive Brokers Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Interactive Brokers Integration</h2>
                <p className="mt-2 text-gray-600">
                  Our platform seamlessly integrates with Interactive Brokers for reliable trade execution
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Requirements</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>• Active Interactive Brokers account</li>
                <li>• API connectivity enabled</li>
                <li>• Minimum account requirements met</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Benefits</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>• Direct trade execution</li>
                <li>• Real-time position monitoring</li>
                <li>• Automated risk management</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Trading requires a funded Interactive Brokers account. Minimum account size and approval requirements apply. 
            Please review all risk disclosures before trading.
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveBrokers;
