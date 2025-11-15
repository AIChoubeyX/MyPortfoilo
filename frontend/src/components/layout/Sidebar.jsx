import { HomeIcon, ChatBubbleIcon, RocketIcon, CodeIcon, PersonIcon, EnvelopeOpenIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { NavLink } from "@/components/NavLink";
import SocialLinks from "./SocialLinks";
import TextType from "./TextType";

const navItems = [
  { to: "/", icon: HomeIcon, label: "Home" },
  { to: "/assistant", icon: ChatBubbleIcon, label: "Assistant" },
  { to: "/experience", icon: RocketIcon, label: "Journey" },
  { to: "/projects", icon: CodeIcon, label: "Projects" },
  { to: "/about", icon: PersonIcon, label: "About" },
  { to: "/contact", icon: EnvelopeOpenIcon, label: "Contact" },
  { to: "/tools", icon: MixerHorizontalIcon, label: "Tools" },
];

const Sidebar = () => {
  return (
    <aside className="hidden md:flex md:w-64 bg-sidebar flex-col justify-between h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-sidebar-accent scrollbar-track-sidebar">
      <div>
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <img 
              src="/images/profile.jpg" 
              alt="Ashutosh" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-sidebar-foreground text-base">Ashutosh</h2>
              <div className="text-xs text-muted-foreground min-h-[18px]">
                <TextType 
                  text={["AI Developer", "Web Builder", "Problem Solver", "Tech Enthusiast"]}
                  typingSpeed={60}
                  pauseDuration={2000}
                  deletingSpeed={40}
                  showCursor={false}
                  loop={true}
                />
              </div>
            </div>
          </div>
          {/* <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">AI/ML</span>
            <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">React</span>
            <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">Node.js</span>
            <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">Full Stack</span>
          </div> */}
        </div>

        <nav className="p-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className="flex items-center gap-3 px-3 py-2.5 text-sm text-sidebar-foreground rounded-md hover:bg-sidebar-accent transition-colors mb-1"
              activeClassName="bg-primary text-primary-foreground hover:bg-primary"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-6 border-t border-sidebar-border">
        <div className="mb-4">
          <p className="text-xs font-medium text-sidebar-foreground mb-3">Connect</p>
          <SocialLinks />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
