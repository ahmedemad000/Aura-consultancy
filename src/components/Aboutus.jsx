import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaBalanceScale,
  FaStar,
  FaPuzzlePiece,
  FaHandshake,
  FaChartLine,
  FaTools,
} from "react-icons/fa";
import aboutbg from "../assets/aboutu1.jpg";

const AboutUs = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Hero Section */}
      <motion.section
        className="relative h-[70vh] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${aboutbg})` }} // Updated to use aboutus1.avif
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute  inset-0 bg-black/50" />
        <div className="absolute start-0 z-10 flex flex-col items-center justify-center h-full text-center px-7 sm:px-10 lg:px-22">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-lg"
          >
            About AURA Consultancy
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We are the best construction experts, delivering strategic
            engineering and project management solutions across Egypt and the
            MENA region with clarity, control, and confidence.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-6">
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 bg-[#C42126] text-white rounded-md hover:bg-red-900 transition-colors duration-300"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-16 bg-black text-gray-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
          >
            Our Expertise
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              variants={hoverVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <FaTools className="text-3xl text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Construction Engineering
              </h3>
              <p className="text-gray-600">
                Providing innovative engineering solutions from design to
                execution, ensuring structural integrity and efficiency.
              </p>
            </motion.div>
            <motion.div
              variants={hoverVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <FaChartLine className="text-3xl text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Project Management</h3>
              <p className="text-gray-600">
                Overseeing projects from early planning to final handover,
                minimizing risks and maximizing value.
              </p>
            </motion.div>
            <motion.div
              variants={hoverVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <FaPuzzlePiece className="text-3xl text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Consultancy Services
              </h3>
              <p className="text-gray-600">
                Offering expert advice on cost consultancy, claims management,
                and dispute resolution across the region.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Content Section */}
      <motion.section
        className="py-16 bg-gray-100"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={itemVariants}
            className="bg-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
              alt="Construction Planning"
              className="w-full h-64 object-cover"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="lg:pl-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Leading the Way in Building and Civil Construction
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              AURA Consultancy is at the forefront of the construction industry,
              driven by a leadership team with over 30 years of combined
              experience. We specialize in transforming complex projects into
              successful outcomes, supported by advanced degrees in construction
              law and project management from Hussein Rasmy and Noha Hassan.
            </p>
            <ul className="text-gray-600 text-sm sm:text-base space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span> Expert project
                planning and execution
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span> Cost-effective
                and sustainable solutions
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span> Comprehensive
                risk management strategies
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span> Client-focused
                collaboration and support
              </li>
            </ul>
            <motion.div variants={itemVariants} className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Founders Section */}
      <motion.section
        className="py-16 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Our Founders
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              variants={hoverVariants}
              whileHover="hover"
              className="bg-gray-50 p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                Hussein Rasmy
              </h3>
              <p className="text-gray-600 text-sm uppercase tracking-wider mb-4 text-center">
                Co-Founder & CEO
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Hussein Rasmy holds a Master’s degree in Construction Law from
                the University of London. With over 15 years of leadership
                experience, he has spearheaded transformative projects across
                the MENA region, driving strategic innovation and setting
                industry benchmarks. His expertise ensures AURA delivers
                unparalleled clarity and control.
              </p>
            </motion.div>
            <motion.div
              variants={hoverVariants}
              whileHover="hover"
              className="bg-gray-50 p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                Noha Hassan
              </h3>
              <p className="text-gray-600 text-sm uppercase tracking-wider mb-4 text-center">
                Co-Founder & COO
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Noha Hassan brings a degree in Project Management from Cairo
                University, complemented by 18 years of technical excellence.
                Her leadership in major construction projects across Egypt and
                the MENA region ensures AURA’s commitment to quality, client
                satisfaction, and sustainable outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
     <motion.section
  className="py-16 bg-gray-100"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2
      variants={itemVariants}
      className="text-3xl sm:text-4xl font-bold text-center mb-12"
    >
      Our Core Values
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <motion.div
        variants={hoverVariants}
        whileHover="hover"
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
      >
        <FaBalanceScale className="text-3xl text-yellow-500 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Integrity & Fairness</h3>
        <p className="text-gray-600">Acting with honesty and ethical responsibility in all engagements.</p>
      </motion.div>
      <motion.div
        variants={hoverVariants}
        whileHover="hover"
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
      >
        <FaStar className="text-3xl text-yellow-500 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Excellence & Expertise</h3>
        <p className="text-gray-600">Upholding high standards through continuous learning and knowledge.</p>
      </motion.div>
      <motion.div
        variants={hoverVariants}
        whileHover="hover"
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
      >
        <FaPuzzlePiece className="text-3xl text-yellow-500 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Proactive Problem Solving</h3>
        <p className="text-gray-600">Anticipating challenges and delivering timely, smart solutions.</p>
      </motion.div>
      <motion.div
        variants={hoverVariants}
        whileHover="hover"
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
      >
        <FaHandshake className="text-3xl text-yellow-500 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Client Partnership</h3>
        <p className="text-gray-600">Fostering collaborative relationships for shared success.</p>
      </motion.div>
      <motion.div
        variants={hoverVariants}
        whileHover="hover"
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
      >
        <FaChartLine className="text-3xl text-yellow-500 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Value Creation</h3>
        <p className="text-gray-600">Delivering measurable impact and long-term value to clients.</p>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        className="py-16 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
          >
            Mission & Vision
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Mission
              </h3>
              <p className="text-gray-700">
                To provide efficient, reliable project management solutions
                across Egypt and the MENA region, specializing in cost
                consultancy, claims management, and dispute resolution with
                integrity and technical excellence.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-gray-700">
                To reshape the construction industry by proactively mitigating
                risks across contractual, financial, and planning aspects,
                empowering clients to achieve predictable, dispute-free, and
                high-value project outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Commitment Section */}
      <motion.section
        className="py-16 bg-gray-100"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
          >
            Our Commitment
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed text-center"
          >
            AURA Consultancy is defined by its unwavering commitment to clarity,
            control, and certainty. Backed by a leadership team with extensive
            experience on major projects, we combine technical prowess with
            strategic insight to navigate the complex construction landscape and
            deliver exceptional results.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
