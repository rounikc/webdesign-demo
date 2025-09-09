"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <motion.section
      id="about"
      className="w-full py-20 lg:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-glow">
              // About Me
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A software developer architecting dynamic, user-centric applications. With a specialization in React and React Native, I engineer seamless cross-platform experiences. My career is a constant loop of problem-solving, driven by a commitment to clean, efficient code. I thrive in agile, collaborative environments and continuously refactor my skillset to adapt to new technologies.
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
    </motion.section>
  );
}
