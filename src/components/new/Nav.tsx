const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="text-neutral-900 font-semibold">이서주</span>
        <ul className="flex gap-6 text-sm text-neutral-600">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-neutral-900 transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
