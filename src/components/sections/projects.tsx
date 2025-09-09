"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projectsData = [
  {
    title: "FoodieApp",
    description: "A comprehensive food delivery app with real-time tracking, restaurant management, and a seamless ordering experience.",
    image: "https://picsum.photos/600/400",
    hint: "food delivery",
    category: "React Native",
    downloads: "25K+",
    rating: "4.8",
  },
  {
    title: "GymBro",
    description: "A fitness tracking app that helps users log workouts, track progress, and connect with a community of fitness enthusiasts.",
    image: "https://picsum.photos/600/400",
    hint: "fitness gym",
    category: "React Native",
    downloads: "15K+",
    rating: "4.6",
  },
  {
    title: "DevDash",
    description: "A dashboard for developers to monitor their projects, track tasks, and visualize productivity metrics.",
    image: "https://picsum.photos/600/400",
    hint: "dashboard data",
    category: "Web Apps",
    downloads: "8K+",
    rating: "4.9",
  },
  {
    title: "StyleSwap",
    description: "An e-commerce platform for a fashion brand, featuring a modern UI, smooth animations, and a secure checkout process.",
    image: "https://picsum.photos/600/400",
    hint: "fashion e-commerce",
    category: "UI/UX",
    downloads: "12K+",
    rating: "4.7",
  },
];

const categories = ["All Projects", "React Native", "Web Apps", "UI/UX"];

export function FeaturedProjects() {
  const [filter, setFilter] = useState("All Projects");

  const filteredProjects = projectsData.filter((project) =>
    filter === "All Projects" ? true : project.category === filter
  );

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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">Projects</span>
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-primary to-green-400"></div>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Showcasing mobile applications that combine beautiful design with powerful functionality
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border-primary/20 transition-all duration-300",
                filter === category && "bg-primary text-primary-foreground border-primary/40 shadow-[0_0_10px_hsl(var(--primary)/0.3)]"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden transition-all hover:scale-105 hover:shadow-accent/20 hover:shadow-lg border-accent/40 shadow-[0_0_10px_hsl(var(--accent)/0.5)]">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={project.hint}
                    />
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <div className="flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
                        <Download className="h-3 w-3" />
                        <span>{project.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
                        <Star className="h-3 w-3 text-yellow-400" />
                        <span>{project.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-accent drop-shadow-[0_0_8px_hsl(var(--accent))]">{project.title}</h3>
                    <p className="mt-2 text-muted-foreground">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
