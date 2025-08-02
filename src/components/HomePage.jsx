import { lazy, Suspense, useRef, memo, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiEye,
  FiCheckCircle,
  FiTarget,
  FiPhone,
  FiGlobe,
} from "react-icons/fi";
import heroBg from "../assets/Hero1.jpeg";
import { services } from "../data/services";

// Lazy load the Blog component
const Blog = lazy(() => import("./Blog"));

const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Optimized spring config for smoother parallax
  const backgroundY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
    {
      stiffness: 100,
      damping: 30,
      mass: 0.5,
    }
  );

  // Animation variants with optimized transitions
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 }
    },
    hover: { 
      y: -5,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.08)",
      transition: { duration: 0.2 }
    },
  };

  const buttonVariants = {
    hover: { scale: 1.03, transition: { duration: 0.2 } },
    tap: { scale: 0.97 }
  };

  const Services = memo(() => {
    const [filter, setFilter] = useState('all');

    const categories = [
      { id: 'all', label: 'All Services' },
      { id: 'contract', label: 'Contract' },
      { id: 'planning', label: 'Planning' },
    ];

    const filteredServices = useMemo(() => {
      return filter === 'all' 
        ? services 
        : services.filter(service => 
            filter === 'contract'
              ? ['Contract Management', 'Cost Management', 'Claims Management & Dispute Avoidance'].includes(service.title)
              : ['Planning Management'].includes(service.title)
        );
    }, [filter]);

    return (
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="py-16 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <motion.span
              className="inline-block px-4 py-1 text-xs font-semibold tracking-wider text-[#C42126] uppercase bg-[#C42126]/10 rounded-full mb-4"
            >
              Expert Services
            </motion.span>
            <motion.h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Strategic <span className="text-[#C42126]">Construction</span> Solutions
            </motion.h2>
            <motion.p className="text-base text-gray-600 max-w-xl mx-auto">
              Comprehensive solutions tailored for complex construction projects
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-1.5 rounded-lg text-xs ${
                  filter === category.id
                    ? 'bg-[#C42126] text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredServices.map((service) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C42126] to-[#A31C21] flex items-center justify-center text-white">
                    {service.title.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-3 mt-1">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700 text-xs">
                      <FiCheck className="h-4 w-4 text-[#C42126] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-[#C42126] to-[#A31C21] text-white text-xs hover:from-[#A31C21] hover:to-[#8B171C]"
                >
                  Get Quotation <FiArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  });

  return (
    <div className="relative overflow-hidden" ref={ref}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh]">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: backgroundY,
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 min-h-[90vh] flex flex-col justify-center">
          <div className="container mx-auto px-4 sm:px-6 py-16 ">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="max-w-xl ml-auto mr-0 text-center font-['Poppins'] text-white"
            >
              <motion.h1
                variants={item}
                className="text-3xl sm:text-4xl lg:text-7xl text-white"
              >
                AURA <br />
                CONSULTANCY
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-3 lg:text-3xl text-lg sm:text-xl text-white max-w-2xl mx-auto"
              >
                Clarity. Control. Certainty.
              </motion.p>

              <motion.p
                variants={item}
                className="mt-4  lg:text-lg sm:text-base leading-relaxed text-white max-w-2xl mx-auto"
              >
                Headquartered in Cairo, AURA Consultancy delivers strategic
                engineering and project management solutions to the construction
                industry across the MENA region.
              </motion.p>

              <motion.div variants={item} className="mt-8 flex justify-center">
                <motion.a
                  href="/contact"
                  variants={buttonVariants}
                  className="flex items-center gap-2 bg-[#C42126] px-6 py-3 text-sm font-semibold text-white"
                >
                  Explore our services <FiArrowRight className="h-4 w-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Services />

      {/* Why Choose AURA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-16"
      >
        <div className="absolute inset-0 bg-gray-900/90"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-8">
            Why Choose AURA Consultancy
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              {
                icon: <FiEye className="h-6 w-6 text-red-600" />,
                title: "Clarity",
                description: "Clear, transparent communication at every step.",
              },
              {
                icon: <FiCheckCircle className="h-6 w-6 text-red-600" />,
                title: "Control",
                description: "Precise project management and oversight.",
              },
              {
                icon: <FiTarget className="h-6 w-6 text-red-600" />,
                title: "Certainty",
                description: "Quality outcomes on schedule and budget.",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="bg-gray-800/80 p-4 rounded-lg"
              >
                <div className="mb-3 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Lazy-loaded Blog Section */}
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading blog...</div>}>
        <Blog />
      </Suspense>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Build Your Future with Us
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Partner with our expert team to create innovative construction projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-[#C42126] px-5 py-2.5 rounded-full text-sm font-semibold text-white"
            >
              Get in Touch <FiPhone className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 border border-gray-300 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700"
            >
              About Us <FiGlobe className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;