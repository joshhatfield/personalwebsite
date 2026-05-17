import { useState } from "react";

interface MenuItem {
  id: string;
  label: string;
}

interface BlogMenuProps {
  items: MenuItem[];
}

const BlogMenu: React.FC<BlogMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mb-8 border border-base-300 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 bg-base-200 hover:bg-base-300 transition-colors"
      >
        <span className="font-medium">Contents</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="px-4 py-3 bg-base-100 border-t border-base-300">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-base-content/70 hover:text-primary transition-colors py-1"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogMenu;