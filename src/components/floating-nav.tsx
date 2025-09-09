"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, User, Code, Bot, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hero", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#projects", label: "Projects", icon: Bot },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => {
        const href = link.href;
        // Ensure that we're dealing with a valid selector.
        if (href.startsWith("#")) {
          try {
            return document.querySelector(href);
          } catch (e) {
            // In case of an invalid selector, return null.
            return null;
          }
        }
        return null;
      }).filter(Boolean); // Filter out null values.
  
      const scrollPosition = window.scrollY + window.innerHeight / 2;
  
      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section.id}`);
            break;
          }
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <div className="glassmorphic flex items-center gap-2 rounded-full p-2 shadow-lg">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-all duration-300 hover:text-foreground md:h-12 md:w-auto md:px-4",
              activeSection === link.href &&
                "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md"
            )}
            aria-label={link.label}
          >
            <link.icon className="h-5 w-5 md:mr-2" />
            <span className="hidden md:inline">{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
