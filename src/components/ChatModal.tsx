
import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export const ChatModal = ({ isOpen, onClose }: ChatModalProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: '👋 ¡Hola! Soy AIBet Assistant. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Basado en nuestros análisis, el Real Madrid tiene un 68% de probabilidad de ganar este partido.",
        "Nuestro algoritmo ha analizado 1,250 partidos similares y recomienda una apuesta de tipo «victoria local».",
        "En este momento, la mejor cuota disponible para este evento es de 1.85 en Bet365.",
        "Los factores clave para este partido incluyen: lesiones recientes, ventaja local y estadísticas de enfrentamientos directos.",
        "¿Quieres que analice otro partido o te proporcione más información sobre este?"
      ];
      
      const botMessage: Message = {
        id: Date.now().toString(),
        sender: 'bot',
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 bg-black/50 p-4 md:p-6">
      <div 
        className={cn(
          "bg-[color:var(--c-bg-secondary)] w-full max-w-md rounded-lg overflow-hidden shadow-xl border border-[color:var(--c-divider)] flex flex-col",
          "transition-all duration-300 animate-fade-in-up h-[80vh] max-h-[600px]"
        )}
      >
        {/* Header */}
        <div className="p-4 border-b border-[color:var(--c-divider)] flex items-center">
          <div className="w-8 h-8 rounded-full bg-[color:var(--c-accent)] flex-shrink-0 flex items-center justify-center">
            🤖
          </div>
          <div className="ml-3">
            <h3 className="font-mono-title font-semibold">AI Bet Assistant</h3>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
              <span className="text-xs text-[color:var(--c-text-secondary)]">En línea</span>
            </div>
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={cn(
                "flex",
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              <div 
                className={cn(
                  "max-w-[80%] rounded-lg px-4 py-2",
                  message.sender === 'user' 
                    ? 'bg-[color:var(--c-accent)] text-white' 
                    : 'bg-[color:var(--c-bg-primary)]'
                )}
              >
                <p>{message.text}</p>
                <div className="text-right mt-1">
                  <span className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[color:var(--c-bg-primary)] rounded-lg px-4 py-2 w-16">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[color:var(--c-text-secondary)] rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-[color:var(--c-text-secondary)] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-[color:var(--c-text-secondary)] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input */}
        <div className="p-4 border-t border-[color:var(--c-divider)]">
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              placeholder="Escribe tu mensaje..."
              className="flex-1 bg-[color:var(--c-bg-primary)] rounded-l-md border-y border-l border-[color:var(--c-divider)] px-4 py-2 focus:outline-none"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="bg-[color:var(--c-accent)] text-white rounded-r-md px-4 py-2 flex items-center justify-center disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <div className="text-xs text-center mt-2 text-[color:var(--c-text-secondary)]">
            Consulta toda la información sobre tus apuestas y estrategias
          </div>
        </div>
      </div>
    </div>
  );
};
