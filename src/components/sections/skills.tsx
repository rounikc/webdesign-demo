// @ts-nocheck
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const skillsData = [
  { 
    name: "React Native", 
    category: "Mobile",
    color: "text-green-400",
    icon: (
      <svg fill="currentColor" width="48" height="48" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path d="M512 512a448 448 0 0 0 448-448h-896a448 448 0 0 0 448 448zm0 288a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm0 128a256 256 0 1 0 0-512 256 256 0 0 0 0 512z" />
      </svg>
    )
  },
  { 
    name: "React", 
    category: "Frontend",
    color: "text-cyan-400",
    icon: (
      <svg fill="currentColor" width="48" height="48" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path d="M512 512a448 448 0 0 0 448-448h-896a448 448 0 0 0 448 448zm0 288a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm0 128a256 256 0 1 0 0-512 256 256 0 0 0 0 512z" />
      </svg>
    )
  },
  { 
    name: "TypeScript", 
    category: "Language", 
    color: "text-pink-500",
    icon: (
        <svg fill="currentColor" width="48" height="48" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <path d="m0 0h128v128h-128z" fill="#007acc" />
            <path d="m28.6 94.1v-55.8h11.9v4.5c3.3-3.6 7.4-5.3 12.3-5.3 9.7 0 17.1 6.7 17.1 16.7v39.9h-11.9v-37.4c0-5.3-3.2-8.7-8.3-8.7-4.9 0-8.9 3.5-8.9 8.7v37.4z" fill="#fff" />
            <path d="m76.8 62.7c0-5.4 4.3-9.5 9.7-9.5 5.5 0 9.7 4.1 9.7 9.5 0 5.5-4.2 9.6-9.7 9.6-5.4 0-9.7-4.1-9.7-9.6zm13.1 20.8c3.2-1.9 4.3-3.7 4.3-6.1v-1.7h-15.6c.1 7.3 4.9 11.3 11.3 11.3 4.5 0 7.8-1.7 9.8-3.9l-5-5.9c-1.3 1-3.2 1.8-4.8 1.8-2.3 0-3.6-1.2-4.2-2.8z" fill="#fff" />
        </svg>
    )
  },
  { 
    name: "JavaScript", 
    category: "Language",
    color: "text-yellow-400",
    icon: (
      <svg fill="currentColor" width="48" height="48" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h128v128h-128z" fill="#f7df1e"/>
        <path d="m61.3 92.4c-3.6 2.3-8.2 3.6-13.2 3.6-9.1 0-14.2-4.5-17.1-10.9l9-5.1c1.8 3.8 4.2 6.5 7.9 6.5 2.8 0 4.8-.9 4.8-3.2 0-2.3-1.8-3.2-5.4-4.5-6.1-2.2-9.9-5.2-9.9-11.3 0-6.1 4.5-10.3 12.1-10.3 4.2 0 7.8 1.2 10.5 2.9l-4.7 8.2c-1.7-1-3.3-1.6-4.9-1.6s-2.8.6-2.8 2.3c0 1.8 1.3 2.6 4.7 3.8 6.7 2.4 10.6 5.6 10.6 11.7.1 7.2-4.9 11.5-13.2 11.5m30-47.8c-7.2 0-11.7 4.1-13.8 7.3l8.6 5.4c1.3-2 2.6-3.3 5-3.3 2.4 0 4 .9 4 3v28.8h10.3v-30.8c0-7.8-5.2-10.6-14.1-10.6"/>
      </svg>
    )
  },
  {
    name: "Java",
    category: "Language",
    color: "text-orange-500",
    icon: <span className="text-4xl">☕</span>,
  },
  {
    name: "C",
    category: "Language",
    color: "text-blue-600",
    icon: <span className="text-4xl">🇨</span>,
  },
  {
    name: "C++",
    category: "Language",
    color: "text-blue-700",
    icon: <span className="text-4xl">👾</span>,
  },
  {
    name: "Python",
    category: "Language",
    color: "text-yellow-500",
    icon: <span className="text-4xl">🐍</span>,
  },
  { 
    name: "Firebase", 
    category: "Backend",
    color: "text-amber-400",
    icon: (
      <svg width="48" height="48" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.20455 101.539L23.9538 12.3361C24.4932 10.9657 26.2335 10.4286 27.4259 11.3917L61.642 37.8927L3.20455 101.539Z" fill="#FFC24A"/>
        <path d="M66.6967 35.2525L26.5455 11.5303C25.2636 10.7424 23.6332 11.4886 23.2209 12.9242L3.81818 97.5562L66.6967 35.2525Z" fill="#F4BD42"/>
        <path d="M83.4371 83.1818L64 40.5909L4.01758 100.279L83.4371 83.1818Z" fill="#F6820C"/>
        <path d="M4.09091 100.04L24.8402 10.8371C25.3795 9.46667 27.1199 8.92955 28.3123 9.89265L83.4371 55.4318L4.09091 100.04Z" fill="#F4BD42"/>
        <path d="M3.81818 97.5562L83.4371 83.1818L66.6967 35.2525L3.81818 97.5562Z" fill="#FFA713"/>
        <path d="M83.4371 55.4318V83.1818L124.182 27.2727L83.4371 55.4318Z" fill="#FDE068"/>
      </svg>
    )
  },
  { 
    name: "Node.js", 
    category: "Backend",
    color: "text-lime-500",
    icon: (
      <svg width="48" height="48" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M62.6348 0.160156L0 36.3202V108.64L62.6348 144.8L127.5 107.52V35.2002L62.6348 0.160156Z" fill="#8CC84B"/>
        <path d="M63.75 13.2803L18.75 39.8402V93.1202L63.75 119.68L108.75 93.1202V39.8402L63.75 13.2803Z" fill="#231F20"/>
        <path d="M87.3516 46.241C84.3411 43.1118 80.0938 41.5205 75.3125 41.5205H59.707V68.0406L68.5352 63.6293V50.3101H72.4805C74.6582 50.3101 75.7471 51.399 75.7471 53.5768V76.4332C75.7471 78.611 74.6582 79.7001 72.4805 79.7001H52.4414V71.2173L43.6133 75.6286V41.5205H40V88.4795H52.4414C55.4518 91.6087 59.6991 93.1999 64.4805 93.1999H80.0859V66.6793L71.2578 71.0906V84.3698H67.3125C65.1348 84.3698 64.0459 83.2809 64.0459 81.1031V58.2467C64.0459 56.0689 65.1348 54.9799 67.3125 54.9799H87.3516V46.241Z" fill="#8CC84B"/>
      </svg>
    )
  },
  { 
    name: "Expo", 
    category: "Tools",
    color: "text-gray-400",
    icon: (
      <svg width="48" height="48" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="64" fill="#000020"/>
        <path d="M49 92C49 86.4772 44.5228 82 39 82C33.4772 82 29 86.4772 29 92C29 97.5228 33.4772 102 39 102C44.5228 102 49 97.5228 49 92ZM89 92C89 86.4772 84.5228 82 79 82C73.4772 82 69 86.4772 69 92C69 97.5228 73.4772 102 79 102C84.5228 102 89 97.5228 89 92ZM69 52C69 46.4772 64.5228 42 59 42C53.4772 42 49 46.4772 49 52C49 57.5228 53.4772 62 59 62C64.5228 62 69 57.5228 69 52Z" fill="white"/>
        <path d="M69 52C69 57.5228 73.4772 62 79 62C84.5228 62 89 57.5228 89 52C89 46.4772 84.5228 42 79 42C73.4772 42 69 46.4772 69 52ZM69 52L49 92" stroke="white" strokeWidth="10"/>
      </svg>
    )
  },
];

const categories = ["All", "Mobile", "Frontend", "Language", "Backend", "Tools"];

export function Skills() {
  const [filter, setFilter] = useState("All");

  const filteredSkills = skillsData.filter((skill) =>
    filter === "All" ? true : skill.category === filter
  );

  return (
    <motion.section
      id="skills"
      className="w-full bg-background py-20 lg:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My <span className="text-glow">Tech Stack</span>
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-primary"></div>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Technologies I love working with to build amazing mobile experiences.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border-primary/20",
                filter === category && "bg-primary text-primary-foreground"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="neon-border group flex h-full flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20">
                <CardContent className="flex flex-col items-center gap-4 p-0">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <h3 className={cn("text-lg font-bold", skill.color)}>{skill.name}</h3>
                  <div className="text-xs text-muted-foreground rounded-full bg-secondary px-2 py-0.5">
                    {skill.category}
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
