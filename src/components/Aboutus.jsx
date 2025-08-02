import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaBalanceScale,
  FaStar,
  FaPuzzlePiece,
  FaHandshake,
  FaChartLine,
  FaTools,
  FaLightbulb,
} from "react-icons/fa";
import aboutbg from "../assets/aboutu1.jpg";
import serviceBg from "../assets/servicebg.jpeg";
import herobg from "../assets/herobg.jpeg";
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

  const buttonVariants = {
    hover: { scale: 1.03, transition: { duration: 0.2 } },
    tap: { scale: 0.98 },
  };

  // Define icons for core values
  const coreValues = [
    {
      title: "Integrity & Fairness",
      description: "Uncompromising ethical standards in all engagements",
    },
    {
      title: "Excellence & Expertise",
      description: "Relentless pursuit of quality through continuous learning",
    },
    {
      title: "Proactive Problem Solving",
      description: "Anticipating challenges with innovative solutions",
    },
    {
      title: "Client Partnership",
      description: "Collaborative relationships for mutual success",
    },
    {
      title: "Value Creation",
      description: "Delivering measurable, lasting impact for clients",
    },
    {
      title: "Innovation",
      description: "Embracing new ideas to drive better outcomes",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Hero Section */}
      <motion.section
        className="relative h-[70vh] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${aboutbg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-lg font-[poppins]"
          >
            About AURA Consultancy
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-[poppins]"
          >
            We are the best construction experts, delivering strategic
            engineering and project management solutions across Egypt and the
            MENA region with clarity, control, and confidence.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-6">
            <a
              href="#services"
              className=" font-[poppins] inline-flex items-center px-6 py-3 bg-[#C42126] text-white rounded-md hover:bg-red-900 transition-colors duration-300"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span
              className="font-[poppins] inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wider text-amber-600 uppercase bg-amber-100 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Our Core Values
            </motion.span>
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4 font-[poppins]"
              whileHover={{ scale: 1.02 }}
            >
              Core Values That <span className="text-amber-600">Drive Us</span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto font-[poppins]"
              variants={itemVariants}
            >
              The principles that guide every decision and interaction at AURA
              Consultancy
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={hoverVariants}
                whileHover="hover"
                className="text-center bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100 font-[poppins]"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
                <div className="px-6 pb-4">
                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </div>
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
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white font-[poppins]"
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
              <h3 className="text-xl font-semibold mb-2 font-[poppins]">
                Construction Engineering
              </h3>
              <p className="text-gray-600 font-[poppins]">
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
              <h3 className="text-xl font-semibold mb-2 font-[poppins]">
                Project Management
              </h3>
              <p className="text-gray-600 font-[poppins]">
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
              <h3 className="text-xl font-semibold mb-2 font-[poppins]">
                Consultancy Services
              </h3>
              <p className="text-gray-600 font-[poppins]">
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
              src={herobg}
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

      {/* Mission and Vision */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-white uppercase bg-gray-700 rounded-full">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mt-2">
              Mission & Vision
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
              Guiding principles shaping our construction leadership across
              MENA.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Column */}
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-white mb-3">
                Our Mission
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                To provide efficient and reliable project management solutions
                across Egypt and MENA, specializing in cost consultancy, claims
                management, and dispute resolution with integrity and technical
                excellence.
              </p>
            </div>

            {/* Vision Column */}
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-white mb-3">
                Our Vision
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                To reshape the construction industry by mitigating risks in
                contracts, finances, and planning, ensuring predictable and
                high-value project outcomes.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-flex items-center px-5 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <motion.section
        className="py-24 bg-white relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-5"></div>
          <div className="absolute inset-0 bg-white/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.span
              className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-widest text-red-600 uppercase bg-red-50 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Leadership
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              The <span className="text-red-600">Visionaries</span> Behind AURA
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Combining decades of expertise with innovative thinking to reshape
              the construction landscape
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Founder 1 - Hussein Rasmy */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={herobg}
                  alt="Hussein Rasmy"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-md hover:ring-4 hover:ring-red-200 transition-all duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-md">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                  Hussein Rasmy
                </h3>
                <p className="text-red-600 text-sm uppercase tracking-widest mb-3 font-semibold">
                  Co-Founder & CEO
                </p>
                <div className="h-px w-24 bg-gradient-to-r from-red-600 to-gray-900 mx-auto sm:mx-0 mb-4"></div>
                <p className="text-gray-600 mb-4 text-base sm:text-lg">
                  Master's in Construction Law (University of London) | 15+
                  years transforming MENA projects
                </p>
                <p className="text-gray-700 font-medium italic mb-6">
                  "Innovation is not just a goal; it's our blueprint for
                  progress."
                </p>
                <motion.a
                  href="/cv/hussein-rasmy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get my CV
                </motion.a>
              </div>
            </motion.div>

            {/* Founder 2 - Noha Hassan */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={herobg}
                  alt="Noha Hassan"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-md hover:ring-4 hover:ring-red-200 transition-all duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-md">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                  Noha Hassan
                </h3>
                <p className="text-red-600 text-sm uppercase tracking-widest mb-3 font-semibold">
                  Co-Founder & COO
                </p>
                <div className="h-px w-24 bg-gradient-to-r from-gray-900 to-red-600 mx-auto sm:mx-0 mb-4"></div>
                <p className="text-gray-600 mb-4 text-base sm:text-lg">
                  Project Management (Cairo University) | 19+ years delivering
                  excellence across MENA
                </p>
                <p className="text-gray-700 font-medium italic mb-6">
                  "Every project is a canvas for creativity and quality."
                </p>
                <motion.a
                  href="/Aura-consultancy/cv/noha-hassan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get my CV
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-20 pt-8 border-t border-gray-100 flex justify-center"
            variants={itemVariants}
          >
            <p className="text-sm text-gray-500 uppercase tracking-widest">
              Building the Future Since 2010
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Commitment Section */}
      <motion.section
        className="relative py-24 overflow-hidden bg-gray-600"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${serviceBg})` }}
          ></div>
          <div className="absolute inset-0 "></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-amber-500/10 border border-amber-400/30 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <svg
                className="w-5 h-5 mr-2 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <span className="text-sm font-semibold tracking-wider text-amber-300 uppercase">
                Our Commitment
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <span className="relative inline-block">
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500"></span>
                Building Excellence Through
              </span>
            </motion.h2>

            <motion.div
              className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg border-l-4 border-amber-500 max-w-4xl mx-auto shadow-xl"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-500/10 p-3 rounded-lg mr-4 border border-amber-500/20">
                  <svg
                    className="w-8 h-8 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-gray-200 leading-relaxed"
                >
                  <span className="font-bold text-white">
                    At AURA Consultancy,{" "}
                  </span>{" "}
                  our services are crafted{" "}
                  <span className="font-semibold text-amber-300">
                    to ensure the seamless execution of construction projects
                    from initial vision to final handover. <br />
                  </span>{" "}
                  {""}
                  We prioritize precision, efficiency, and client satisfaction,
                  delivering tailored solutions that respond to each project’s
                  specific demands. {""}
                  <span className="font-semibold text-white">
                    By integrating strategic planning, {""}
                    <span className="font-semibold text-amber-300">
                      robust cost management,
                    </span>{" "}
                    {""}
                    and {""}
                    <span className="font-semibold text-amber-300">
                      expert contract oversight
                    </span>{" "}
                    , we empower clients to {""}
                    <span className="font-semibold text-amber-300">
                      gain clarity,
                    </span>{" "}
                    <span className="font-semibold text-amber-300">
                      mitigate risks, {""}
                    </span>
                    and {""}
                    <span className="font-semibold text-amber-300">
                      consistently achieve high quality results {""}
                    </span>
                    throughout every phase of the development.
                  </span>{" "}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            variants={containerVariants}
          >
            {[
              {
                title: "Clarity",
                icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
                desc: "Transparent project vision and documentation",
              },
              {
                title: "Control",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                desc: "Precision management of timelines and budgets",
              },
              {
                title: "Certainty",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                desc: "Risk-mitigated project delivery",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-amber-500/30 transition-colors"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-amber-500/10 p-2 rounded-md mr-3">
                    <svg
                      className="w-6 h-6 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300 pl-11">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
