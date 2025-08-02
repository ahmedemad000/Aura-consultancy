import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do we ensure project quality?",
      answer: "We implement rigorous quality control processes, including regular inspections, compliance with industry standards, and use of premium materials to ensure every project meets our high standards."
    },
    {
      question: "What types of construction projects do you handle?",
      answer: "We specialize in residential, commercial, and industrial construction projects, including new builds, renovations, and infrastructure development, tailored to client needs."
    },
    {
      question: "How can I get a project quote?",
      answer: "Contact us through our website or email at support@constructionco.com to schedule a consultation. We'll assess your project requirements and provide a detailed quote."
    },
    {
      question: "What is your approach to sustainability?",
      answer: "We prioritize eco-friendly materials, energy-efficient designs, and sustainable construction practices to minimize environmental impact and enhance project longevity."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const answerAnim = {
    open: {
      opacity: 1,
      maxHeight: "300px", // Sufficiently large max-height to accommodate all answers
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.4 // Reduced duration for smoother opening
      }
    },
    closed: {
      opacity: 0,
      maxHeight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.3 // Slightly faster close to reduce glitch
      }
    }
  };

  return (
    <div className="relative bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-red-900 to-red-800">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1260')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 tracking-tight font-sans drop-shadow-lg">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-md">
            Find answers to common questions about our construction services and processes.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none transition-colors duration-300"
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white pr-4 tracking-wide font-sans drop-shadow-md">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                    color: activeIndex === index ? '#818cf8' : '#d1d5db'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex-shrink-0"
                >
                  {activeIndex === index ? (
                    <FiMinus className="h-6 w-6" />
                  ) : (
                    <FiPlus className="h-6 w-6" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    variants={answerAnim}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="px-6 overflow-hidden"
                  >
                    <div className="pb-4 text-gray-300 text-base sm:text-lg leading-relaxed font-light tracking-wide border-t border-gray-700 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg sm:text-xl text-gray-100 font-light tracking-wide">
            Didn't find your answer?{' '}
            <a
              href="/contact"
              className="text-white-400 underline hover:text-indigo-300 font-semibold transition-colors duration-300"
            >
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;