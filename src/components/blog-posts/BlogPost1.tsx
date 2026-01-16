const BlogPost1 = () => (
  <div className="prose max-w-none">
    <h1 className="text-3xl font-bold mb-4">Getting Started with React</h1>
    <p className="text-gray-600 mb-6">January 10, 2025</p>
    <img
      src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
      alt="React"
      className="w-full h-64 object-cover rounded-lg mb-6"
    />
    <p className="mb-4">
      React has revolutionized the way we build user interfaces. In this post,
      we'll explore the fundamental concepts that make React so powerful and
      widely adopted.
    </p>
    <h2 className="text-2xl font-semibold mt-6 mb-3">Why React?</h2>
    <p className="mb-4">
      React's component-based architecture allows developers to build
      encapsulated components that manage their own state, then compose them to
      make complex UIs. This modularity makes code more maintainable and
      reusable.
    </p>
    <p className="mb-4">
      The virtual DOM implementation ensures optimal performance by minimizing
      direct DOM manipulations, updating only what's necessary when your data
      changes.
    </p>
  </div>
);

export default BlogPost1;
