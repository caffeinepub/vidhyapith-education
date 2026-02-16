import { Target, Users, Award, TrendingUp } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Personalized Approach',
      description: 'Every student is unique. We tailor our guidance to your individual goals, strengths, and aspirations.'
    },
    {
      icon: Users,
      title: 'Expert Counselors',
      description: 'Our team comprises experienced education consultants with deep knowledge across all academic streams.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'We have successfully guided countless students through their academic journeys from graduation to PhD.'
    },
    {
      icon: TrendingUp,
      title: 'End-to-End Support',
      description: 'From initial counseling to final admission, we are with you at every step of your educational journey.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              About Vidhyapith Education
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Vidhyapith Education is a premier education consultancy dedicated to empowering students at every stage of their academic journey. Whether you're starting your undergraduate degree, pursuing postgraduate studies, or embarking on doctoral research, we provide the guidance and support you need to succeed.
              </p>
              <p>
                Our comprehensive approach covers all academic streams—from Science and Engineering to Arts, Business, and beyond. We understand that choosing the right educational path is one of the most important decisions you'll make, and we're here to make that journey smoother and more successful.
              </p>
              <p>
                With personalized counseling, admission support, career planning, and research guidance, we help you navigate the complex landscape of higher education. Our goal is simple: to see you achieve your academic dreams and build a foundation for a successful career.
              </p>
            </div>
          </div>

          {/* Right Column - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
