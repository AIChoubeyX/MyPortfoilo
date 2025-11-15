import { TwitterLogoIcon, LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

const socialLinks = [
  { icon: TwitterLogoIcon, label: "X", url: "https://x.com/choubeyjii_1?t=aNWO5J95XL-bVpvu3akEyg&s=09" },
  { icon: LinkedInLogoIcon, label: "LinkedIn", url: "https://www.linkedin.com/in/ashutosh-choubey-46695928b" },
  { icon: GitHubLogoIcon, label: "Github", url: "https://github.com/AIChoubeyX" },
  { icon: InstagramLogoIcon, label: "Instagram", url: "https://www.instagram.com/choubey_jii1?igsh=MTB2c204Mjh2eGwz" },
];

const SocialLinks = () => {
  return (
    <div className="space-y-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between text-sm text-sidebar-foreground hover:text-accent transition-colors group"
        >
          <div className="flex items-center gap-2">
            <social.icon className="w-4 h-4" />
            <span>{social.label}</span>
          </div>
          <ExternalLinkIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      ))}
      <a
        href="https://medium.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between text-sm text-sidebar-foreground hover:text-accent transition-colors group"
      >
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
          </svg>
          <span>Medium</span>
        </div>
        <ExternalLinkIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </div>
  );
};

export default SocialLinks;
