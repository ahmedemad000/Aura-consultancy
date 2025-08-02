import { useState, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCheck, FiArrowRight, FiFileText, FiCalendar, FiDollarSign, FiShield, FiUsers, FiLayers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import aboutusbg from '../assets/Aboutus bg.jpeg';
import herobg from '../assets/herobg.jpeg';
import { services } from '../data/services';

/**
 * Services component showcasing AURA Consultancy's offerings with filtering and animations
 * @returns {JSX.Element} Services page with hero, service grid, and CTA
 */
const Services = memo(() => {
  const [filter, setFilter] = useState('all');

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 15, duration: 0.8 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -8, boxShadow: '0 16px 32px rgba(0, 0, 0, 0.08)', transition: { duration: 0.3 } }
  };

  const iconVariants = {
    hover: { scale: 1.15, rotate: 8, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  };

  const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'contract', label: 'Contract' },
  { id: 'planning', label: 'Planning' }
];

const filteredServices = filter === 'all' 
  ? services 
  : services.filter(service => 
      filter === 'contract'
        ? ['Contract Management', 'Cost Management', 'Claims Management & Dispute Avoidance'].includes(service.title)
        : ['Planning Management'].includes(service.title)
    );

  return (
    <div className="relative bg-gray-50 font-['Poppins']">
      {/* Hero Section with Parallax Background */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-fixed" style={{ backgroundImage: `url(${aboutusbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <img src={aboutusbg} alt="Construction consultancy" className="w-full h-full object-cover opacity-0" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
          <div className="absolute inset-0 bg-[#C42126]/20 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-6 lg:px-10 relative z-10 text-center">
          <motion.div variants={item} className="mb-8">
            <span className="inline-block px-5 py-2 text-sm font-semibold tracking-widest text-white uppercase bg-[#C42126] rounded-full">
              Professional Consultancy
            </span>
          </motion.div>
          
          <motion.h1 variants={item} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building <span className="text-[#C42126]">Confidence</span> in Construction
          </motion.h1>
          
          <motion.p variants={item} className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
            AURA Consultancy delivers expert construction advisory services across the MENA region, combining technical excellence with strategic insight to mitigate risks and maximize project success.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, backgroundColor: '#A31C21', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-lg bg-[#C42126] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all"
              aria-label="Explore services"
            >
              Explore Services <FiArrowRight className="h-5 w-5" />
            </motion.a>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-lg bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
              aria-label="Contact experts"
            >
              Contact Experts
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-sm text-white mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-white rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Services Section */}

      <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 text-sm font-semibold tracking-wider text-[#C42126] uppercase bg-[#C42126]/10 rounded-full mb-6"
          >
            Expert Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-snug"
          >
            Strategic <span className="text-[#C42126]">Construction</span> Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive solutions tailored for complex construction projects across all phases
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                filter === category.id
                  ? 'bg-[#C42126] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              aria-pressed={filter === category.id}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              role="region"
              aria-label={`Service: ${service.title}`}
            >
              <div className="flex items-start mb-6">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C42126] to-[#A31C21] flex items-center justify-center text-white shadow-md"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <span className="text-xl font-bold">{service.title.charAt(0)}</span>
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900 ml-4 mt-2">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 text-base">{service.description}</p>
              <ul className="space-y-4 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <FiCheck className="h-5 w-5 text-[#C42126] mr-3" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#C42126] to-[#A31C21] text-white font-medium text-sm hover:from-[#A31C21] hover:to-[#8B171C] transition-all duration-300"
                aria-label={`Get quotation for ${service.title}`}
              >
                Get Quotation <FiArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C42126]/50 to-[#A31C21]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link
            to="/contact"
            className="flex items-center gap-3 rounded-full bg-[#C42126] px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Quick contact"
          >
            Quick Contact <FiArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="relative py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${herobg})` }}>
          <img src={herobg} alt="Construction project" className="w-full h-full object-cover opacity-0" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/10" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-10 relative z-10 text-center">
          <motion.div variants={item}>
            <span className="inline-block px-5 py-2 text-sm font-semibold tracking-widest text-white uppercase bg-[#C42126] rounded-full mb-4">
              Ready to Start?
            </span>
          </motion.div>
          
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your <span className="text-[#C42126]">Construction</span> Project
          </motion.h2>
          
          <motion.p variants={item} className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Partner with AURA Consultancy for expert guidance that mitigates risk and maximizes project success.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, backgroundColor: '#A31C21', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-lg bg-[#C42126] px-8 py-4 text-lg font-medium text-white shadow-lg transition-all"
              aria-label="Get expert consultation"
            >
              Get Expert Consultation <FiArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
});

export default Services;