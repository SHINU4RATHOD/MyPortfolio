"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { resumeAlignment, type ResumeAlignmentInput, type ResumeAlignmentOutput } from "@/ai/flows/resume-alignment";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AlignmentResult extends ResumeAlignmentOutput {
  error?: string;
}

export default function ResumeAlignmentToolSection() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescriptionText, setJobDescriptionText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AlignmentResult | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setResult(null);

    if (!resumeText.trim() || !jobDescriptionText.trim()) {
      toast({
        title: "Missing Information",
        description: "Please paste both your resume and the job description.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      const input: ResumeAlignmentInput = { resumeText, jobDescriptionText };
      const alignmentResult = await resumeAlignment(input);
      setResult(alignmentResult);
      toast({
        title: "Analysis Complete!",
        description: "Resume alignment insights are ready.",
      });
    } catch (error) {
      console.error("Resume alignment error:", error);
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
      setResult({ alignmentAnalysis: "", fitScore: 0, error: `Failed to analyze: ${errorMessage}` });
      toast({
        title: "Analysis Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="resume-tool" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Resume Alignment Tool</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Paste your resume and a job description to see how well they align, powered by AI.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Sparkles className="text-primary h-6 w-6" /> Provide Details</CardTitle>
              <CardDescription>Enter your resume content and the job description below.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="resumeText">Your Resume</Label>
                  <Textarea
                    id="resumeText"
                    placeholder="Paste your full resume text here..."
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    rows={10}
                    className="bg-slate-800/50 border-slate-700 focus:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobDescriptionText">Job Description</Label>
                  <Textarea
                    id="jobDescriptionText"
                    placeholder="Paste the full job description text here..."
                    value={jobDescriptionText}
                    onChange={(e) => setJobDescriptionText(e.target.value)}
                    rows={10}
                    className="bg-slate-800/50 border-slate-700 focus:ring-primary"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  Analyze Alignment
                </Button>
              </CardFooter>
            </form>
          </Card>

          <div className="lg:sticky lg:top-24"> {/* Make results sticky on larger screens */}
            {result && (
              <Card className="shadow-lg animate-fadeIn">
                <CardHeader>
                  <CardTitle>Alignment Insights</CardTitle>
                  {result.error && (
                     <Alert variant="destructive" className="mt-4">
                       <AlertTitle>Error</AlertTitle>
                       <AlertDescription>{result.error}</AlertDescription>
                     </Alert>
                  )}
                </CardHeader>
                {!result.error && (
                  <>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="fitScore" className="text-lg">Fit Score: {result.fitScore}%</Label>
                        <Progress value={result.fitScore} className="w-full mt-2 h-4" aria-label={`Fit score: ${result.fitScore}%`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Analysis:</h4>
                        <p className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto p-2 rounded-md bg-slate-800/30">
                          {result.alignmentAnalysis}
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-xs text-muted-foreground">
                        This analysis is AI-generated and should be used as a guide.
                      </p>
                    </CardFooter>
                  </>
                )}
              </Card>
            )}
            {!isLoading && !result && (
              <div className="p-8 text-center text-muted-foreground border-2 border-dashed border-border rounded-lg h-full flex flex-col justify-center items-center min-h-[200px]">
                <Sparkles className="h-12 w-12 mb-4 text-primary" />
                <p className="text-lg">Your alignment results will appear here.</p>
                <p className="text-sm">Fill out the form and click "Analyze Alignment".</p>
              </div>
            )}
             {isLoading && (
              <div className="p-8 text-center text-muted-foreground border-2 border-dashed border-border rounded-lg h-full flex flex-col justify-center items-center min-h-[200px]">
                <Loader2 className="h-12 w-12 mb-4 text-primary animate-spin" />
                <p className="text-lg">Analyzing... Please wait.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
