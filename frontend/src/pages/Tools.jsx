"use client";

import MainLayout from "@/components/layout/MainLayout";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Tools = () => {
  const tools = [
    {
      id: 1,
      name: "VS Code",
      category: "IDE",
      icon: "/images/vscode.svg",
      url: "https://code.visualstudio.com/",
    },
    {
      id: 2,
      name: "ChatGPT",
      category: "Productivity",
      icon: "/images/openai.svg",
      url: "https://chatgpt.com/",
    },
    {
      id: 3,
      name: "Notion",
      category: "Productivity",
      icon: "/images/notion.svg",
      url: "https://www.notion.so/",
    },
    {
      id: 4,
      name: "GitHub",
      category: "Version Control",
      icon: "/images/github (1).svg",
      url: "https://github.com/",
    },
    {
      id: 5,
      name: "Discord",
      category: "Communication",
      icon: "/images/discord.svg",
      url: "https://discord.com/",
    },
    {
      id: 6,
      name: "Figma",
      category: "Design",
      icon: "/images/figma (1).svg",
      url: "https://www.figma.com/",
    },
  ];

  return (
    <MainLayout>
      <div className="px-6 py-12 md:px-12 md:py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Title and Description - Outside Box */}
        <div className="w-full max-w-xl mb-6 mt-2 pl-4 md:pl-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
            Shovels
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground">
            Tools I frequently use to make life easier
          </p>
        </div>

        {/* Main Container Box */}
        <div className="w-full max-w-xl mx-auto px-4 md:px-8 bg-transparent border-0 rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <CardContainer className="w-full" containerClassName="py-0">
                  <CardBody className="bg-white dark:bg-black border border-black/[0.1] dark:border-white/[0.2] w-full h-24 rounded-lg p-3 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between gap-3 cursor-pointer">
                    <div className="flex-1 min-w-0">
                      <CardItem
                        translateZ="60"
                        as="h3"
                        className="text-sm font-bold text-foreground dark:text-white"
                      >
                        {tool.name}
                      </CardItem>

                      <CardItem
                        translateZ="40"
                        as="p"
                        className="text-xs text-muted-foreground dark:text-neutral-400"
                      >
                        {tool.category}
                      </CardItem>
                    </div>

                    <CardItem
                      translateZ="50"
                      className="flex-shrink-0"
                    >
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-16 h-16 object-contain"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </a>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Tools;
