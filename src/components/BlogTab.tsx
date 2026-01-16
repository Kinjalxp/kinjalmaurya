import { blogPosts } from "../data/blogData";

interface BlogListProps {
  onSelectPost: (post: any) => void;
}

export const BlogTab = ({ onSelectPost }: BlogListProps) => {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4 text-black">Latest Articles</h2>
        <p className="text-black text-lg">
          Thoughts on technology, development, and innovation
        </p>
      </div>

      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => onSelectPost(post)}
            className="bg-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-black transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-black">
                  {post.title}
                </h3>
                <p className="text-black mb-4">{post.excerpt}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-black">
              <span>{post.date}</span>
              <span>•</span>
              {/* <span>{post.readTime}</span> */}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
