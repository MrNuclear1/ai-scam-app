"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ChatGPTBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm ChatGPT. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input on component mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date()
    };

    // Add user message immediately
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setError(null);

    try {
      // Call our backend API that uses OpenAI
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/test`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      // Add assistant response
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response || "I received your message but couldn't generate a proper response.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);

    } catch (err) {
      console.error('ChatGPT API error:', err);
      setError(err instanceof Error ? err.message : 'Failed to get response');
      
      // Add error message
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Hello! I'm ChatGPT. How can I help you today?",
        timestamp: new Date()
      }
    ]);
    setError(null);
  };

  return (
    <div className="bg-[#1E293B]/50 backdrop-blur-sm rounded-xl border border-[#334155] p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-[#20C997] to-[#3BA4F7] rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">AI</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#E8EEF6]">ChatGPT Test</h3>
            <p className="text-sm text-[#94A3B8]">Test OpenAI API integration</p>
          </div>
        </div>
        <button
          onClick={clearChat}
          className="text-[#94A3B8] hover:text-[#E8EEF6] transition-colors text-sm"
        >
          Clear Chat
        </button>
      </div>

      {/* Messages Container */}
      <div className="bg-[#0F172A]/50 rounded-lg p-4 h-80 overflow-y-auto mb-4 border border-[#334155]">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === 'user'
                  ? 'bg-gradient-to-r from-[#3BA4F7] to-[#20C997] text-white'
                  : 'bg-[#334155] text-[#E8EEF6]'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-[#334155] text-[#E8EEF6] p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="animate-spin w-4 h-4 border-2 border-[#3BA4F7] border-t-transparent rounded-full"></div>
                <span className="text-sm">Thinking...</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">Error: {error}</p>
        </div>
      )}

      {/* Input Area */}
      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here..."
          disabled={isLoading}
          className="flex-1 bg-[#0F172A]/50 border border-[#334155] rounded-lg px-4 py-3 text-[#E8EEF6] placeholder-[#94A3B8] focus:outline-none focus:border-[#3BA4F7] focus:ring-1 focus:ring-[#3BA4F7] disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          onClick={sendMessage}
          disabled={!inputValue.trim() || isLoading}
          className="bg-gradient-to-r from-[#3BA4F7] to-[#20C997] hover:from-[#2A8EE6] hover:to-[#1BA085] disabled:from-[#64748B] disabled:to-[#64748B] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Send"
          )}
        </button>
      </div>

      {/* API Status */}
      <div className="mt-3 text-center">
        <p className="text-xs text-[#94A3B8]">
          Powered by OpenAI API via backend • {process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}
        </p>
        <p className="text-xs text-[#64748B] mt-1">
          Last updated: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
}
