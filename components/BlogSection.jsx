// components/BlogSection.jsx
"use client";

const blogPosts = [
  {
    id: 1,
    date: "July 30, 2025",
    title: "7 Signs You’re a Real Mathura Yodhas Fan",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "/images/blog/blog1.jpg",
  },
  {
    id: 2,
    date: "July 30, 2025",
    title: "7 Signs You’re a Real Mathura Yodhas Fan",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "/images/blog/blog2.jpg",
  },
  {
    id: 3,
    date: "July 30, 2025",
    title: "7 Signs You’re a Real Mathura Yodhas Fan",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "/images/blog/blog3.jpg",
  },
  {
    id: 4,
    date: "July 30, 2025",
    title: "7 Signs You’re a Real Mathura Yodhas Fan",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "/images/blog/blog4.jpg",
  },
  {
    id: 5,
    date: "July 30, 2025",
    title: "7 Signs You’re a Real Mathura Yodhas Fan",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "/images/blog/blog5.jpg",
  },
  {
    id: 6,
    date: "July 30, 2025",
    title: "7 Signs You’re a Real Mathura Yodhas Fan",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "/images/blog/blog6.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="py-12 bg-[#fdfcf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover"
              />
              <div className="bg-[#66071c] text-white p-6 pr-10">
                <p className="text-sm mb-2 flex items-center">
                  <span role="img" aria-label="calendar" className="mr-2">📅</span>
                  {post.date}
                </p>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-sm mt-2">{post.excerpt}</p>
                <a
                  href="#"
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
  );
}

