import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="about" ref={ref} className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            À <span className="text-green-400">Propos</span>
          </h2>
          <div className="text-lg text-gray-300 max-w-4xl mx-auto text-left space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Actuellement en 3ᵉ année d'ingénieur à l'ECE Paris, je me passionne pour la cybersécurité 🔐 et les réseaux 🌐.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Mon premier pas concret dans le domaine ? <motion.span 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-green-400 font-semibold"
              >Un stage de 3 mois en tant que technicien support réseaux 💻</motion.span>, où j'ai appris à résoudre des incidents réels, sécuriser des infrastructures et surtout à travailler en conditions opérationnelles.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              En parallèle, j'ai obtenu <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-green-400 font-semibold"
              >deux certifications Cisco</motion.span> (<em>Introduction à la Cybersécurité</em> et <em>Ethical Hacking</em>), qui ont renforcé ma volonté de plonger encore plus loin dans l'univers de la sécurité informatique.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Je développe aussi mes compétences à travers <motion.span 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-green-400 font-semibold"
              >différents projets pratiques et challenges 🚀</motion.span>, que je présente ci-dessous. Chaque projet est pour moi une occasion d'explorer, de tester et de comprendre comment protéger les systèmes face aux menaces actuelles.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="border-l-4 border-green-400 pl-6 bg-green-400/5 py-4 rounded-r-lg"
            >
              🎯 Mon objectif aujourd'hui : <motion.span 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-green-400 font-semibold"
              >trouver une alternance en cybersécurité où je pourrai apporter mon énergie, ma curiosité et mes compétences, tout en continuant à apprendre auprès de professionnels du secteur</motion.span>.
            </motion.p>
          </div>
        </motion.div>


      </div>
    </section>
  );
}