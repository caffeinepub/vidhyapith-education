import { ArrowRight, GraduationCap, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function HomeHero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-36 md:pb-32 lg:pt-40 lg:pb-36 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/vidhyapith-education-hero.dim_1600x900.png"
          alt="Students pursuing higher education"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/97 via-background/90 to-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/15 text-primary px-5 py-2.5 rounded-full mb-8 animate-fade-in border border-primary/20 shadow-soft">
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm font-semibold tracking-wide">Expert Education Consultancy</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-foreground mb-6 leading-[1.1] animate-fade-in tracking-tight">
            Your Journey from{' '}
            <span className="text-primary block sm:inline mt-2 sm:mt-0">Graduation to PhD</span>
          </h1>

          {/* Supporting Copy with Course Modes */}
          <div className="space-y-5 mb-10 animate-fade-in">
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed font-medium">
              Comprehensive guidance for students at every stage of their academic journey.
            </p>
            
            <div className="flex flex-wrap gap-3 items-center">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Open & Distance Learning
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Online Courses
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-semibold flex items-center gap-2 bg-background/50">
                <MapPin className="h-4 w-4" />
                Across Chhattisgarh
              </Badge>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              From undergraduate programs to doctoral research, we help you navigate your path to success across all academic streams with flexible learning options tailored to your needs.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg font-semibold shadow-lg hover:shadow-xl transition-all px-8 py-6"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="text-lg font-semibold px-8 py-6 border-2 hover:bg-accent/50"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5] pointer-events-none" />
    </section>
  );
}
