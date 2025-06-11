import React from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  username: string;
  hashtag: string;
  size: 'medium' | 'small';
}

const SocialGallery: React.FC = () => {
  const galleryImages: GalleryImage[] = [
    // Top row - 3 equal-sized images
    {
      id: 1,
      src: '/images/social/family-camping.jpg',
      alt: 'Family enjoying a camping trip in the outdoors',
      username: '@outdoorfamily',
      hashtag: '#FamilyAdventures',
      size: 'medium' as const
    },
    {
      id: 2,
      src: '/images/social/snow.jpg',
      alt: 'Winter hiking adventure in snowy conditions',
      username: '@winterexplorer',
      hashtag: '#WinterHiking',
      size: 'medium' as const
    },
    {
      id: 3,
      src: '/images/social/backpack.jpg',
      alt: 'Hiker with backpack enjoying the view',
      username: '@trailseeker',
      hashtag: '#BackpackLife',
      size: 'medium' as const
    },
    // Middle section - 6 small images
    {
      id: 4,
      src: '/images/social/woman-with-friends-selfie.jpg',
      alt: 'Group of friends taking a selfie during their hike',
      username: '@hikingcrew',
      hashtag: '#TrailFriends',
      size: 'small' as const
    },
    {
      id: 5,
      src: '/images/social/fishing.jpg',
      alt: 'Person fishing at a scenic lake',
      username: '@lakeangler',
      hashtag: '#PeacefulNature',
      size: 'small' as const
    },
    {
      id: 6,
      src: '/images/social/couple.jpg',
      alt: 'Couple hiking together on a mountain trail',
      username: '@adventurecouple',
      hashtag: '#CoupleHiking',
      size: 'small' as const
    },
    {
      id: 7,
      src: '/images/social/kayak.jpeg',
      alt: 'Kayaking adventure on calm waters',
      username: '@paddlelife',
      hashtag: '#KayakVibes',
      size: 'small' as const
    },
    {
      id: 8,
      src: '/images/social/walking-dog.jpeg',
      alt: 'Person walking their dog on a nature trail',
      username: '@trailpaws',
      hashtag: '#DogsOutdoors',
      size: 'small' as const
    },
    {
      id: 9,
      src: '/images/social/woman-and-child.jpg',
      alt: 'Mother and child exploring nature together',
      username: '@familytrails',
      hashtag: '#NextGenExplorers',
      size: 'small' as const
    },
    // Bottom row - 3 equal-sized images
    {
      id: 10,
      src: '/images/social/hay-bale.jpg',
      alt: 'Person resting on hay bale during countryside walk',
      username: '@countryhiker',
      hashtag: '#RuralExplorer',
      size: 'medium' as const
    },
    {
      id: 11,
      src: '/images/social/friends.jpg',
      alt: 'Group of friends enjoying outdoor activities',
      username: '@friendventures',
      hashtag: '#FriendshipGoals',
      size: 'medium' as const
    },
    {
      id: 12,
      src: '/images/social/man-on-trail.jpg',
      alt: 'Solo hiker on a scenic mountain trail',
      username: '@soloexplorer',
      hashtag: '#TrailLife',
      size: 'medium' as const
    }
  ];

  const getSizeClasses = (size: string): string => {
    switch (size) {
      case 'small':
        return 'col-span-2 aspect-square';
      case 'medium':
        return 'col-span-4 aspect-[16/9]';
      default:
        return 'col-span-2 aspect-square';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Community in Action</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real adventures from our community. Share your story with #ExploreOutdoors.
          </p>
        </div>

        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative group overflow-hidden rounded-lg ${getSizeClasses(image.size)}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{image.username}</p>
                  <p className="text-xs opacity-80">{image.hashtag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-light transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-md"
          >
            Follow Us on Instagram
            <svg
              className="ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialGallery; 