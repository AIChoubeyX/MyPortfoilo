import { HomeIcon, CheckboxIcon, RocketIcon, BookmarkIcon, PersonIcon, EnvelopeOpenIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { NavLink } from "@/components/NavLink";
import SocialLinks from "./SocialLinks";

const navItems = [
  { to: "/", icon: HomeIcon, label: "Home" },
  { to: "/experience", icon: CheckboxIcon, label: "Experience" },
  { to: "/projects", icon: RocketIcon, label: "Projects" },
  { to: "/blogs", icon: BookmarkIcon, label: "Blogs" },
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
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
              alt="Ashutosh" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold text-sidebar-foreground">Ashutosh</h2>
              <p className="text-xs text-muted-foreground">Dev Stallion</p>
            </div>
          </div>
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
