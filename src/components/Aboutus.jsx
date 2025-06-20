import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBalanceScale, FaStar, FaPuzzlePiece, FaHandshake, FaChartLine, FaRocket } from 'react-icons/fa';

const values = [
  {
    id: 1,
    title: "Integrity & Fairness",
    description: "Acting with honesty, transparency, and ethical responsibility in every engagement.",
    icon: <FaBalanceScale />,
  },
  {
    id: 2,
    title: "Excellence & Expertise",
    description: "Maintaining high standards through continuous learning and deep industry knowledge.",
    icon: <FaStar />,
  },
  {
    id: 3,
    title: "Proactive Problem Solving",
    description: "Anticipating challenges early and implementing smart, timely solutions.",
    icon: <FaPuzzlePiece />,
  },
  {
    id: 4,
    title: "Client Partnership",
    description: "Building strong, collaborative relationships to meet client needs and achieve shared success.",
    icon: <FaHandshake />,
  },
  {
    id: 5,
    title: "Value Creation",
    description: "Delivering measurable impact and long-term value through every service we provide.",
    icon: <FaChartLine />,
  },
];

const AboutUs = () => {
  const [activeValue, setActiveValue] = useState(null);

  const toggleValue = (id) => {
    setActiveValue(activeValue === id ? null : id);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.03,
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-red-900 to-red-800">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1260')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 tracking-tight font-sans drop-shadow-lg"
            variants={itemVariants}
          >
            About Us
          </motion.h1>
          <motion.h2
            className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans drop-shadow-md"
            variants={itemVariants}
          >
            Who We Are
          </motion.h2>
          <motion.p
            className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-md"
            variants={itemVariants}
          >
            AURA Consultancy, based in Cairo, was founded by Hussein Rasmy and Noha Hassan. Both co-founders hold advanced degrees in construction law and project management, and together bring decades of leadership, strategic insight, and technical excellence to the firm.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#mission"
              className="inline-flex items-center px-8 py-3 mt-8 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
            >
              Discover Our Mission <FaRocket className="ml-3 h-5 w-5" />
            </a>
          </motion.div>
        </motion.section>

        {/* Founders Highlight Section */}
        <motion.section
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 tracking-tight font-sans drop-shadow-md"
            variants={itemVariants}
          >
            Our Founders
          </motion.h2>
          <motion.div
            className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700 backdrop-blur-sm"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 tracking-wide font-sans drop-shadow-md">
                  Hussein Rasmy
                </h3>
                <p className="text-gray-300 text-base sm:text-lg font-light tracking-wide">
                  Co-Founder
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 tracking-wide font-sans drop-shadow-md">
                  Noha Hassan
                </h3>
                <p className="text-gray-300 text-base sm:text-lg font-light tracking-wide">
                  Co-Founder
                </p>
              </div>
            </div>
            <p className="text-gray-100 text-lg sm:text-xl leading-relaxed font-light tracking-wide text-center mb-6">
              With advanced degrees in construction law and project management, Hussein Rasouli and Noha Hassan bring decades of leadership, strategic insight, and technical excellence. Their extensive experience has driven transformation, set new standards, and reshaped complex developments across the region. At AURA, their leadership fosters clarity, control, and confidence, driving positive change in the construction sector.
            </p>
            <div className="text-center">
              <a
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
              >
                Meet Our Leadership
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Commitment Section */}
        <motion.section
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 tracking-tight font-sans drop-shadow-md"
            variants={itemVariants}
          >
            Our Commitment
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed font-light tracking-wide text-center"
            variants={itemVariants}
          >
            AURA Consultancy is defined by its unwavering commitment to clarity, control, and certainty—principles that shape every project we undertake. This philosophy ensures that outcomes are predictable, cost-effective, and closely aligned with our clients’ strategic goals.
          </motion.p>
          <motion.p
            className="mt-6 text-lg sm:text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed font-light tracking-wide text-center"
            variants={itemVariants}
          >
            Backed by a leadership team with extensive experience on major projects across Egypt and the MENA region, AURA combines technical excellence with the strategic acumen required to navigate today’s complex construction landscape and deliver meaningful results.
          </motion.p>
        </motion.section>

        {/* Core Values Section (Unchanged) */}
        <motion.section
          id="mission"
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 tracking-tight font-sans drop-shadow-md"
            variants={itemVariants}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.id}
                className="bg-gray-800/50 rounded-3xl p-8 text-center border border-gray-700 backdrop-blur-sm"
                variants={hoverVariants}
                whileHover="hover"
              >
                <div className="text-5xl text-indigo-400 mb-4 flex justify-center drop-shadow-md">
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 tracking-wide font-sans drop-shadow-md">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light tracking-wide">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission & Vision Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 tracking-tight font-sans drop-shadow-md"
            variants={itemVariants}
          >
            Mission & Vision
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700 backdrop-blur-sm"
              variants={itemVariants}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 tracking-wide font-sans drop-shadow-md">
                Mission
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light tracking-wide">
                To provide efficient, reliable, and expert project management solutions across Egypt and the MENA region. Specializing in cost consultancy, claims management, and dispute resolution, AURA Consultancy is committed to supporting clients with integrity, technical excellence, and a results-driven approach ensuring successful project delivery from initiation to completion.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700 backdrop-blur-sm"
              variants={itemVariants}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 tracking-wide font-sans drop-shadow-md">
                Vision
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light tracking-wide">
                To reshape the construction industry by proactively mitigating risks across contractual, financial, and planning aspects, empowering clients to achieve predictable, dispute-free, and high-value project outcomes.
              </p>
            </motion.div>
          </div>
          </motion.section>
          {/* <motion.div variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-white mb-6 tracking-wide font-sans drop-shadow-md">
              Our Values
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {values.map((value) => (
                <button
                  key={value.id}
                  onClick={() => toggleValue(value.id)}
                  className={`px-4 py-2 rounded-full text-white font-semibold transition-colors duration-300 ${
                    activeValue === value.id ? 'bg-indigo-600' : 'bg-gray-700 hover:bg-indigo-500'
                  }`}
                >
                  {value.title.split(' & ')[0]}
                </button>
              ))}
            </div>
            {activeValue && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gray-800/50 rounded-3xl p-6 border border-gray-700 backdrop-blur-sm text-center"
              >
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 tracking-wide font-sans drop-shadow-md">
                  {values.find((v) => v.id === activeValue).title}
                </h4>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light tracking-wide">
                  {values.find((v) => v.id === activeValue).description}
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.section> */}
      </div>
    </div>
  );
};

export default AboutUs;