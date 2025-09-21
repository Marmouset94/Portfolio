import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'adendjama075@gmail.com',
      link: 'mailto:adendjama075@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Téléphone',
      value: '06 66 77 02 58',
      link: 'tel:+33666770258',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localisation',
      value: '75017 Paris',
      link: null,
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Me <span className="text-green-400">Contacter</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vous cherchez un alternant motivé en cybersécurité ? N'hésitez pas à me contacter pour discuter d&apos;une opportunité de collaboration.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, idx) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                boxShadow: [
                  "0 0 0px rgba(34, 197, 94, 0)",
                  "0 0 8px rgba(34, 197, 94, 0.1)",
                  "0 0 0px rgba(34, 197, 94, 0)"
                ]
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + idx * 0.2,
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.5
                }
              }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.15)",
                borderColor: "rgba(34, 197, 94, 0.4)"
              }}
              className="bg-gray-900/60 rounded-xl p-6 flex flex-col items-center text-center w-full border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
            >
              <motion.div 
                className="mb-4 text-green-400"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.8
                }}
              >
                {info.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-green-400 hover:underline break-words"
                >
                  {info.value}
                </a>
              ) : (
                <span className="text-gray-300 break-words">{info.value}</span>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            borderColor: [
              "rgba(34, 197, 94, 0.4)",
              "rgba(34, 197, 94, 0.6)", 
              "rgba(34, 197, 94, 0.4)"
            ]
          } : {}}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            borderColor: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{
            scale: 1.02,
            borderColor: "rgba(34, 197, 94, 0.8)"
          }}
          className="px-4 py-8 rounded-xl border border-green-400/40 w-full max-w-xs sm:max-w-md mx-auto text-center transition-all duration-300"
        >
          <p className="text-lg text-white mb-5 break-words whitespace-normal">
            <span className="font-semibold text-green-500">🟢 Statut :</span> Disponible pour un contrat d&apos;alternance
          </p>
          <p className="text-gray-300 mb-5 break-words whitespace-normal">
            <span className="font-semibold text-green-500">📅 Début souhaité :</span> Septembre 2025
          </p>
          <p className="text-gray-300 break-words whitespace-normal">
            <span className="font-semibold text-green-500">⏰ Rythme :</span> 3 semaines entreprise / 3 semaines école
          </p>
        </motion.div>
      </div>
    </section>
  )
}
