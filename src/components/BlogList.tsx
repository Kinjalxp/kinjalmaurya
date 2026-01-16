import { blogPosts } from "../data/blogData";

interface BlogListProps {
  onSelectPost: (post: any) => void;
}

const BlogList = ({ onSelectPost }: BlogListProps) => (
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
    <div className="grid gap-6">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          onClick={() => onSelectPost(post)}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div className="md:flex">
            <img
              src={post.image}
              alt={post.title}
              className="w-full md:w-48 h-48 object-cover"
            />
            <div className="p-6 flex-1">
              <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BlogList;
