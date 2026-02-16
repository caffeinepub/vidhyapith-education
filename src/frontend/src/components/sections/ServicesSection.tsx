import { BookOpen, Users, FileCheck, Lightbulb, Award, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export function ServicesSection() {
  const services = [
    {
      icon: BookOpen,
      title: 'Academic Counseling',
      description: 'Personalized guidance to help you choose the right program and institution that aligns with your career goals.',
      levels: ['Graduation', 'Postgraduate', 'PhD']
    },
    {
      icon: FileCheck,
      title: 'Admission Support',
      description: 'Complete assistance with application processes, documentation, and meeting admission requirements.',
      levels: ['Graduation', 'Postgraduate', 'PhD']
    },
    {
      icon: Users,
      title: 'Career Planning',
      description: 'Strategic career counseling to map your academic journey with future professional opportunities.',
      levels: ['Graduation', 'Postgraduate', 'PhD']
    },
    {
      icon: Lightbulb,
      title: 'Research Guidance',
      description: 'Expert support for research proposals, methodology, and finding the right supervisor for your doctoral work.',
      levels: ['Postgraduate', 'PhD']
    },
    {
      icon: Award,
      title: 'Scholarship Assistance',
      description: 'Help identifying and applying for scholarships, grants, and financial aid opportunities.',
      levels: ['Graduation', 'Postgraduate', 'PhD']
    },
    {
      icon: TrendingUp,
      title: 'Profile Building',
      description: 'Guidance on building a strong academic profile through projects, publications, and extracurricular activities.',
      levels: ['Graduation', 'Postgraduate', 'PhD']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Comprehensive Services for Every Stage
          </h2>
          <p className="text-lg text-muted-foreground">
            From Graduation to PhD, we provide end-to-end support tailored to your academic level and aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.levels.map((level) => (
                      <span
                        key={level}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All services are available for <strong className="text-foreground">Graduation, Postgraduate, and PhD</strong> levels
          </p>
        </div>
      </div>
    </section>
  );
}
