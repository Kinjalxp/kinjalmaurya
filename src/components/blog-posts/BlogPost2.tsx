const BlogPost2 = () => (
  <div className="prose max-w-none">
    <h1 className="text-3xl font-bold mb-4">Mastering Tailwind CSS</h1>
    <p className="text-gray-600 mb-6">January 8, 2025</p>
    <img
      src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop"
      alt="CSS"
      className="w-full h-64 object-cover rounded-lg mb-6"
    />
    <p className="mb-4">
      Tailwind CSS is a utility-first CSS framework that has changed how
      developers approach styling. Instead of writing custom CSS, you compose
      styles using utility classes.
    </p>
    <h2 className="text-2xl font-semibold mt-6 mb-3">
      The Utility-First Approach
    </h2>
    <p className="mb-4">
      With Tailwind, you apply pre-existing classes directly in your markup.
      This might seem verbose at first, but it leads to faster development and
      more consistent designs.
    </p>
    <p className="mb-4">
      The framework includes responsive modifiers, hover states, and dark mode
      support out of the box, making it incredibly powerful for modern web
      development.
    </p>
  </div>
);

export default BlogPost2;
