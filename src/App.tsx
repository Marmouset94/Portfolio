import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden bg-gradient-to-br from-black via-gray-900 to-black relative">
      {/* Fond avec dégradé vert néon uniforme */}
      <div className="fixed inset-0 bg-gradient-to-r from-green-400/10 via-transparent to-green-400/10 pointer-events-none"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative z-10">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="border-t border-green-400/20 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Mohammed ADEN DJAMA. Tous droits réservés. Conçu avec ❤️ pour ma recherche d'alternance en cybersécurité.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}