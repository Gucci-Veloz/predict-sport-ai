
import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { ChatModal } from "./ChatModal";

export const ChatBotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center z-50 transition-all duration-300 ${
          isOpen ? "bg-[color:var(--c-error)]" : "bg-[color:var(--c-accent)] animate-glow-pulse"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
      
      <ChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
