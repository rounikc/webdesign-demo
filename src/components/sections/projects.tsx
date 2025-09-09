"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "Cyberpunk Fitness App",
    description: "A mobile app for tracking workouts with a futuristic, neon interface. Built with React Native and Firebase.",
    image: "https://picsum.photos/600/400",
    hint: "mobile app",
    tags: ["React Native", "Firebase", "Expo"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI-Powered News Aggregator",
    description: "A web platform that uses AI to curate and summarize tech news. Developed with Next.js and Tailwind CSS.",
    image: "https://picsum.photos/600/400",
    hint: "dashboard data",
    tags: ["Next.js", "TypeScript", "AI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Decentralized Social Network",
    description: "A proof-of-concept social media app on the blockchain, ensuring user privacy and data ownership.",
    image: "https://picsum.photos/600/400",
    hint: "social network",
    tags: ["React", "Solidity", "Ethers.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Interactive E-commerce Store",
    description: "An e-commerce mobile app for a streetwear brand with immersive animations and a seamless checkout experience.",
    image: "https://picsum.photos/600/400",
    hint: "ecommerce mobile",
    tags: ["React Native", "Shopify API"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="w-full py-20 lg:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-glow">
            My Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Here are some of the projects I've built. Explore them to see my skills in action.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="neon-border-accent h-full overflow-hidden transition-all hover:scale-105 hover:shadow-accent/20 hover:shadow-lg">
                <CardHeader>
                  <div className="aspect-video relative mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-t-lg"
                      data-ai-hint={project.hint}
                    />
                  </div>
                  <CardTitle className="text-xl accent-glow">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 mt-auto">
                  <Button variant="outline" asChild>
                    <Link href={project.liveUrl} target="_blank">
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href={project.githubUrl} target="_blank">
                      GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
