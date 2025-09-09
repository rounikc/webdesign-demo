import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="w-full py-20 lg:py-32">
      <div className="container grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-glow">
              About Me
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am a dedicated software developer with a strong focus on building dynamic, user-friendly applications. With expertise in React and React Native, I specialize in creating seamless experiences across both web and mobile platforms. My journey in tech is driven by a passion for solving complex problems and a love for clean, efficient code. I thrive in collaborative environments and I am always eager to learn and adapt to new technologies.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Card className="neon-border-accent w-full max-w-sm overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="https://picsum.photos/600/600"
                alt="About Me"
                width={600}
                height={600}
                className="h-full w-full object-cover"
                data-ai-hint="portrait person"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
