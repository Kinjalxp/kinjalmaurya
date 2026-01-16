import { useState } from "react";
import { Header } from "./components/Header";
import { AboutTab } from "./components/AboutTab";

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

      <main className="max-w-6xl mx-auto px-4 py-1">
        {/* {activeTab === "about" ? (
          <AboutTab />
        ) : (
          <BlogTab onSelectPost={handleSelectPost} />
        )} */}
        <div className="min-h-screen bg-white">
          <nav className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex  justify-end items-center py-4">
                <div className="flex space-x-4 ">
                  <button
                    onClick={() => {
                      setActiveTab("about");
                      setSelectedPost(null);
                    }}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      activeTab === "about"
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    About Me
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("blog");
                      setSelectedPost(null);
                    }}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      activeTab === "blog"
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Blog
                  </button>
                </div>
              </div>
            </div>
          </nav>

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
