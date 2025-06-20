import { motion } from 'framer-motion';
import { FiCheck, FiTool, FiMapPin, FiArrowRight, FiFileText, FiCalendar, FiDollarSign, FiShield } from 'react-icons/fi';

const Services = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const hover = {
    scale: 1.03,
    boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
    transition: { duration: 0.3, ease: 'easeOut' }
  };

  const services = [
    {
      icon: <FiFileText className="h-8 w-8 text-indigo-400 drop-shadow-md" />,
      title: 'Contract Management',
      description: 'End-to-end contract oversight including review, negotiation, variation management, and claims—ensuring alignment with project objectives and contractual obligations.'
    },
    {
      icon: <FiCalendar className="h-8 w-8 text-indigo-400 drop-shadow-md" />,
      title: 'Planning Management',
      description: 'Schedule development from tender to completion, including revised baselines, reporting tools, and forensic delay analysis for EOT and compensation claims.'
    },
    {
      icon: <FiDollarSign className="h-8 w-8 text-indigo-400 drop-shadow-md" />,
      title: 'Cost Management',
      description: 'Tender estimation, budgeting, cost control, and financial reporting that ensure projects stay on track and within approved budgets.'
    },
    {
      icon: <FiShield className="h-8 w-8 text-indigo-400 drop-shadow-md" />,
      title: 'Claims Management & Dispute Avoidance',
      description: 'Preparation and support for claims, expert opinions, ADR facilitation, and settlement strategies—focused on protecting client interests and reducing risk.'
    }
  ];

  return (
    <div className="relative bg-gray-900">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative bg-gradient-to-b from-red-900 to-red-900 py-24 sm:py-32"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1260')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative">
          <motion.div variants={item} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 drop-shadow-lg font-sans leading-tight">
              Services
            </h1>
            <motion.p
              variants={item}
              className="mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-100 max-w-3xl mx-auto font-light tracking-wide drop-shadow-md"
            >
              AURA Consultancy offers a full suite of specialized services across the entire project lifecycle—ensuring every phase is delivered with structure, strategy, and confidence.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex justify-center gap-4 sm:gap-6 flex-wrap">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-red-800 px-8 py-4 text-lg sm:text-xl font-semibold text-white shadow-lg hover:from-indigo-500 hover:to-indigo-700 transition-all duration-300 tracking-wide font-sans"
                aria-label="Get started with our services"
              >
                Get Started <FiArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 rounded-full bg-white/10 px-8 py-4 text-lg sm:text-xl font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all duration-300 border border-white/20 tracking-wide font-sans"
                aria-label="Contact our team"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="container mx-auto px-4 sm:px-6 lg:px-10 py-20 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 drop-shadow-lg font-sans leading-tight">
            Our Services
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto font-light tracking-wide">
            Delivering specialized solutions with precision and expertise across every project phase.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={hover}
              className="relative bg-gray-800/50 p-6 rounded-3xl border border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 tracking-wide font-sans drop-shadow-md">
                {service.title}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light tracking-wide mb-6">
                {service.description}
              </p>
              <motion.a
                href="/contact"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold transition-colors duration-300 text-base tracking-wide"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More <FiArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="bg-gradient-to-r from-red-800 to-red-900 py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 drop-shadow-lg font-sans leading-tight"
          >
            Let’s Discuss Your Project
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-100 max-w-3xl mx-auto font-light tracking-wide drop-shadow-md"
          >
            Partner with AURA Consultancy to deliver your project with clarity, control, and confidence.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-10 flex justify-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(249, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 rounded-full bg-gradient-to-r from-red-500 to-red-800 px-8 py-4 text-lg sm:text-xl font-semibold text-white shadow-lg hover:from-red-500 hover:to-red-700 transition-all duration-300 tracking-wide font-sans"
              aria-label="Get started with your project"
            >
              Get Started <FiArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;