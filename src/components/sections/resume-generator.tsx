"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { handleGenerateSummary } from "@/actions/generate-summary";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { LoadingSpinner } from "@/components/loading-spinner";

const formSchema = z.object({
  resume: z.string().min(100, "Resume must be at least 100 characters."),
  jobDescription: z.string().min(50, "Job description must be at least 50 characters."),
});

export function ResumeGenerator() {
  const [generatedSummary, setGeneratedSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resume: "",
      jobDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedSummary("");
    try {
      const result = await handleGenerateSummary(values);
      if (result.adaptiveSummary) {
        setGeneratedSummary(result.adaptiveSummary);
      } else {
        // Handle error case
        console.error("Failed to generate summary");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="resume-generator" className="w-full bg-background py-20 lg:py-32">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-glow">
            Adaptive Resume Summary
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Paste your resume and a job description to generate a tailored summary using AI.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="neon-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Sparkles /> Generate Your Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="resume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Resume</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Paste your full resume here..."
                            className="min-h-[200px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="jobDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Paste the job description here..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? <LoadingSpinner /> : "Generate Summary"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center">
            <Card className="w-full min-h-[400px] flex flex-col neon-border-accent">
              <CardHeader>
                <CardTitle className="accent-glow">Generated Summary</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                {isLoading ? (
                  <div className="flex h-full items-center justify-center">
                    <LoadingSpinner />
                  </div>
                ) : generatedSummary ? (
                  <p className="whitespace-pre-wrap text-muted-foreground">{generatedSummary}</p>
                ) : (
                  <p className="text-muted-foreground">Your AI-generated summary will appear here...</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
