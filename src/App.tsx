import { useState } from "react";
import { Header } from "./components/header";
import { AboutTab } from "./components/AboutTab";
import { BlogTab } from "./components/BlogTab";
import { FloatingChatButton } from "./components/FloatingChatButton";
import type { TabType } from "./types";

function App() {
  const [activeTab, setActiveTab] = useState<TabType>("about");

  return (
    <div className="min-h-screen bg-white text-black">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {activeTab === "about" ? <AboutTab /> : <BlogTab />}
      </main>

      <FloatingChatButton />
    </div>
  );
}

export default App;
