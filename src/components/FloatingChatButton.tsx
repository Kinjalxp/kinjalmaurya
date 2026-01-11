import React from "react";
import { MessageCircle } from "lucide-react";

export const FloatingChatButton: React.FC = () => {
  return (
    <button
      className="fixed bottom-8 right-8 w-16 h-16 bg-black text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all z-50"
      aria-label="Open chat"
    >
      <MessageCircle size={28} />
    </button>
  );
};
