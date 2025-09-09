import Link from "next/link";
import { Smartphone, Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const services = [
    { title: "Mobile App Development" },
    { title: "React Native Development" },
    { title: "Cross-Platform Solutions" },
    { title: "UI/UX Design" },
    { title: "App Store Deployment" },
];

export function Footer() {
  return (
    <footer className="border-t border-primary/20 py-12 pb-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: Bio */}
          <div className="space-y-4">
            <Link href="#hero" className="flex items-center space-x-2">
              <Smartphone className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-glow">Alex Johnson</span>
            </Link>
            <p className="text-muted-foreground">
              Crafting exceptional mobile experiences with React Native and modern technologies. Bringing your ideas to life on iOS and Android platforms.
            </p>
            <div className="flex space-x-2">
               <Button asChild variant="outline" size="icon" className="rounded-full border-primary/50 hover:border-primary">
                  <Link href="#" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full border-primary/50 hover:border-primary">
                  <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full border-primary/50 hover:border-primary">
                  <Link href="mailto:alex@devmobile.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
             <ul className="space-y-2">
                {services.map((service) => (
                    <li key={service.title} className="text-muted-foreground">
                    {service.title}
                    </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Alex Johnson. All rights reserved.
            </p>
             <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Made with <Heart className="h-4 w-4 text-accent" /> and React
            </div>
        </div>
      </div>
    </footer>
  );
}
