
import { Facebook, Twitter, Mail } from "lucide-react";

interface FooterLink {
  label: string;
  href: string; 
  id: string;
}

const quickLinks: FooterLink[] = [
  { label: "Tips & Tricks", href: "#tips-section", id: "tips-link" },
  { label: "Exam Planner", href: "#planner-section", id: "planner-link" },
  { label: "Contact Us", href: "#footer", id: "contact-link" }
];

const Footer = () => {
  return (
    <footer className="pt-12 mt-12 border-t border-border" id="footer">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-foreground">ExamPrep AI</h3>
          <p className="text-muted-foreground">
            Simplifying exam preparation with personalized study plans and up-to-date strategies.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-foreground">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <li key={link.id}>
                <a
                  href={link.href}
                  id={link.id}
                  className="text-primary hover:text-primary/80 hover:underline transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-foreground">Reach us at</h3>
          <div className="flex gap-4">
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-primary hover:bg-primary hover:text-white transform hover:-translate-y-1 transition-all"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </button>
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-primary hover:bg-primary hover:text-white transform hover:-translate-y-1 transition-all"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </button>
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-primary hover:bg-primary hover:text-white transform hover:-translate-y-1 transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="text-center py-4 border-t border-border text-sm text-muted-foreground">
        <p>This Webpage is created by <span className="font-bold">©️</span>Pragya. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
