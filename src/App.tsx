import React from 'react';
import FeaturedCategories from './components/FeaturedCategories';
import BrandIntro from './components/BrandIntro';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialGallery from './components/SocialGallery';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BrandIntro />
        <FeaturedCategories />
        <SocialGallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App; 