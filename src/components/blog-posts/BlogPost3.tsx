const BlogPost3 = () => (
  <div className="prose max-w-none">
    <h1 className="text-3xl font-bold mb-4">
      Building Scalable Web Applications
    </h1>
    <p className="text-gray-600 mb-6">January 5, 2025</p>
    <img
      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
      alt="Web Development"
      className="w-full h-64 object-cover rounded-lg mb-6"
    />
    <p className="mb-4">
      Scalability is crucial for any application that expects to grow. In this
      post, we'll discuss architectural patterns and best practices for building
      applications that scale.
    </p>
    <h2 className="text-2xl font-semibold mt-6 mb-3">Key Principles</h2>
    <p className="mb-4">
      Start with a solid foundation: proper code organization, clear separation
      of concerns, and modular architecture. These principles will serve you
      well as your application grows.
    </p>
    <p className="mb-4">
      Performance optimization should be part of your development process from
      day one, not an afterthought when issues arise.
    </p>
  </div>
);

export default BlogPost3;
