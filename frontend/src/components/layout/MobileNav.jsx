import { useState } from "react";
import { HamburgerMenuIcon, Cross1Icon, HomeIcon, CheckboxIcon, RocketIcon, BookmarkIcon, PersonIcon, EnvelopeOpenIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
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

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
              alt="Aman" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold text-foreground">Aman</h2>
              <p className="text-xs text-muted-foreground">AI</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <Cross1Icon className="w-6 h-6" /> : <HamburgerMenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        >
          <nav 
            className="fixed top-[73px] right-0 bottom-0 w-64 bg-card border-l border-border p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1 mb-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-foreground rounded-md hover:bg-muted transition-colors"
                  activeClassName="bg-primary text-primary-foreground hover:bg-primary"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-xs font-medium text-foreground mb-3">Connect</p>
              <SocialLinks />
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNav;
