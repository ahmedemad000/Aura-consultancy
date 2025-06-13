import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight, FiCheck, FiAward, FiUsers, FiTool, FiMapPin, FiPhone, FiGlobe } from 'react-icons/fi';
import { IoLeaf } from 'react-icons/io5'; // Import IoLeaf from Ionicons
import { FaHardHat } from 'react-icons/fa';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  // Parallax effect for background
  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '30%']), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
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

  return (
    <div className="relative bg-gray-900 overflow-hidden" ref={ref}>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: backgroundY,
            backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-7db1a3e8e718?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1260')] bg-cover bg-center" />
        </motion.div>

        <div className="relative z-10 min-h-screen flex flex-col justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-24 sm:py-32 lg:py-48">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="max-w-5xl mx-auto text-center"
            >
              <motion.h1
                variants={item}
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 drop-shadow-lg font-sans leading-tight"
              >
                Constructing a Sustainable Future
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-100 max-w-3xl mx-auto font-light tracking-wide drop-shadow-md"
              >
                We are a leading construction firm delivering innovative, sustainable, and high-quality solutions for commercial, residential, and infrastructure projects worldwide.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6"
              >
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-800 px-8 py-4 text-lg sm:text-xl font-semibold text-white shadow-lg hover:from-indigo-500 hover:to-indigo-700 transition-all duration-300 tracking-wide font-sans"
                  aria-label="Start your construction project"
                >
                  Start Your Project <FiArrowRight className="h-6 w-6" />
                </motion.a>

                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 rounded-full bg-white/10 px-8 py-4 text-lg sm:text-xl font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all duration-300 border border-white/20 tracking-wide font-sans"
                  aria-label="View our project portfolio"
                >
                  View Projects <FiMapPin className="h-6 w-6" />
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
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 border-t border-white/10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 drop-shadow-lg text-center mb-16 font-sans leading-tight"
          >
            Why Partner with Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <FiAward className="h-12 w-12 text-indigo-400 drop-shadow-md" />,
                title: 'Award-Winning Excellence',
                description: 'Our projects are celebrated for innovation, sustainability, and unmatched craftsmanship.'
              },
              {
                icon: <FiCheck className="h-12 w-12 text-indigo-400 drop-shadow-md" />,
                title: 'Reliable Delivery',
                description: 'On-time completion with rigorous quality control and industry-leading safety standards.'
              },
              {
                icon: <FiUsers className="h-12 w-12 text-indigo-400 drop-shadow-md" />,
                title: 'Client-Centric Solutions',
                description: 'Tailored services designed to meet your unique project goals and exceed expectations.'
              },
              {
                icon: <IoLeaf className="h-12 w-12 text-indigo-400 drop-shadow-md" />,
                title: 'Sustainable Practices',
                description: 'Eco-friendly materials and processes to minimize environmental impact.'
              }
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
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="py-20 bg-gray-900"
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
            From towering skyscrapers to sustainable communities, our portfolio showcases the pinnacle of construction innovation.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: 'Downtown Office Tower',
                image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
                location: 'New York, NY'
              },
              {
                title: 'Sunrise Residential Complex',
                image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80',
                location: 'San Francisco, CA'
              },
              {
                title: 'Harbor Bridge Expansion',
                image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
                location: 'Seattle, WA'
              }
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

          <motion.div
            variants={item}
            className="mt-12 text-center"
          >
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
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 mb-6 font-sans leading-tight">
                Committed to Sustainability
              </h2>
              <p className="text-lg sm:text-xl text-gray-100 mb-6 leading-relaxed font-light tracking-wide">
                We prioritize eco-friendly practices, using sustainable materials and energy-efficient technologies to reduce our environmental footprint while delivering exceptional projects.
              </p>
              <ul className="space-y-4">
                {[
                  'LEED-certified construction processes',
                  'Zero-waste material management',
                  'Renewable energy integration',
                  'Green building certifications'
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    className="flex items-center gap-3 text-gray-300 text-base sm:text-lg"
                  >
                    <FiCheck className="h-5 w-5 text-indigo-400" />
                    {point}
                  </motion.li>
                ))}
              </ul>
              <motion.div
                variants={item}
                className="mt-8"
              >
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
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="py-20 bg-gray-900"
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
                title: 'Commercial Construction',
                description: 'Building modern office spaces, retail centers, and industrial facilities with cutting-edge design and functionality.',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
              },
              {
                title: 'Residential Development',
                description: 'Crafting sustainable, smart homes and communities tailored to modern living standards.',
                image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
              },
              {
                title: 'Infrastructure Projects',
                description: 'Delivering durable bridges, roads, and utilities with precision and safety.',
                image: 'https://images.unsplash.com/photo-1444927714506-3fc2c6f0e9ad?auto=format&fit=crop&w=1200&q=80'
              },
              {
                title: 'Renovation & Retrofitting',
                description: 'Upgrading existing structures with energy-efficient and modern solutions.',
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
              },
              {
                title: 'Sustainable Design',
                description: 'Integrating eco-friendly materials and technologies for green building certifications.',
                image: 'https://images.unsplash.com/photo-1473341304170-97111ff26ef4?auto=format&fit=crop&w=1200&q=80'
              },
              {
                title: 'Project Management',
                description: 'End-to-end oversight ensuring timely delivery and budget adherence.',
                image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80'
              }
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
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
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
      </motion.section>

      {/* Client Logos Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="py-16 bg-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h2
            variants={fadeIn}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-center mb-12 font-sans leading-tight"
          >
            Trusted by Leading Brands
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 max-w-6xl mx-auto">
            {[
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBUTUqgyfzpnf2ecf0Di1kGjd7RsA5bcaWg&s',
              'https://media.licdn.com/dms/image/v2/D560BAQHIMgvHzfgvrw/company-logo_200_200/company-logo_200_200/0/1728956705679/pinnacleconstruction_logo?e=2147483647&v=beta&t=WlFgLqssuFgw-KB7Os_UTmGW22e2I_ITdHIsCADbbIY',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaoUcRTvq5cGYOy6oNtoRwR4rnInnB_Bf4Q&s',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0avWTUabrYd-hl48Hhx_8kB7YMwKNOlm9sw&s',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_PJPtA_qmsTHcbmjFAA9bg1xEZGeWIduU2w&s'
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
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
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
              { value: '500+', label: 'Projects Completed', icon: <FiTool className="h-8 w-8 text-indigo-400" /> },
              { value: '50+', label: 'Industry Awards', icon: <FiAward className="h-8 w-8 text-indigo-400" /> },
              { value: '1000+', label: 'Satisfied Clients', icon: <FiUsers className="h-8 w-8 text-indigo-400" /> },
              { value: '12+', label: 'Years of Excellence', icon: <FaHardHat className="h-8 w-8 text-indigo-400" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={hover}
                className="bg-gray-800/50 p-6 rounded-3xl text-center border border-gray-700 backdrop-blur-sm"
              >
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <h3 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-2 tracking-tight font-sans drop-shadow-md">
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

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 text-center mb-12 font-sans leading-tight"
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                quote: 'Their team delivered our office complex ahead of schedule with impeccable quality.',
                author: 'Sarah Johnson, CEO of Horizon Enterprises',
                logo: 'https://via.placeholder.com/100x40?text=Horizon',
                project: 'Downtown Office Tower'
              },
              {
                quote: 'Their sustainable solutions transformed our residential project into a model community.',
                author: 'Michael Lee, Project Manager at GreenBuild',
                logo: 'https://via.placeholder.com/100x40?text=GreenBuild',
                project: 'Sunrise Residential Complex'
              },
              {
                quote: 'Their expertise in infrastructure projects is unmatched. A true partner in success.',
                author: 'David Kim, Director of Urban Development',
                logo: 'https://via.placeholder.com/100x40?text=UrbanDev',
                project: 'Harbor Bridge Expansion'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={hover}
                className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 backdrop-blur-sm"
              >
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light tracking-wide mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-indigo-400 text-sm sm:text-base font-medium mb-2 tracking-wide">
                  {testimonial.project}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.logo}
                    alt={`${testimonial.author} logo`}
                    className="h-8 object-contain opacity-80"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-white text-base font-semibold tracking-wide font-sans drop-shadow-md">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="py-24 bg-gradient-to-b from-gray-900 to-indigo-900"
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
            Partner with our expert team to create innovative, sustainable, and high-quality construction projects that stand the test of time. Let’s bring your vision to life.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 items-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:from-indigo-600 hover:to-indigo-800"
              aria-label="Contact us to start your project"
            >
              Get in Touch <FiPhone className="h-5 w-5" />
            </motion.a>

            <motion.a
              href="/about"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
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