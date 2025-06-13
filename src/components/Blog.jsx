import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: 'Innovative Construction Techniques for 2025',
    excerpt: 'Explore the latest advancements in sustainable building methods revolutionizing the industry.',
    image: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: 'The Future of Smart Buildings',
    excerpt: 'How IoT and automation are transforming construction projects for efficiency and comfort.',
    image: 'https://images.unsplash.com/photo-1517086785588-d8b8f1a7f4fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Safety Standards in Modern Construction',
    excerpt: 'A deep dive into ensuring worker safety with cutting-edge protocols and technologies.',
    image: 'https://images.unsplash.com/photo-1503387762-592afbf1a9d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
];

const Blog = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
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
    scale: 1.03,
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 tracking-tight font-sans drop-shadow-lg">
            Construction Insights
          </h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-md">
            Stay informed with our latest articles on construction trends, innovations, and best practices.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={item}
              whileHover={hover}
              className="bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-700 backdrop-blur-sm"
            >
              <div className="relative h-56 sm:h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 tracking-wide font-sans drop-shadow-md">
                  {post.title}
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light tracking-wide line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold transition-colors duration-300"
                  >
                    Read More <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
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
            Want to read more?{' '}
            <Link
              to="/blog"
              className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors duration-300"
            >
              Explore All Posts
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;