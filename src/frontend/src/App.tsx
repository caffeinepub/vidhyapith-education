import { Header } from './components/site/Header';
import { Footer } from './components/site/Footer';
import { HomeHero } from './components/sections/HomeHero';
import { ServicesSection } from './components/sections/ServicesSection';
import { StreamsSection } from './components/sections/StreamsSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HomeHero />
        <ServicesSection />
        <StreamsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
