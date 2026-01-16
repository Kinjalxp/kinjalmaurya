import { useState } from "react";
import { AboutTab } from "./components/AboutTab";
import { User, BookOpen } from "lucide-react";

import { FloatingChatButton } from "./components/FloatingChatButton";
import type { TabType } from "./types";
import { BlogTab } from "./components/BlogTab";
import BlogPost from "./components/BlogPost";

function App() {
  const [activeTab, setActiveTab] = useState<TabType>("about");
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const handleSelectPost = (post: any) => {
    setSelectedPost(post);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };
  // const handleBackToBlog = () => {
  //   setSelectedPost(null);
  // };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* <Header activeTab={activeTab} onTabChange={setActiveTab} /> */}

      <div>
        <nav className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-1">
            <div className="flex  justify-end items-center py-4">
              <div className="flex gap-2 ">
                <button
                  onClick={() => {
                    setActiveTab("about");
                    setSelectedPost(null);
                  }}
                  className={`px-8 py-2 rounded-md transition-colors flex items-center gap-2 ${
                    activeTab === "about"
                      ? "bg-black text-white"
                      : "hover:bg-gray-100 text-black"
                  }`}
                >
                  <User size={18} />
                  <span className="hidden sm:inline"> About Me</span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab("blog");
                    setSelectedPost(null);
                  }}
                  className={`px-6 py-2 rounded-md transition-colors flex items-center gap-2 ${
                    activeTab === "blog"
                      ? "bg-black text-white"
                      : "hover:bg-gray-100 text-black"
                  }`}
                >
                  <BookOpen size={18} />
                  <span className="hidden sm:inline">Blog</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <main className="max-w-6xl mx-auto px-4 py-1">
        {/* {activeTab === "about" ? (
          <AboutTab />
        ) : (
          <BlogTab onSelectPost={handleSelectPost} />
        )} */}
        <div className="min-h-screen bg-white">
          <main className="max-w-6xl mx-auto px-4 py-8">
            {activeTab === "about" ? (
              <AboutTab />
            ) : selectedPost ? (
              <BlogPost post={selectedPost} onBack={handleBackToBlog} />
            ) : (
              <BlogTab onSelectPost={handleSelectPost} />
            )}
          </main>
        </div>
      </main>

      <FloatingChatButton />
    </div>
  );
}

export default App;
