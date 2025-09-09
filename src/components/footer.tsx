import { Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-primary/20 py-6">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold text-glow">Neonfolio</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Neonfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
