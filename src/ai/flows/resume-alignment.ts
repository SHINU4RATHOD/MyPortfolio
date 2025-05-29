// Use server directive is required for Genkit flows.
'use server';

/**
 * @fileOverview AI tool that analyzes a resume and a job description to highlight the alignment between the user's skills and the job requirements.
 *
 * - resumeAlignment - A function that handles the resume alignment process.
 * - ResumeAlignmentInput - The input type for the resumeAlignment function.
 * - ResumeAlignmentOutput - The return type for the resumeAlignment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeAlignmentInputSchema = z.object({
  resumeText: z.string().describe('The text content of the resume.'),
  jobDescriptionText: z.string().describe('The text content of the job description.'),
});
export type ResumeAlignmentInput = z.infer<typeof ResumeAlignmentInputSchema>;

const ResumeAlignmentOutputSchema = z.object({
  alignmentAnalysis: z.string().describe('A natural language explanation of the alignment between the resume and the job description.'),
  fitScore: z.number().describe('A numerical score indicating the fit between the resume and the job description (0-100).'),
});
export type ResumeAlignmentOutput = z.infer<typeof ResumeAlignmentOutputSchema>;

export async function resumeAlignment(input: ResumeAlignmentInput): Promise<ResumeAlignmentOutput> {
  return resumeAlignmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'resumeAlignmentPrompt',
  input: {schema: ResumeAlignmentInputSchema},
  output: {schema: ResumeAlignmentOutputSchema},
  prompt: `You are an AI resume alignment tool. Analyze the provided resume and job description to determine how well the candidate's skills and experience align with the job requirements.

  Resume:
  {{resumeText}}

  Job Description:
  {{jobDescriptionText}}

  Provide a fit score (0-100) and a natural language explanation of the alignment.

  Consider skills, experience, and keywords.
  `,
});

const resumeAlignmentFlow = ai.defineFlow(
  {
    name: 'resumeAlignmentFlow',
    inputSchema: ResumeAlignmentInputSchema,
    outputSchema: ResumeAlignmentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
