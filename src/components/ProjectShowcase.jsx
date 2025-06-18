import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'Downtown Office Tower',
    location: 'New York, NY',
    description: 'A 35-story office skyscraper featuring innovative sustainable design and state-of-the-art facilities.',
    imageUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
    status: 'Completed',
    completionDate: 'March 2024',
  },
  {
    id: 2,
    name: 'Sunrise Residential Complex',
    location: 'San Francisco, CA',
    description: 'Modern residential apartments with eco-friendly materials and smart home integration for sustainable urban living.',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80',
    status: 'In Progress',
    completionDate: 'December 2025',
  },
  {
    id: 3,
    name: 'Harbor Bridge Expansion',
    location: 'Seattle, WA',
    description: 'An engineering marvel that expanded urban connectivity with a focus on safety and efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    status: 'Completed',
    completionDate: 'August 2023',
  },
  {
    id: 4,
    name: 'Green Tech Factory',
    location: 'Austin, TX',
    description: 'A state-of-the-art manufacturing facility powered by renewable energy and designed for zero waste.',
    imageUrl: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=80',
    status: 'In Progress',
    completionDate: 'June 2026',
  },
];

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Animation variants for cards
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const hover = {
    y: -10,
    scale: 1.02,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(99, 102, 241, 0.3)',
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  // Animation variants for popup
  const popup = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const overlay = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="relative bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-gray-800" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of innovative construction projects that redefine urban landscapes.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={hover}
              className="relative bg-gray-800/40 rounded-xl overflow-hidden border border-gray-700/50 backdrop-blur-sm"
            >
              <div className="relative">
                <motion.img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-56 sm:h-64 object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 tracking-tight">
                  {project.name}
                </h3>
                <p className="text-indigo-300 text-sm sm:text-base mb-3 font-medium">
                  {project.location}
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <motion.button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 inline-flex items-center text-indigo-300 hover:text-indigo-200 text-sm sm:text-base font-medium transition-colors duration-200"
                  whileHover={{ x: 4 }}
                >
                  Learn More <FaArrowRight className="ml-2 h-3.5 w-3.5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center text-indigo-300 hover:text-indigo-200 font-medium text-base transition-colors duration-200"
          >
            View Full Portfolio <FaArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              variants={overlay}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/60 z-20"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              variants={popup}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-gray-800/90 rounded-2xl w-full max-w-4xl mx-4 sm:mx-0 p-6 sm:p-8 backdrop-blur-md border border-gray-700/50 flex flex-col sm:flex-row gap-6"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Close"
              >
                <FaTimes className="h-5 w-5" />
              </button>
              <div className="flex-shrink-0 w-full sm:w-1/2">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.name}
                  className="w-full h-64 sm:h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{selectedProject.name}</h3>
                <p className="text-indigo-300 text-sm sm:text-base mb-3">{selectedProject.location}</p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">{selectedProject.description}</p>
                <div className="text-gray-300 text-sm sm:text-base">
                  <p><span className="font-medium text-indigo-300">Status:</span> {selectedProject.status}</p>
                  <p><span className="font-medium text-indigo-300">Completion Date:</span> {selectedProject.completionDate}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectShowcase;