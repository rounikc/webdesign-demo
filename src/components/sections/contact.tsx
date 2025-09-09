import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="w-full py-20 lg:py-32">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-glow">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Have a project in mind or just want to say hello? Feel free to reach out.
          </p>
        </div>
        <div className="mx-auto max-w-xl">
            <form className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
              </div>
              <Textarea placeholder="Message" className="min-h-[150px]" />
              <Button type="submit" size="lg">Send Message</Button>
            </form>
            <div className="mt-8 flex justify-center gap-6">
                <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-8 w-8" />
                </Link>
                <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-8 w-8" />
                </Link>
                <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-8 w-8" />
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
