import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    name: 'Downtown Office Tower',
    location: 'New York, NY',
    description: 'A 35-story office skyscraper featuring innovative sustainable design and state-of-the-art facilities.',
    imageUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    name: 'Sunrise Residential Complex',
    location: 'San Francisco, CA',
    description: 'Modern residential apartments with eco-friendly materials and smart home integration for sustainable urban living.',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    name: 'Harbor Bridge Expansion',
    location: 'Seattle, WA',
    description: 'An engineering marvel that expanded urban connectivity with a focus on safety and efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 4,
    name: 'Green Tech Factory',
    location: 'Austin, TX',
    description: 'A state-of-the-art manufacturing facility powered by renewable energy and designed for zero waste.',
    imageUrl: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=80',
  },
];

const ProjectShowcase = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth * 0.8, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth * 0.8, behavior: 'smooth' });
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const hover = {
    scale: 1.05,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  return (
    <div className="relative bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1260')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 tracking-tight font-sans drop-shadow-lg">
            Our Premier Projects
          </h2>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-md">
            Showcase of our cutting-edge construction projects that redefine industry standards.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-6"
            ref={scrollRef}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={hover}
                className="flex-none bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-700 backdrop-blur-sm w-[90vw] sm:w-[70vw] lg:w-[50vw] max-w-[600px] snap-center"
              >
                <div className="relative h-64 sm:h-80">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 tracking-wide font-sans drop-shadow-md">
                    {project.name}
                  </h3>
                  <p className="text-indigo-400 font-medium mb-3 text-base sm:text-lg tracking-wide">
                    {project.location}
                  </p>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light tracking-wide line-clamp-2">
                    {project.description}
                  </p>
                  <motion.a
                    href={`/projects/${project.id}`}
                    className="mt-4 inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    View Project <FaArrowRight className="ml-2 h-4 w-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={scrollLeft}
            className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-indigo-600 text-white p-4 rounded-full hover:bg-indigo-700 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous Project"
          >
            <FaArrowLeft className="h-5 w-5" />
          </motion.button>
          <motion.button
            onClick={scrollRight}
            className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-indigo-600 text-white p-4 rounded-full hover:bg-indigo-700 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next Project"
          >
            <FaArrowRight className="h-5 w-5" />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg sm:text-xl text-gray-100 font-light tracking-wide">
            Want to see more?{' '}
            <a
              href="/projects"
              className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors duration-300"
            >
              Explore All Projects
            </a>
          </p>
        </motion.div>
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default ProjectShowcase;