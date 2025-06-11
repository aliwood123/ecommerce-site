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
    <section className="bg-gray-50 py-24">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 text-lg">
            Subscribe to our newsletter for exclusive offers and outdoor inspiration.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-grow px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-lg"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg transition duration-300 sm:flex-shrink-0 text-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter; 