import MainLayout from "@/components/layout/MainLayout";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Creonix",
      description: "A Ai Sass applictaion for students and working profesionals.",
      // 📸 ADD IMAGE: Place creonix.png in public/images/ folder
      screenshot: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300'%3E%3Crect fill='%23f0f0f0' width='500' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3ECreonix%3C/text%3E%3C/svg%3E",
      tags: ["Personal", "Productivity"],
      status: "active",
      deployment: "https://creonixai.vercel.app/",
      github: "https://github.com/AIChoubeyX/Ai",
    },
    {
      id: 2,
      title: "Cultivate",
      description: "a multi ai assistant platform for Indian farmers",
      // 📸 ADD IMAGE: Place cultivate.png in public/images/ folder
      screenshot: "/images/cultivate.png",
      tags: ["AI", "Prompts", "Productivity"],
      status: "active",
      github: "https://github.com/AIChoubeyX/Cultivate_Project",
      deployment: "https://cultivate.vercel.app",
    },
    {
      id: 3,
      title: "Talksy",
      description: "Full-stack AI-powered chat application with real-time messaging and user authentication.",
      // 📸 ADD IMAGE: Place talksy.png in public/images/ folder
      screenshot: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300'%3E%3Crect fill='%23f0f0f0' width='500' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3ETalksy%3C/text%3E%3C/svg%3E",
      tags: ["AI", "Development"],
      status: "active",
      github: "https://github.com/AIChoubeyX/Talksy-2",
      deployment: "https://talksy.vercel.app",
    },
    {
      id: 4,
      title: "Coming Soon",
      description: "Stay tuned for more exciting projects coming your way!",
      // 📸 Coming Soon Placeholder
      screenshot: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300'%3E%3Crect fill='%23f3f4f6' width='500' height='300'/%3E%3Ctext x='50%25' y='45%25' font-size='24' font-weight='bold' fill='%236b7280' text-anchor='middle'%3E🚀%3C/text%3E%3Ctext x='50%25' y='60%25' font-size='22' fill='%234b5563' text-anchor='middle' font-weight='bold'%3EComing Soon%3C/text%3E%3C/svg%3E",
      tags: ["Upcoming"],
      status: "soon",
      github: "#",
      deployment: "#",
    },
  ];

  return (
    <MainLayout>
      <div className="px-6 py-12 md:px-12 md:py-16">
        <div className="mb-8 pt-8 flex justify-center">
          <div className="w-full max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold  mb-2 font-sans">Projects</h1>
            <p className="text-sm text-gray-500 font-semibold font-sans">Playground - Small MVP to Production Apps</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
            {projects.map((project) => (
              <FollowerPointerCard
                key={project.id}
                title={project.title}
                className="h-full"
              >
                <div className="border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="w-full h-32 bg-gray-200 overflow-hidden">
                    <img 
                      src={project.screenshot} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-3">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-sm font-extrabold text-gray-600 font-sans">{project.title}</h2>
                      <span className="px-1.5 py-0.5 text-xs border border-green-600 text-green-600 rounded-full">
                        {project.status}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 mb-2 line-clamp-2 font-sans">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-1.5 py-0.5 text-xs bg-gray-100 text-gray-700 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => window.open(project.github, "_blank")}
                        className="flex-1 px-3 py-1.5 bg-black text-white rounded-full hover:bg-black/90 text-xs font-medium transition"
                      >
                        Repository
                      </button>
                      <button
                        onClick={() => window.open(project.deployment, "_blank")}
                        className="flex-1 px-3 py-1.5 border border-black text-black rounded-full hover:bg-gray-50 text-xs font-medium transition"
                      >
                        Live Link
                      </button>
                    </div>
                  </div>
                </div>
              </FollowerPointerCard>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
