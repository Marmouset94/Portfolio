import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      id: 1,
      title: "CTF: Desamorcage d'une bombe binaire",
      description: "désamorcer un programme binaire malveillant en six phases sans accès au code source en analysant le code assembleur du programme à l'aide d'outils tels que GDB et objdump pour identifier les chaînes attendues à chaque phase, tout en évitant les explosions qui pénalisent le score final.",
      image: "https://media.licdn.com/dms/image/v2/D5612AQERxRIJlh9HNA/article-cover_image-shrink_720_1280/B56ZaEvI_GGUAI-/0/1745983672716?e=2147483647&v=beta&t=4nB2IBiqe8qE-oAKGuluGNiD3WEJN_u_a19Jv-Sl-Ec",
      technologies: ["C", "Code Assembleur", "GBD"],
      githubLink: "https://gitlab.com/aden75000/bomblab",
      liveLink: null
    },
    {
      id: 2,
      title: "FS Shell",
      description: "Développer en C un interpréteur de commandes Unix complet simulant un système de fichiers virtuel, intégrant parsing avancé, gestion des boucles for et conditions if, traitement des redirections, gestion des signaux, et maintien de l’état du shell via des structures dédiées.",
      image: "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2022/02/linux-terminal-directory.jpg",
      technologies: ["C", "Makefile", "UML"],
      githubLink: "https://gitlab.com/aden75000/fs-shell",
      liveLink: null
    },
    {
      id: 3,
      title: "Base de Données CineNet",
      description: "Concevoir et implémenter une base de données PostgreSQL pour CineNet, un réseau social et forum dédié aux cinéphiles, intégrant gestion des utilisateurs, films, événements, discussions, et un système avancé de recommandations personnalisées selon le profil des utilisateurs.",
      image: "https://i.pinimg.com/736x/8c/df/4e/8cdf4ef83b1fdf8dddb43f8a53aa4bb2.jpg",
      technologies: ["SQL","PostgreSQL","Python"],
      githubLink: "https://gitlab.com/aden75000/doodle-jump",
      liveLink: null
    }
  ];

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mes <span className="text-green-400">Projets</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez mes réalisations en cybersécurité et développement, 
            démontrant mes compétences techniques et ma passion pour la sécurité informatique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-green-400/20 hover:border-green-400/40 transition-all duration-300 group flex flex-col min-h-[350px] md:min-h-[450px] lg:min-h-[520px]"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm border border-green-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-auto">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </motion.a>

                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Démo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://gitlab.com/aden75000"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-green-400 hover:text-black"
          >
            Voir plus de projets sur Github
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
