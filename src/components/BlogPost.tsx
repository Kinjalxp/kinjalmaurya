import { ArrowLeft } from "lucide-react";

interface BlogPostProps {
  post: any;
  onBack: () => void;
}

const BlogPost = ({ post, onBack }: BlogPostProps) => {
  const PostComponent = post.component;

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Blog
      </button>
      <div className="bg-white rounded-lg shadow-md p-8">
        <PostComponent />
      </div>
    </div>
  );
};

export default BlogPost;
