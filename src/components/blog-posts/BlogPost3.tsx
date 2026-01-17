import placeholder from "../../assets/placeholder_image.png";

const BlogPost3 = () => (
  <div className="prose max-w-none">
    {/* <h1 className="text-3xl font-bold mb-4">
      Building Scalable Web Applications
    </h1>
    <p className="text-gray-600 mb-6">January 5, 2025</p> */}
    <img
      src={placeholder}
      alt="Web Development"
      className="w-full h-full object-cover rounded-lg mb-6"
    />
  </div>
);

export default BlogPost3;
