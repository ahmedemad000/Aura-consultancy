import { motion } from 'framer-motion';
import { FaUsers, FaRocket, FaLightbulb, FaAward, FaHistory } from 'react-icons/fa';

const teamMembers = [
  { id: 1, name: "John Doe", role: "CEO", image: "https://images.unsplash.com/photo-1500648762182-7e7d2a515c4b?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Jane Smith", role: "CTO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Alex Johnson", role: "Lead Engineer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" },
];

const values = [
  { id: 1, title: "Innovation", description: "Driving progress with cutting-edge construction technologies.", icon: <FaLightbulb /> },
  { id: 2, title: "Excellence", description: "Delivering superior quality in every project we undertake.", icon: <FaAward /> },
  { id: 3, title: "Collaboration", description: "Building strong partnerships for successful outcomes.", icon: <FaUsers /> },
];

const historyMilestones = [
  { year: 2015, event: "Founded with a mission to redefine construction standards." },
  { year: 2018, event: "Completed our first major commercial project, earning industry acclaim." },
  { year: 2022, event: "Expanded operations to include sustainable infrastructure projects." },
  { year: 2025, event: "Introduced AI-driven construction solutions for enhanced efficiency." },
];

const Aboutus = () => {
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
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 to-gray-800">
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
            Our Construction Legacy
          </motion.h1>
          <motion.p
            className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-md"
            variants={itemVariants}
          >
            We are a pioneering construction firm dedicated to building a sustainable future through innovation, excellence, and collaboration. Our journey is defined by transformative projects and lasting partnerships.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#mission"
              className="inline-flex items-center px-8 py-3 mt-8 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
            >
              Explore Our Mission <FaRocket className="ml-3 h-5 w-5" />
            </a>
          </motion.div>
        </motion.section>

        {/* Team Section */}
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
            Our Leadership Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-700 backdrop-blur-sm"
                variants={hoverVariants}
                whileHover="hover"
              >
                <div className="relative h-64 sm:h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
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
        </motion.section>

        {/* Values Section */}
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

        {/* History Section */}
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
            Our Milestones
          </motion.h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-400/30"></div>
            {historyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                variants={itemVariants}
              >
                <div className="w-1/2 px-6">
                  <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 backdrop-blur-sm">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 tracking-wide font-sans drop-shadow-md">
                      {milestone.year}
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light tracking-wide">
                      {milestone.event}
                    </p>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div className="bg-indigo-600 text-white rounded-full p-3 z-10 shadow-lg">
                    <FaHistory className="h-5 w-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Aboutus;