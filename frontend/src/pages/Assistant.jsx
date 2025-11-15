import MainLayout from "@/components/layout/MainLayout";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Assistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI Assistant. How can I help you today?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
      const response = await fetch(`${backendUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from AI");
      }

      const data = await response.json();
      const assistantMessage = {
        id: messages.length + 2,
        text: data.reply || "Sorry, I couldn't generate a response.",
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
      const errorMessage = {
        id: messages.length + 2,
        text: `Sorry, there was an error connecting to the AI. Backend: ${backendUrl}. Error: ${error.message}`,
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="flex items-start justify-start bg-background md:ml-0 lg:ml-32 mt-20 md:mt-0 px-2 sm:px-4 md:px-8 pt-8 sm:pt-8 md:pt-24 lg:pt-32 pb-6 min-h-screen">
        <div className="flex flex-col w-full max-w-sm sm:max-w-md md:max-w-lg h-[500px] sm:h-[450px] md:h-[500px] bg-background rounded-lg border border-border shadow-lg overflow-hidden ml-0 sm:ml-4 md:ml-12 lg:ml-24 mr-2 sm:mr-4 md:mr-8">
          {/* Header */}
          <div className="border-b border-border px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 font-sans">
              Chat Assistant
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold font-sans">
              Ask me anything about Ashutosh - I'm here to help
            </p>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 space-y-3 sm:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs sm:max-w-sm md:max-w-md px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm md:text-base ${
                    message.sender === "user"
                      ? "bg-black text-white rounded-br-none"
                      : "bg-gray-100 text-gray-900 rounded-bl-none border border-border"
                  }`}
                >
                  <p className="text-xs sm:text-sm md:text-base break-words">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 border border-border px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-border px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-white">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 rounded-full border border-border focus:outline-none focus:ring-1 focus:ring-black px-3 sm:px-4 py-2 text-xs sm:text-sm"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-black text-white rounded-full px-3 sm:px-4 md:px-6 py-2 hover:bg-black/90 disabled:opacity-50 disabled:cursor-not-allowed transition text-xs sm:text-sm"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Assistant;
