import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Footer = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      hour12: true 
    });
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between text-sm">
        <button 
          onClick={() => navigate("/contact")} 
          className="flex items-center gap-1 text-foreground hover:text-accent transition-colors cursor-pointer bg-none border-none p-0"
        >
          <span>Reach out</span>
          <ArrowRightIcon className="w-4 h-4" />
        </button>
        <span className="text-muted-foreground hidden sm:inline">
          Made by Ashutosh | © 2025
        </span>
        <span className="text-muted-foreground font-mono text-xs">
          {formatTime(currentTime)}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
