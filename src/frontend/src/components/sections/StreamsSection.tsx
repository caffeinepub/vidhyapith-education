import { Microscope, Calculator, Palette, Globe, Briefcase, Code, Heart, Scale } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function StreamsSection() {
  const streams = [
    {
      icon: Microscope,
      title: 'Science & Technology',
      examples: 'Physics, Chemistry, Biology, Biotechnology, Environmental Science'
    },
    {
      icon: Calculator,
      title: 'Engineering',
      examples: 'Computer Science, Mechanical, Electrical, Civil, Chemical Engineering'
    },
    {
      icon: Code,
      title: 'Information Technology',
      examples: 'Software Engineering, Data Science, AI/ML, Cybersecurity, Cloud Computing'
    },
    {
      icon: Briefcase,
      title: 'Business & Management',
      examples: 'MBA, Finance, Marketing, Human Resources, Operations Management'
    },
    {
      icon: Palette,
      title: 'Arts & Humanities',
      examples: 'Literature, History, Philosophy, Fine Arts, Languages, Sociology'
    },
    {
      icon: Globe,
      title: 'Social Sciences',
      examples: 'Psychology, Economics, Political Science, Anthropology, Geography'
    },
    {
      icon: Heart,
      title: 'Medical & Health Sciences',
      examples: 'Medicine, Nursing, Pharmacy, Public Health, Physiotherapy'
    },
    {
      icon: Scale,
      title: 'Law & Legal Studies',
      examples: 'Corporate Law, Criminal Law, International Law, Intellectual Property'
    }
  ];

  return (
    <section id="streams" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 font-semibold">
            All Streams Covered
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Expert Guidance Across All Academic Disciplines
          </h2>
          <p className="text-lg text-muted-foreground">
            No matter your field of interest, we have the expertise to guide you through your academic journey. Our consultants specialize in diverse streams to provide you with tailored advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {streams.map((stream, index) => {
            const Icon = stream.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-lg mb-2">{stream.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {stream.examples}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
            Don't See Your Stream?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We cover many more specialized fields and interdisciplinary programs. Get in touch with us to discuss your specific academic interests and goals.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
