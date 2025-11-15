import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { BackgroundBeams } from "@/components/ui/background-beams";

const About = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const techStack = [
    "React",
    "Express",
    "Node.js",
    "Python",
    "Java",
    "MySQL",
    "MongoDb",
  ];

  const handleGetInTouch = () => {
    navigate("/contact");
  };

  const handleEmailCopy = () => {
    // Replace with your actual email
    const email = "your-email@example.com";
    navigator.clipboard.writeText(email);
    toast({
      title: "Email Copied!",
      description: `${email} has been copied to clipboard.`,
    });
  };

  return (
    <MainLayout>
      <div className="relative w-full min-h-screen bg-gray-100">
        <BackgroundBeams />
        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 max-w-3xl mx-auto mt-20">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Ashutosh
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground tracking-wider">
              FULL-STACK DEV • AI ENGINEER • LLMS • TRAVEL • MUSIC • Cricket
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-12">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-3 py-1 text-xs font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Who I Am */}
          <div className="mb-10">
            <h2 className="text-lg md:text-xl font-bold text-foreground mb-3">
              Who I Am
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Hello! I'm Ashutosh, a Kolkata-based engineer passionate about building tools that simplify people's lives. I've been coding since 2022, writing about AI, LLMs, frontend, backend, and databases.
            </p>
          </div>

          {/* What I Do */}
          <div className="mb-10">
            <h2 className="text-lg md:text-xl font-bold text-foreground mb-3">
              What I Do
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Currently a Founding Engineer at <a href="#" className="text-blue-500 hover:underline font-medium">XYZ</a>, building workflow automation for insurance brokers.
            </p>
          </div>

          {/* My Journey */}
          <div className="mb-10">
            <h2 className="text-lg md:text-xl font-bold text-foreground mb-3">
              My Journey
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Founder of <a href="#" className="text-blue-500 hover:underline font-medium">Creonix.ai</a>, <a href="#" className="text-blue-500 hover:underline font-medium">Cultivate</a> and <a href="#" className="text-blue-500 hover:underline font-medium">Influencerbit</a> — led product development and design across multiple startups.
            </p>
          </div>

          {/* Vision */}
          <div className="mb-10">
            <h2 className="text-lg md:text-xl font-bold text-foreground mb-3">
              Vision
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              <span className="">LLMs and AI will automate the mundane and reshape how we work.</span> I strive to stay at the forefront of this transformation.
            </p>
          </div>

          {/* Beyond Code */}
          <div className="mb-12">
            <h2 className="text-lg md:text-xl font-bold text-foreground mb-3">
              Beyond Code
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Love Old & retro music, follow Football (Max) and play cricket.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              variant="default"
              className="px-6 py-2 font-medium text-sm"
              onClick={handleGetInTouch}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="px-6 py-2 font-medium text-sm"
              onClick={handleEmailCopy}
            >
              <Mail className="w-4 h-4 mr-2" />
              E-Mail
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
