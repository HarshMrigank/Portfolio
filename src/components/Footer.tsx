const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        w-full
        bg-primary/90
        text-primary-foreground
        border-t border-primary/20
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="HM"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-foreground/30"
              />
              <span className="font-semibold">HM</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} Harsh Mrigank. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-3 text-primary-foreground">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="
                      text-sm
                      text-primary-foreground/70
                      hover:text-primary-foreground
                      transition-colors
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium mb-3 text-primary-foreground">
              Connect
            </h4>
            <ul className="space-y-2">
              {[
                {
                  href: "https://www.linkedin.com/in/harsh-mrigank-a29584277/",
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/HarshMrigank",
                  label: "GitHub",
                },
                {
                  href: "/resume.pdf",
                  label: "Resume",
                },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="
                      text-sm
                      text-primary-foreground/70
                      hover:text-primary-foreground
                      transition-colors
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex md:justify-end">
            <div className="flex gap-3">
              {[
                {
                  href: "https://github.com/HarshMrigank",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.094 3.292 9.416 7.858 10.944.574.106.785-.25.785-.556 0-.274-.01-1.01-.015-1.984-3.195.695-3.87-1.54-3.87-1.54-.523-1.328-1.277-1.683-1.277-1.683-1.043-.713.08-.699.08-.699 1.154.081 1.762 1.185 1.762 1.185 1.025 1.754 2.688 1.248 3.342.955.104-.743.401-1.248.73-1.534-2.55-.29-5.234-1.275-5.234-5.676 0-1.254.448-2.279 1.183-3.083-.119-.29-.513-1.459.112-3.04 0 0 .964-.309 3.16 1.18a10.99 10.99 0 0 1 2.875-.387c.976.004 1.96.132 2.875.387 2.193-1.49 3.155-1.18 3.155-1.18.627 1.581.233 2.75.114 3.04.737.804 1.183 1.829 1.183 3.083 0 4.413-2.688 5.382-5.252 5.667.412.354.78 1.05.78 2.117 0 1.528-.014 2.76-.014 3.137 0 .308.207.667.792.554C20.708 21.413 24 17.093 24 12 24 5.648 18.352.5 12 .5z" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.linkedin.com/in/harsh-mrigank-a29584277/",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 .002 0H4.98zM3.5 9h3v11h-3V9zM14.5 9c2.485 0 4.5 2.014 4.5 4.5V20h-3v-6.5c0-.828-.672-1.5-1.5-1.5-.828 0-1.5.672-1.5 1.5V20h-3V9h3v1.5c.44-.835 1.363-1.5 2.5-1.5z" />
                    </svg>
                  ),
                },
                {
                  href: "mailto:hi@harshmrigank.dev",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    p-2 rounded-md
                    border border-primary-foreground/20
                    text-primary-foreground/70
                    hover:text-primary-foreground
                    hover:bg-primary-foreground/10
                    transition-colors
                  "
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
