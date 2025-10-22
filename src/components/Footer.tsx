import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Ashutosh Kumar. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart   size={14} className="text-red-500 fill-red-500"  /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
