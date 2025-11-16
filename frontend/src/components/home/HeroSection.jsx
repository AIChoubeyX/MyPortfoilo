import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const HeroSection = () => {
  const navigate = useNavigate();
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ashutoshchoubey2004@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <BackgroundBeamsWithCollision className="rounded-lg">
      <div className="w-full text-center md:text-left px-4 md:px-8 py-8 md:py-6 pt-12 md:pt-16 mt-[73px] md:mt-0">
        <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-2 flex flex-wrap items-center gap-2 justify-center md:justify-start" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif', color: 'rgb(22, 22, 22)' }}>
          <span>Hey, I'm</span> <PointerHighlight><span>Ashutosh</span></PointerHighlight>
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground font-normal mb-6" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif', color: 'rgb(22, 22, 22)' }}>
         AI Enthusiast
          <span className="inline-block ml-2 text-highlight">✨</span>
        </h2>

        {/* X Follow Card */}
        <div className="bg-card border border-border rounded-lg p-2 mb-6 flex items-center justify-between h-12 w-full md:w-auto inline-flex md:inline-flex">
          <div className="flex items-center gap-2">
            <div className="bg-foreground text-background w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs md:text-sm text-foreground">
                Connect with me on <span className="font-medium">X</span> for insights
              </p>
            </div>
          </div>
          <Button 
            size="sm" 
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-3 py-0.5 text-xs flex-shrink-0 ml-2"
            onClick={() => window.open("https://x.com/choubeyjii_1?t=aNWO5J95XL-bVpvu3akEyg&s=09", "_blank")}
          >
            Follow
          </Button>
        </div>

        {/* Bio */}
        <div className="space-y-2 md:space-y-3 mb-6" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif', color: 'rgb(22, 22, 22)', fontWeight: 300 }}>
          <p className="text-xs md:text-sm leading-relaxed">
            I'm Ashutosh Choubey, often called Choubey. I'm a passionate developer specializing in{" "}
            <span style={{ fontWeight: 500 }}>AI and Web Development</span> at Narula Institute of Technology. 
            With a strong interest in building scalable applications and intelligent solutions, I enjoy 
            transforming ideas into impactful digital products.
          </p>
          <p className="text-xs md:text-sm leading-relaxed">
            <span style={{ fontWeight: 500 }}>3rd Year B.Tech, AIML</span> student at Narula Institute of Technology.
          </p>
          <p className="text-xs md:text-sm leading-relaxed">
            I'm passionate about <span style={{ fontWeight: 500 }}>AI and Web Development</span>, and I love 
            building scalable applications and intelligent solutions.
          </p>
        </div>

        {/* CTA */}
        <div className="space-y-2">
          <p className="text-foreground text-xs md:text-sm">
            You can talk to me about{" "}
            <span className="font-medium">AI, new ideas, life, or anything else.</span>
          </p>
          <p className="text-muted-foreground text-xs md:text-sm">
            Say Hi on{" "}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              X
            </a>
          </p>

          <div className="flex gap-2 md:gap-3 pt-2 justify-center md:justify-start">
            <Button 
              size="sm"
              onClick={handleContactClick}
              className="bg-foreground text-background hover:bg-foreground/90 text-xs md:text-sm"
            >
              Contact
            </Button>
            <Button 
              size="sm"
              variant="outline"
              onClick={handleCopyEmail}
              className="border-foreground/20 hover:bg-muted text-xs md:text-sm"
            >
              <EnvelopeOpenIcon className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              E-Mail
            </Button>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;
