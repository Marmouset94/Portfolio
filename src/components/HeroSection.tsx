import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-sm sm:max-w-md md:max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 break-words"
        >
          <span className="text-white">Mohammed </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            ADEN DJAMA
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 font-bold"
        >
          Étudiant en Cybersécurité
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-md sm:text-xl text-gray-400 mb-8"
        >
          Passionné par la sécurité informatique et le développement,
          <br className="hidden sm:block" />
          à la recherche d&apos;une alternance pour approfondir mes compétences
          <br className="hidden sm:block" />
          en cybersécurité et protection des systèmes d&apos;information.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-green-500 px-6 py-3 rounded-lg text-white font-semibold shadow hover:bg-green-600 transition w-full sm:w-auto"
          >
            Me Contacter
          </a>
          <button
            onClick={scrollToNextSection}
            className="bg-gray-700 px-6 py-3 rounded-lg text-white font-semibold shadow hover:bg-gray-800 transition w-full sm:w-auto flex items-center gap-2 justify-center"
          >
            Voir mes Projets <ArrowDown size={18} />
          </button>
        </motion.div>
        <div className="flex justify-center gap-5 mt-8">
          <a
            href="mailto:adendjama075@gmail.com"
            aria-label="Mail"
            className="text-green-400 hover:text-green-600 transition"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/mohammedaden"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="text-green-400 hover:text-green-600 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/mohammedaden"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className="text-green-400 hover:text-green-600 transition"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
