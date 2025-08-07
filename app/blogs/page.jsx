import React from 'react'
import DivImg from '@/components/common/DivImg'
import { blogPosts } from './blogData' // Import your blog data

const page = () => {
  return (
    <>
      <DivImg text={'Blogs'}/>

      <section className="py-20 bg-[#fdfcf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          {/* Dynamic grid based on number of blog posts */}
          <div className={`grid ${
            blogPosts.length === 2 
              ? 'grid-cols-1 md:grid-cols-2 justify-center max-w-4xl mx-auto'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          } gap-8`}>
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                className={`bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 ${
                  blogPosts.length === 2 ? 'max-w-md' : ''
                }`}
              >
                {/* Improved image container with proper landscape aspect ratio */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#66071c] text-white p-4">
                  <h3 className="text-lg font-semibold font-[popins] line-clamp-2">{post.title}</h3>
                  <p className="text-sm mt-2 font-extralight line-clamp-2">{post.description}</p>
                  <a
                    href={`/blogs/${post.slug}`}
                    className="inline-block mt-4 text-sm font-medium hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default page