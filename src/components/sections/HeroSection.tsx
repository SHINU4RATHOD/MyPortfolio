
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, MapPin, FlaskConical } from 'lucide-react';
import { professionalName, professionalSummaryHero, socialLinks, profileImageUrl } from '@/config/portfolio';
import Image from 'next/image';

export default function HeroSection() {
  const resumeUrl = "https://drive.google.com/file/d/17Tb5gf3lv_Kg5nBnpMMvpNfUxwC6MOxo/view?usp=drive_link";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-background via-slate-900 to-background py-20 overflow-hidden">
      {/* Subtle animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">

          {/* Profile photo with glow ring */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-primary animate-spin" style={{animationDuration: '8s'}} />
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-background">
              <Image
                src={profileImageUrl}
                alt={`${professionalName} headshot`}
                fill
                style={{objectFit: 'cover'}}
                priority
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* IIT Ropar badge */}
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-medium">
              <FlaskConical className="h-4 w-4" suppressHydrationWarning />
              AI Researcher · IIT Ropar
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-foreground">
            Hi, I&apos;m <span className="text-primary">{professionalName}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-accent font-semibold mb-6">
            Data Scientist &amp; AI Researcher
          </p>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            {professionalSummaryHero}
          </p>
          <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground mb-10">
            <MapPin className="h-4 w-4 text-primary" suppressHydrationWarning />
            Bidar, Karnataka, India
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button asChild size="lg" className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-accent/30 transition-all border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" suppressHydrationWarning /> Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target={link.url.startsWith('mailto:') || link.url.startsWith('tel:') ? '_self' : '_blank'}
                rel={link.url.startsWith('mailto:') || link.url.startsWith('tel:') ? undefined : "noopener noreferrer"}
                aria-label={link.ariaLabel}
                className="group"
              >
                <link.icon className="h-7 w-7 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-200" suppressHydrationWarning />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-primary" suppressHydrationWarning />
        </Link>
      </div>
    </section>
  );
}
