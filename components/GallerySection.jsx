// components/GallerySection.jsx
"use client";

export default function GallerySection() {
  const images = [
    "/images/gallery/image1.jpg",
    "/images/gallery/image2.jpg",
    "/images/gallery/image3.jpg",
    "/images/gallery/image4.jpg",
    "/images/gallery/image5.jpg",
  ];

  return (
    <section className="py-12 px-4 sm:px-8 bg-[#f5f5f5]">
      <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden border-4 border-[#66071c] rounded-lg shadow-md"
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
