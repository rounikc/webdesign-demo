"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Code, Zap, Users } from "lucide-react";

const expertiseData = [
    {
        icon: Smartphone,
        title: "Mobile Expert",
        description: "Specialized in creating stunning mobile experiences",
    },
    {
        icon: Code,
        title: "Full-Stack",
        description: "Expert in React Native and modern web technologies",
    },
    {
        icon: Zap,
        title: "Performance",
        description: "Optimized apps with smooth animations and fast load times",
    },
    {
        icon: Users,
        title: "User-Centric",
        description: "Focus on intuitive UX and accessibility standards",
    },
];

const skillsTags = ["React Native", "TypeScript", "Expo", "Firebase"];

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
      <div className="container">
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About <span className="text-glow">Me</span>
            </h2>
            <div className="mt-2 h-1 w-16 bg-primary mx-auto"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground md:text-lg">
                I'm a passionate mobile app developer with over 4 years of experience creating innovative mobile solutions. My expertise lies in React Native development, where I bridge the gap between beautiful design and powerful functionality.
              </p>
              <p className="text-muted-foreground md:text-lg">
                From concept to App Store deployment, I handle the entire mobile development lifecycle. I specialize in creating cross-platform applications that deliver native performance while maintaining code efficiency and scalability.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
                {skillsTags.map(tag => (
                    <Badge key={tag} variant="outline" className="border-primary/50 text-primary/80">{tag}</Badge>
                ))}
            </div>
             <div className="flex items-center justify-center pt-6">
                <Card className="neon-border-accent w-full max-w-xs overflow-hidden">
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

          <div className="grid grid-cols-2 gap-6">
            {expertiseData.map((item, index) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card className="neon-border h-full bg-card/50">
                        <CardHeader className="flex-row items-center gap-4 space-y-0">
                            <item.icon className="h-8 w-8 text-primary" />
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
