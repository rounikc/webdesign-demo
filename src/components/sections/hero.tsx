"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
       <div className="absolute inset-0 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[-10px_-10px] bg-[size:24px_24px]"></div>
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15),transparent_40%)]"></div>
      
      <div className="container z-10 flex flex-col items-center text-center">
        <motion.h1 
          className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-glow">Jane Doe</span>
        </motion.h1>
        <motion.p 
          className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          A passionate <span className="text-primary">React & React Native</span> developer crafting futuristic mobile and web experiences.
        </motion.p>
        <motion.div 
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
            <Link href="/resume.pdf" download>Download Resume</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
