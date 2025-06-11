import React, { useState, FormEvent } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup logic
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="bg-[#E5E9E3]/60 py-24">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Adventure
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            Get first dibs on new gear, trail tips, and outdoor stories.
          </p>
          <p className="text-gray-500 text-lg">
            Straight to your inbox, twice a month.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-grow px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg bg-white"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 sm:flex-shrink-0 text-lg transform hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-md"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter; 