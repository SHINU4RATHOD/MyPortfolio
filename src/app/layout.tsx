
import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shinu Rathod - Data Scientist & AI Engineer Portfolio',
  description: 'Portfolio of Shinu Rathod, a Data Scientist and AI Engineer specializing in Machine Learning, Deep Learning, NLP, Python, TensorFlow, LangChain, and LLMs, seeking opportunities at top MNCs.',
  keywords: 'Data Scientist, AI Engineer, Machine Learning, Deep Learning, Python, TensorFlow, LangChain, LLMs, Flask, Power BI, NLP, Shinu Rathod, Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
