import React from 'react';
import { Sprout, Truck, ShoppingBag, Home } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Sprout className="h-12 w-12 text-green-600" />,
      title: 'Hydroponically Grown',
      description: 'Our partner farms grow fresh produce using advanced hydroponic techniques, ensuring optimal nutrition and zero pesticides.'
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-green-600" />,
      title: 'Harvested to Order',
      description: 'Vegetables and fruits are harvested based on your orders, eliminating waste and ensuring peak freshness.'
    },
    {
      icon: <Truck className="h-12 w-12 text-green-600" />,
      title: 'Same-Day Delivery',
      description: 'We deliver within hours of harvest to preserve nutritional value and provide the freshest taste possible.'
    },
    {
      icon: <Home className="h-12 w-12 text-green-600" />,
      title: 'Enjoy at Home',
      description: 'Receive farm-fresh produce at your doorstep, ready to enhance your meals with superior flavor and nutrition.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            From sustainable farms to your table in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2">
                  <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;