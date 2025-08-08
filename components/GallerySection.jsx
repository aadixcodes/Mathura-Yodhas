// "use client";

// import { useState } from 'react';
// import Image from 'next/image';

// export default function GallerySection() {
//   // Gallery categories
//   const categories = {
//     auction: [
//       "/assets/gallery/1.jpg",
//       "/assets/gallery/2.jpg",
//       "/assets/gallery/3.jpg",
//       "/assets/gallery/4.jpg",
//       "/assets/gallery/5.jpg",
//       "/assets/gallery/6.jpg",
//     ],
//     training: [
//       "/assets/gallery/trainingcamp/img1.jpg",
//       "/assets/gallery/trainingcamp/img2.jpg",
//       "/assets/gallery/trainingcamp/img3.jpg",
//       "/assets/gallery/trainingcamp/img4.jpg",
//       "/assets/gallery/trainingcamp/img5.jpg",
//       "/assets/gallery/trainingcamp/img6.jpg",
//       "/assets/gallery/trainingcamp/img7.jpg",
//       "/assets/gallery/trainingcamp/img8.jpg",
//       "/assets/gallery/trainingcamp/img9.jpg",
//       "/assets/gallery/trainingcamp/img10.jpg",
//       "/assets/gallery/trainingcamp/img11.jpg",
//     ],
//     match: []
//   };

//   const [activeCategory, setActiveCategory] = useState('auction');
//   const [loadedImages, setLoadedImages] = useState({});

//   const handleImageLoad = (idx) => {
//     setLoadedImages(prev => ({ ...prev, [idx]: true }));
//   };

//   return (
//     <section className="py-20 px-4 sm:px-8 bg-[#f5f5f5]">
//       {/* Filter Buttons */}
//       <div className="flex justify-center gap-4 md:gap-8 mb-12 flex-wrap">
//                  <button
//            onClick={() => setActiveCategory('auction')}
//            className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all cursor-pointer ${
//              activeCategory === 'auction'
//                ? 'bg-[#66071c] text-white'
//                : 'bg-white text-[#66071c] hover:bg-gray-100'
//            }`}
//          >
//            Auction
//          </button>
//          <button
//            onClick={() => setActiveCategory('training')}
//            className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all cursor-pointer ${
//              activeCategory === 'training'
//                ? 'bg-[#66071c] text-white'
//                : 'bg-white text-[#66071c] hover:bg-gray-100'
//            }`}
//          >
//            Training Camp
//          </button>
//          <button
//            onClick={() => setActiveCategory('match')}
//            className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all cursor-pointer ${
//              activeCategory === 'match'
//                ? 'bg-[#66071c] text-white'
//                : 'bg-white text-[#66071c] hover:bg-gray-100'
//            }`}
//          >
//            Match Day
//          </button>
//       </div>

//       {/* Gallery Content */}
//       <div className="max-w-7xl mx-auto">
//         {activeCategory === 'auction' && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {categories.auction.map((src, idx) => (
//               <div
//                 key={idx}
//                 className={`overflow-hidden rounded-lg shadow-md relative aspect-square ${
//                   loadedImages[idx] ? 'border-4 border-[#66071c]' : 'border-0'
//                 }`}
//               >
//                 {!loadedImages[idx] ? (
//                   <div className="w-full h-full bg-gray-200 animate-pulse"></div>
//                 ) : null}
                
//                 <Image
//                   src={src}
//                   alt={`Auction Gallery ${idx + 1}`}
//                   fill
//                   className="object-cover transition-transform duration-300 hover:scale-105"
//                   onLoadingComplete={() => handleImageLoad(idx)}
//                   priority={idx < 3}
//                 />
//               </div>
//             ))}
//           </div>
//         )}

//         {activeCategory === 'training' && (
//           <div className="flex items-center justify-center min-h-[400px]">
//             <div className="text-center p-8 bg-white rounded-lg border border-gray-200 max-w-md mx-auto">
//               <h3 className="text-xl font-bold text-[#66071c] mb-2">Training Camp</h3>
//               <p className="text-gray-600">Training camp images will be updated soon!</p>
//             </div>
//           </div>
//         )}

//         {activeCategory === 'match' && (
//           <div className="flex items-center justify-center min-h-[400px]">
//             <div className="text-center p-8 bg-white rounded-lg border border-gray-200 max-w-md mx-auto">
//               <h3 className="text-xl font-bold text-[#66071c] mb-2">Match Day</h3>
//               <p className="text-gray-600">Exciting match day content coming soon!</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function GallerySection() {
  // Gallery categories
  const categories = {
    auction: [
      "/assets/gallery/1.jpg",
      "/assets/gallery/2.jpg",
      "/assets/gallery/3.jpg",
      "/assets/gallery/4.jpg",
      "/assets/gallery/5.jpg",
      "/assets/gallery/6.jpg",
    ],
    training: [
      "/assets/gallery/trainingcamp/img1.jpg",
      "/assets/gallery/trainingcamp/img2.jpg",
      "/assets/gallery/trainingcamp/img3.jpg",
      "/assets/gallery/trainingcamp/img4.jpg",
      "/assets/gallery/trainingcamp/img5.jpg",
      "/assets/gallery/trainingcamp/img6.jpg",
      "/assets/gallery/trainingcamp/img7.jpg",
      "/assets/gallery/trainingcamp/img8.jpg",
      "/assets/gallery/trainingcamp/img9.jpg",
      "/assets/gallery/trainingcamp/img10.jpg",
      "/assets/gallery/trainingcamp/img11.jpg",
    ],
    match: []
  };

  const [activeCategory, setActiveCategory] = useState('auction');
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (idx) => {
    setLoadedImages(prev => ({ ...prev, [idx]: true }));
  };

  return (
    <section className="py-20 px-4 sm:px-8 bg-[#f5f5f5]">
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 md:gap-8 mb-12 flex-wrap">
        <button
          onClick={() => setActiveCategory('auction')}
          className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all cursor-pointer ${
            activeCategory === 'auction'
              ? 'bg-[#66071c] text-white'
              : 'bg-white text-[#66071c] hover:bg-gray-100'
          }`}
        >
          Auction
        </button>
        <button
          onClick={() => setActiveCategory('training')}
          className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all cursor-pointer ${
            activeCategory === 'training'
              ? 'bg-[#66071c] text-white'
              : 'bg-white text-[#66071c] hover:bg-gray-100'
          }`}
        >
          Training Camp
        </button>
        <button
          onClick={() => setActiveCategory('match')}
          className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all cursor-pointer ${
            activeCategory === 'match'
              ? 'bg-[#66071c] text-white'
              : 'bg-white text-[#66071c] hover:bg-gray-100'
          }`}
        >
          Match Day
        </button>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto">
        {activeCategory === 'auction' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.auction.map((src, idx) => (
              <div
                key={idx}
                className={`overflow-hidden rounded-lg shadow-md relative aspect-square ${
                  loadedImages[idx] ? 'border-4 border-[#66071c]' : 'border-0'
                }`}
              >
                {!loadedImages[idx] && (
                  <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                )}
                <Image
                  src={src}
                  alt={`Auction Gallery ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  onLoadingComplete={() => handleImageLoad(idx)}
                  priority={idx < 3}
                />
              </div>
            ))}
          </div>
        )}

        {activeCategory === 'training' && categories.training.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.training.map((src, idx) => (
              <div
                key={idx}
                className={`overflow-hidden rounded-lg shadow-md relative aspect-square ${
                  loadedImages[`training-${idx}`] ? 'border-4 border-[#66071c]' : 'border-0'
                }`}
              >
                {!loadedImages[`training-${idx}`] && (
                  <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                )}
                <Image
                  src={src}
                  alt={`Training Camp ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  onLoadingComplete={() => handleImageLoad(`training-${idx}`)}
                  priority={idx < 3}
                />
              </div>
            ))}
          </div>
        ) : activeCategory === 'training' ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center p-8 bg-white rounded-lg border border-gray-200 max-w-md mx-auto">
              <h3 className="text-xl font-bold text-[#66071c] mb-2">Training Camp</h3>
              <p className="text-gray-600">Training camp images will be updated soon!</p>
            </div>
          </div>
        ) : null}

        {activeCategory === 'match' && categories.match.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.match.map((src, idx) => (
              <div
                key={idx}
                className={`overflow-hidden rounded-lg shadow-md relative aspect-square ${
                  loadedImages[`match-${idx}`] ? 'border-4 border-[#66071c]' : 'border-0'
                }`}
              >
                {!loadedImages[`match-${idx}`] && (
                  <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                )}
                <Image
                  src={src}
                  alt={`Match Day ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  onLoadingComplete={() => handleImageLoad(`match-${idx}`)}
                  priority={idx < 3}
                />
              </div>
            ))}
          </div>
        ) : activeCategory === 'match' ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center p-8 bg-white rounded-lg border border-gray-200 max-w-md mx-auto">
              <h3 className="text-xl font-bold text-[#66071c] mb-2">Match Day</h3>
              <p className="text-gray-600">Exciting match day content coming soon!</p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}