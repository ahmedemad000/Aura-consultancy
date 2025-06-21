import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiAward,
  FiUsers,
  FiTool,
  FiMapPin,
  FiPhone,
  FiGlobe,
} from "react-icons/fi";
import { IoLeaf } from "react-icons/io5";
import { FaHardHat } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/Hero1.jpeg";

const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for background
  const backgroundY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
    {
      stiffness: 0,
      damping: 30,
      restDelta: 0.001,
    }
  );

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const hover = {
    scale: 1.03,
    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  };

  return (
    <div className="relative overflow-hidden" ref={ref}>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: backgroundY,
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0  opacity-0" />
        </motion.div>

        <div className="relative z-10 min-h-screen flex flex-col justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-24 sm:py-32 lg:py-48">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="max-w-5xl mx-auto absolute end-0 top-3/6 transform -translate-y-1/2 text-center p-20"
            >
              <motion.h1
                variants={item}
                className="text-4xl sm:text-5xl lg:text-6xl  text-black  font-[poppins]  "
              >
                AURA <br />
                CONSULTANCY
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-4 text-xl sm:text-2xl lg:text-3xl text-black max-w-3xl mx-auto tracking-wide drop-shadow-md font-[poppins]"
              >
                Clarity. Control. Certainty.
              </motion.p>

              <motion.p
                variants={item}
                className="mt-6 text-lg sm:text-xl lg:text-xl leading-relaxed text-black max-w-3xl mx-auto font-light tracking-wide drop-shadow-md font-[poppins] text-justify"
                style={{ textAlign: "justify" }} // Optional inline style for emphasis
              >
                Headquartered in Cairo, AURA Consultancy delivers strategic
                engineering and project management solutions to the construction
                industry across Egypt and the MENA region. From early planning
                to final handover, we support clients in managing complexity,
                minimizing risks, and achieving successful outcomes with clarity
                and confidence.
              </motion.p>

              <motion.div variants={item} className="mt-10 flex justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(255, 0, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3  bg-[#C42126] px-8 py-4 text-lg sm:text-xl font-semibold text-white shadow-lg hover:from-indigo-500 hover:to-indigo-700 transition-all duration-300 tracking-wide font-sans"
                  aria-label="Explore how we can support your next project"
                >
                  Explore how we can support your next project{" "}
                  <FiArrowRight className="h-6 w-6" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="bg-black py-20 border-t border-white/10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-black-200 to-black-400 drop-shadow-lg text-center mb-16 font-sans leading-tight"
          >
            Why Partner with Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: (
                  <FiAward className="h-12 w-12 text-red-400 drop-shadow-md" />
                ),
                title: "Award-Winning Excellence",
                description:
                  "Our projects are celebrated for innovation, sustainability, and unmatched craftsmanship.",
              },
              {
                icon: (
                  <FiCheck className="h-12 w-12 text-red-500 drop-shadow-md" />
                ),
                title: "Reliable Delivery",
                description:
                  "On-time completion with rigorous quality control and industry-leading safety standards.",
              },
              {
                icon: (
                  <FiUsers className="h-12 w-12 text-red-500 drop-shadow-md" />
                ),
                title: "Client-Centric Solutions",
                description:
                  "Tailored services designed to meet your unique project goals and exceed expectations.",
              },
              {
                icon: (
                  <IoLeaf className="h-12 w-12 text-red-500 drop-shadow-md" />
                ),
                title: "Sustainable Practices",
                description:
                  "Eco-friendly materials and processes to minimize environmental impact.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={hover}
                className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 tracking-wide font-sans drop-shadow-md">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light tracking-wide">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Project Showcase Teaser Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="py-20 bg-black"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 text-center mb-12 font-sans leading-tight"
          >
            Our Landmark Projects
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto text-center mb-12 leading-relaxed font-light tracking-wide"
          >
            From towering skyscrapers to sustainable communities, our portfolio
            showcases the pinnacle of construction innovation.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Downtown Office Tower",
                image:
                  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
                location: "New York, NY",
              },
              {
                title: "Sunrise Residential Complex",
                image:
                  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
                location: "San Francisco, CA",
              },
              {
                title: "Harbor Bridge Expansion",
                image:
                  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
                location: "Seattle, WA",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={hover}
                className="bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-700 backdrop-blur-sm"
              >
                <div className="relative h-48 sm:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 tracking-wide font-sans drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-indigo-400 text-base sm:text-lg font-medium tracking-wide">
                    {project.location}
                  </p>
                  <motion.div whileHover={{ x: 5 }} className="mt-4">
                    <Link
                      to="/projects"
                      className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold transition-colors duration-300"
                      aria-label={`View ${project.title} details`}
                    >
                      View Project <FiArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={item} className="mt-12 text-center">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 rounded-full bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all duration-300 border border-white/20 tracking-wide font-sans"
              aria-label="Explore all projects"
            >
              Explore All Projects <FiMapPin className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Sustainability Commitment Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="py-20 bg-black"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 mb-6 font-sans leading-tight">
                Committed to Sustainability
              </h2>
              <p className="text-lg sm:text-xl text-gray-100 mb-6 leading-relaxed font-light tracking-wide">
                We prioritize eco-friendly practices, using sustainable
                materials and energy-efficient technologies to reduce our
                environmental footprint while delivering exceptional projects.
              </p>
              <ul className="space-y-4">
                {[
                  "LEED-certified construction processes",
                  "Zero-waste material management",
                  "Renewable energy integration",
                  "Green building certifications",
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    className="flex items-center gap-3 text-gray-300 text-base sm:text-lg"
                  >
                    <FiCheck className="h-5 w-5 text-red-600" />
                    {point}
                  </motion.li>
                ))}
              </ul>
              <motion.div variants={item} className="mt-8">
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all duration-300 border border-white/20 tracking-wide font-sans"
                  aria-label="Learn about our sustainability efforts"
                >
                  Our Sustainability Mission <IoLeaf className="h-5 w-5" />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="relative h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                alt="Sustainable construction"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="py-20 bg-black"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 text-center mb-12 font-sans leading-tight"
          >
            Our Construction Services
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Commercial Construction",
                description:
                  "Building modern office spaces, retail centers, and industrial facilities with cutting-edge design and functionality.",
                image:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Residential Development",
                description:
                  "Crafting sustainable, smart homes and communities tailored to modern living standards.",
                image:
                  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Infrastructure Projects",
                description:
                  "Delivering durable bridges, roads, and utilities with precision and safety.",
                image:
                  "https://images.unsplash.com/photo-1444927714506-3fc2c6f0e9ad?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Renovation & Retrofitting",
                description:
                  "Upgrading existing structures with energy-efficient and modern solutions.",
                image:
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Sustainable Design",
                description:
                  "Integrating eco-friendly materials and technologies for green building certifications.",
                image:
                  "https://images.unsplash.com/photo-1473341304170-97111ff26ef4?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Project Management",
                description:
                  "End-to-end oversight ensuring timely delivery and budget adherence.",
                image:
                  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={hover}
                className="bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-700 backdrop-blur-sm"
              >
                <div className="relative h-48 sm:h-56">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 tracking-wide font-sans drop-shadow-md">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light tracking-wide line-clamp-2">
                    {service.description}
                  </p>
                  <motion.div whileHover={{ x: 5 }} className="mt-4">
                    <Link
                      to="/services"
                      className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold transition-colors duration-300"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More <FiArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Highlight Section */}
      {/* <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="py-20 bg-black"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 text-center mb-12 font-sans leading-tight"
          >
            Meet Our Expert Team
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto text-center mb-12 leading-relaxed font-light tracking-wide"
          >
            Our dedicated professionals bring decades of experience to deliver exceptional construction projects.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'John Doe', role: 'CEO', image: 'https://images.unsplash.com/photo-1500648762182-7e7d2a515c4b?auto=format&fit=crop&w=400&q=80' },
              { name: 'Jane Smith', role: 'Lead Engineer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
              { name: 'Alex Johnson', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80' }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={hover}
                className="bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-700 backdrop-blur-sm"
              >
                <div className="relative h-48 sm:h-56">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 tracking-wide font-sans drop-shadow-md">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg font-light tracking-wide">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={item}
            className="mt-12 text-center"
          >
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 rounded-full bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all duration-300 border border-white/20 tracking-wide font-sans"
              aria-label="Meet our full team"
            >
              Meet Our Team <FiUsers className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section> */}

      {/* Client Logos Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="py-16 bg-black"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h2
            variants={fadeIn}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-center mb-12 font-sans leading-tight"
          >
            Our Clients
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 max-w-6xl mx-auto">
            {[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn9GcQoBUTUqgyfzpnf2ecf0Di1kGjd7RsA5bcaWg&s",
              "https://media.licdn.com/dms/image/v2/D560BAQHIMgvHzfgvrw/company-logo_200_200/company-logo_200_200/0/1728956705679/pinnacleconstruction_logo?e=2147483647&v=beta&t=WlFgLqssuFgw-KB7Os_UTmGW22e2I_ITdHIsCADbbIY",
              "data:image/png;base64,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",
              "data:image/png;base64,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",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn9GcQ_PJPtA_qmsTHcbmjFAA9bg1xEZGeWIduU2w&s",
            ].map((logo, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.1 }}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="h-12 sm:h-16 object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="py-20 bg-black"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 text-center mb-12 font-sans leading-tight"
          >
            Our Impact in Numbers
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                value: "500+",
                label: "Projects Completed",
                icon: <FiTool className="h-8 w-8 text-red-600" />,
              },
              {
                value: "50+",
                label: "Industry Awards",
                icon: <FiAward className="h-8 w-8 text-red-600" />,
              },
              {
                value: "1000+",
                label: "Satisfied Clients",
                icon: <FiUsers className="h-8 w-8 text-red-600" />,
              },
              {
                value: "12+",
                label: "Years of Excellence",
                icon: <FaHardHat className="h-8 w-8 text-red-600" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={hover}
                className="bg-gray-800/50 p-6 rounded-3xl text-center border border-gray-700 backdrop-blur-sm"
              >
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <h3 className="text-3xl sm:text-4xl font-bold text-red-600 mb-2 tracking-tight font-sans drop-shadow-md">
                  {stat.value}
                </h3>
                <p className="text-gray-300 text-base sm:text-lg font-light tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="py-24 bg-black"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white bg-clip-text bg-gradient-to-r from-indigo-200 to-white mb-6 font-sans leading-tight"
          >
            Build Your Future with Us
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto font-light mb-6 leading-relaxed font-semibold tracking-wide drop-shadow-md"
          >
            Partner with our expert team to create innovative, sustainable, and
            high-quality construction projects that stand the test of time.
            Let’s bring your vision to life.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 items-center"
          >
            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:from-indigo-600 hover:to-indigo-800"
              aria-label="Contact us to start your project"
            >
              Get in Touch <FiPhone className="h-5 w-5" />
            </motion.a>

            <motion.a
              href="/about"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
              className="flex items-center gap-2 rounded-full border border-indigo-400/50 px-6 py-3 text-base font-semibold text-indigo-100 shadow-sm hover:bg-indigo-600/30"
              aria-label="Learn more about our services"
            >
              About Us <FiGlobe className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
