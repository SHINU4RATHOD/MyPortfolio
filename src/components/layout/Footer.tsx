
import { professionalName, socialLinks } from "@/config/portfolio";
import Link from "next/link";

export default function Footer() {
  const currentYear = 2025; // As requested in prompt
  const githubLink = socialLinks.find(link => link.name === 'GitHub');
  const linkedinLink = socialLinks.find(link => link.name === 'LinkedIn');

  return (
    <footer className="bg-card border-t border-border/50 py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          &copy; {currentYear} {professionalName}. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          {linkedinLink && (
            <Link href={linkedinLink.url} target="_blank" rel="noopener noreferrer" aria-label={linkedinLink.ariaLabel}>
              <linkedinLink.icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" suppressHydrationWarning />
            </Link>
          )}
          {githubLink && (
            <Link href={githubLink.url} target="_blank" rel="noopener noreferrer" aria-label={githubLink.ariaLabel}>
              <githubLink.icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" suppressHydrationWarning />
            </Link>
          )}
        </div>
        <p className="text-xs mt-4">
          Built with Next.js, Tailwind CSS, and ShadCN UI.
        </p>
      </div>
    </footer>
  );
}
