import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import HowItWorks from '../components/HowItWorks';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <HowItWorks />
      
      {/* Testimonials Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="text-gray-600 mt-2">Join thousands of happy customers enjoying fresh produce</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                  SM
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah M.</h4>
                  <p className="text-gray-600 text-sm">Loyal Customer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I've never tasted vegetables this fresh before! The spinach and tomatoes have so much more flavor than what I used to get at the supermarket."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">James D.</h4>
                  <p className="text-gray-600 text-sm">Weekly Subscriber</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The weekly subscription has changed our family meals. Everything tastes better, lasts longer, and we feel good about supporting sustainable farming."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                  RL
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Rachel L.</h4>
                  <p className="text-gray-600 text-sm">Chef</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As a professional chef, I can taste the difference in hydroponically grown produce. Earthly Eats delivers consistently excellent quality that my customers notice."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to taste the difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of households enjoying farm-fresh, hydroponically grown produce delivered directly to their doors.
          </p>
          <a 
            href="/products" 
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;