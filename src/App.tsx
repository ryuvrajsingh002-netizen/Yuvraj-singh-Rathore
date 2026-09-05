import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import CollaborationCTA from './components/CollaborationCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060607] text-[#EDE7DC] selection:bg-[#851424] selection:text-[#FAF6F0] flex flex-col relative font-sans">
      {/* Top Bar */}
      <TopBar />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 2 & 3: Hero Section & Hero Visual */}
        <Hero />

        {/* Section 4: Personal Stats */}
        <Stats />

        {/* Section 5: Services / What I Do */}
        <Services />

        {/* Section 6: My Process */}
        <Process />

        {/* Section 7 & 8: Featured Projects & Technologies */}
        <Projects />

        {/* Section 9: About Me */}
        <About />

        {/* Section 10: Why Work With Me */}
        <WhyChooseUs />

        {/* Section 11: Tools & Technologies */}
        <TechStack />

        {/* Section 12: Testimonial / Client Feedback */}
        <Testimonials />

        {/* Section 13: Let's Collaborate */}
        <CollaborationCTA />

        {/* Section 14 & 15: Contact Section & Socials */}
        <Contact />
      </main>

      {/* Section 16: Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
