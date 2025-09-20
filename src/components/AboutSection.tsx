import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
          <div className="text-lg text-gray-300 max-w-4xl mx-auto text-left space-y-4">
            <p>
              Actuellement en 3ᵉ année d'ingénieur à l'ECE Paris, je me passionne pour la cybersécurité 🔐 et les réseaux 🌐.
            </p>
            <p>
              Mon premier pas concret dans le domaine ? <span className="text-green-400 font-semibold">Un stage de 3 mois en tant que technicien support réseaux 💻</span>, où j'ai appris à résoudre des incidents réels, sécuriser des infrastructures et surtout à travailler en conditions opérationnelles.
            </p>
            <p>
              En parallèle, j'ai obtenu <span className="text-green-400 font-semibold">deux certifications Cisco</span> (<em>Introduction à la Cybersécurité</em> et <em>Ethical Hacking</em>), qui ont renforcé ma volonté de plonger encore plus loin dans l'univers de la sécurité informatique.
            </p>
            <p>
              Je développe aussi mes compétences à travers <span className="text-green-400 font-semibold">différents projets pratiques et challenges 🚀</span>, que je présente ci-dessous. Chaque projet est pour moi une occasion d'explorer, de tester et de comprendre comment protéger les systèmes face aux menaces actuelles.
            </p>
            <p>
              🎯 Mon objectif aujourd'hui : <span className="text-green-400 font-semibold">trouver une alternance en cybersécurité où je pourrai apporter mon énergie, ma curiosité et mes compétences, tout en continuant à apprendre auprès de professionnels du secteur</span>.
            </p>
          </div>
        </motion.div>


      </div>
    </section>
  );
}