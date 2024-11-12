import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ContactModal from './ContactModal';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const faqs = [
    {
      question: 'Why do you limit strategy licenses?',
      answer: "To maintain optimal performance, each trading strategy has a maximum capacity. This ensures strategy effectiveness isn't diluted by overuse and performance metrics remain consistent with backtested results."
    },
    {
      question: 'How do your trading strategies work?',
      answer: 'Our strategies use advanced algorithms to analyze market data, identify patterns, and generate trading signals. Each strategy is based on proven mathematical models and is continuously optimized.'
    },
    {
      question: "What's included in the strategy bundle?",
      answer: 'The bundle includes access to all our trading strategies, priority support, advanced analytics dashboard, strategy combination tools, risk management suite, and monthly strategy updates.'
    },
    {
      question: 'How do I manage my subscription?',
      answer: 'You can manage your subscription through your account dashboard. This includes upgrading, downgrading, or canceling your subscription.'
    }
  ];

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-600">
              Cannot find what you are looking for?{' '}
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="text-blue-600 hover:text-blue-700"
              >
                Contact our support team
              </button>
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        source="support"
      />
    </>
  );
};

export default FAQ;