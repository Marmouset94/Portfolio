import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { TypingAnimation } from './TypingAnimation';

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 font-bold"
        >
          <TypingAnimation 
            text="Étudiant en Cybersécurité" 
            delay={1200}
            speed={80}
          />
        </motion.div>
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
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-400 to-green-600 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25 w-full sm:w-auto"
          >
            Me Contacter
          </motion.a>
          <motion.button
            onClick={scrollToNextSection}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-green-400 hover:text-black w-full sm:w-auto flex items-center gap-2 justify-center"
          >
            Voir mes Projets <ArrowDown size={18} />
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center gap-5 mt-8"
        >
          <motion.a
            href="mailto:adendjama075@gmail.com"
            aria-label="Mail"
            whileHover={{ scale: 1.2, color: '#22c55e' }}
            className="text-gray-400 hover:text-green-400 transition-colors p-2"
          >
            <Mail size={32} />
          </motion.a>
          <motion.a
            href="https://gitlab.com/users/aden75000/projects"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            whileHover={{ scale: 1.2, color: '#22c55e' }}
            className="text-gray-400 hover:text-green-400 transition-colors p-2"
          >
            <Github size={32} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mohammed-aden-djama-alternance-cybersecurite-paris/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            whileHover={{ scale: 1.2, color: '#22c55e' }}
            className="text-gray-400 hover:text-green-400 transition-colors p-2"
          >
            <Linkedin size={32} />
          </motion.a>
        </motion.div>

        <motion.button
          onClick={scrollToNextSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ y: 5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-400 animate-bounce"
        >
          <ArrowDown size={32} />
        </motion.button>
      </div>
    </section>
  );
}
