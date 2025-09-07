"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AITestPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [backendUrl, setBackendUrl] = useState(
    process.env.NEXT_PUBLIC_BACKEND_URL || "https://your-backend-on-railway.up.railway.app"
  );
  const [error, setError] = useState<string | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<string>("disconnected");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Test backend connection
  const testConnection = async () => {
    try {
      setError(null);
      const response = await fetch(`${backendUrl}/api/health`);
      const data = await response.json();
      
      if (response.ok) {
        setConnectionStatus("connected");
        console.log("Backend health check:", data);
      } else {
        setConnectionStatus("error");
        setError(`Backend error: ${data.error || 'Unknown error'}`);
      }
    } catch (err) {
      setConnectionStatus("error");
      setError(`Connection failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  };

  // Test OpenAI API directly
  const testOpenAI = async () => {
    try {
      setError(null);
      setIsLoading(true);
      
      const response = await fetch(`${backendUrl}/api/test-openai`);
      const data = await response.json();
      
      if (response.ok) {
        setError(null);
        console.log("OpenAI test successful:", data);
        // Add success message to chat
        const successMessage: Message = {
          id: Date.now().toString(),
          role: 'assistant',
          content: `✅ OpenAI API Test Successful!\n\nResponse: "${data.response}"\nModel: ${data.model}\nUsage: ${JSON.stringify(data.usage, null, 2)}`,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, successMessage]);
      } else {
        setError(`OpenAI test failed: ${data.error || 'Unknown error'}`);
        console.error("OpenAI test failed:", data);
      }
    } catch (err) {
      setError(`OpenAI test error: ${err instanceof Error ? err.message : 'Unknown error'}`);
      console.error("OpenAI test error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Send message to backend
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      // Use a simple persona for testing
      const response = await fetch(`${backendUrl}/api/scam-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personaId: 'tech_support', // Use existing persona
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        })
      });

      const data = await response.json();

      if (response.ok) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.content,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        setError(`Chat error: ${data.error || 'Unknown error'}`);
        console.error("Chat error:", data);
      }
    } catch (err) {
      setError(`Chat error: ${err instanceof Error ? err.message : 'Unknown error'}`);
      console.error("Chat error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Clear chat
  const clearChat = () => {
    setMessages([]);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E8EEF6]">
      <div className="max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">🤖 AI API Test Interface</h1>
          <p className="text-[#94A3B8]">Test your OpenAI integration with a ChatGPT-like interface</p>
          <div className="mt-3 p-3 bg-[#1E293B]/30 rounded-lg">
            <p className="text-sm text-[#94A3B8]">
              <strong>Production Mode:</strong> This page will test your deployed Railway backend and OpenAI API integration.
              Make sure your backend is deployed and your OpenAI API key is set in Railway environment variables.
            </p>
          </div>
        </div>

        {/* Configuration Panel */}
        <div className="bg-[#1E293B]/50 backdrop-blur-sm p-6 rounded-xl border border-[#334155] mb-6">
          <h2 className="text-xl font-semibold mb-4">Configuration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Backend URL</label>
              <input
                type="text"
                value={backendUrl}
                onChange={(e) => setBackendUrl(e.target.value)}
                className="w-full px-3 py-2 bg-[#0F172A] border border-[#334155] rounded-lg focus:border-[#3BA4F7] focus:outline-none"
                placeholder="http://localhost:3001"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">API Key (Optional - for direct testing)</label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-3 py-2 bg-[#0F172A] border border-[#334155] rounded-lg focus:border-[#3BA4F7] focus:outline-none"
                placeholder="sk-..."
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={testConnection}
              className="bg-[#3BA4F7] hover:bg-[#2A8EE6] text-white px-4 py-2 rounded-lg transition-colors"
            >
              Test Backend Connection
            </button>
            
            <button
              onClick={testOpenAI}
              disabled={isLoading}
              className="bg-[#20C997] hover:bg-[#1BA085] disabled:bg-[#64748B] text-white px-4 py-2 rounded-lg transition-colors"
            >
              {isLoading ? "Testing..." : "Test OpenAI API"}
            </button>
            
            <button
              onClick={clearChat}
              className="bg-[#7C5CFC] hover:bg-[#6D4CFC] text-white px-4 py-2 rounded-lg transition-colors"
            >
              Clear Chat
            </button>
          </div>

          {/* Status Indicators */}
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                connectionStatus === 'connected' ? 'bg-green-500' : 
                connectionStatus === 'error' ? 'bg-red-500' : 'bg-yellow-500'
              }`}></div>
              <span className="text-sm">
                Backend: {connectionStatus === 'connected' ? 'Connected' : 
                         connectionStatus === 'error' ? 'Error' : 'Unknown'}
              </span>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-500/20 border border-red-500/50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-red-400 mb-2">Error</h3>
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        {/* Chat Interface */}
        <div className="bg-[#1E293B]/50 backdrop-blur-sm rounded-xl border border-[#334155] overflow-hidden">
          {/* Chat Header */}
          <div className="bg-[#0F172A] px-6 py-4 border-b border-[#334155]">
            <h2 className="text-lg font-semibold">Chat with AI</h2>
            <p className="text-sm text-[#94A3B8]">Using persona: tech_support</p>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center text-[#94A3B8] py-8">
                <p>No messages yet. Start a conversation!</p>
                <p className="text-sm mt-2">Try asking: "Hello, can you help me with my computer?"</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-[#3BA4F7] text-white'
                        : 'bg-[#334155] text-[#E8EEF6]'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))
            )}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#334155] p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="animate-spin w-4 h-4 border-2 border-[#3BA4F7] border-t-transparent rounded-full"></div>
                    <span className="text-[#94A3B8]">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-[#0F172A] p-4 border-t border-[#334155]">
            <div className="flex gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here... (Press Enter to send, Shift+Enter for new line)"
                className="flex-1 px-3 py-2 bg-[#1E293B] border border-[#334155] rounded-lg focus:border-[#3BA4F7] focus:outline-none resize-none"
                rows={2}
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="bg-[#20C997] hover:bg-[#1BA085] disabled:bg-[#64748B] text-white px-6 py-2 rounded-lg transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Debug Info */}
        <div className="mt-6 bg-[#1E293B]/30 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Debug Information</h3>
          <div className="text-sm text-[#94A3B8] space-y-1">
            <p>Backend URL: {backendUrl}</p>
            <p>Environment Backend URL: {process.env.NEXT_PUBLIC_BACKEND_URL || 'Not set'}</p>
            <p>Messages in chat: {messages.length}</p>
            <p>Current status: {isLoading ? 'Loading' : 'Ready'}</p>
            <p>Last error: {error || 'None'}</p>
          </div>
          
          <div className="mt-4 p-3 bg-[#0F172A] rounded border border-[#334155]">
            <h4 className="font-medium text-[#E8EEF6] mb-2">🔧 How to find your Railway URL:</h4>
            <ol className="text-xs text-[#94A3B8] space-y-1 list-decimal list-inside">
              <li>Go to your Railway dashboard</li>
              <li>Click on your backend project</li>
              <li>Copy the URL from the "Domains" section</li>
              <li>Paste it in the "Backend URL" field above</li>
              <li>Or set NEXT_PUBLIC_BACKEND_URL in your Netlify environment variables</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
