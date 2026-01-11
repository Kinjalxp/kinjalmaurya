import React from "react";
import { User, BookOpen } from "lucide-react";
import type { TabType } from "../types";

interface HeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  const tabClass = (tab: TabType) => `
    px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2
    ${
      activeTab === tab ? "bg-black text-white" : "hover:bg-gray-100 text-black"
    }
  `;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-end">
          <nav className="flex gap-2">
            <button
              onClick={() => onTabChange("about")}
              className={tabClass("about")}
              aria-label="About Me"
            >
              <User size={18} />
              <span className="hidden sm:inline">About Me</span>
            </button>
            <button
              onClick={() => onTabChange("blog")}
              className={tabClass("blog")}
              aria-label="Blog"
            >
              <BookOpen size={18} />
              <span className="hidden sm:inline">Blog</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
