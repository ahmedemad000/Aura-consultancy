import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: 'Home, Buildings and Architecture',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis dui ante. Suspendisse mollis consectetur hendrerit. Proin luctus eros lacus, in sagittis risus porta sed.',
    image: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'NEWS',
    date: 'February 15, 2022',
    comments: 'No Comments',
  },
  {
    id: 2,
    title: '7 Decoration Idea to Bring Elegance to Your Bedroom',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis dui ante. Suspendisse mollis consectetur hendrerit. Proin luctus eros lacus, in sagittis risus porta sed.',
    image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'NEWS',
    date: 'February 15, 2022',
    comments: 'No Comments',
  },
  {
    id: 3,
    title: 'Tips From an Interior Designer: How to Maximize Small Interior',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis dui ante. Suspendisse mollis consectetur hendrerit. Proin luctus eros lacus, in sagittis risus porta sed.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'TIPS AND TRICK',
    date: 'February 15, 2022',
    comments: 'No Comments',
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
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
            LATEST NEWS
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Our Blog For You</h1>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            How we work tortor vel or elit, in venenatis felis molestie. In laboris odio augue, id vulputate erat est aas. Ut
            euismod ipsum ut dolor hendrerit, non utrices urna accumsan.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={item}
              whileHover={hover}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-medium px-2 py-1 rounded-full uppercase">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.comments}</span>
                </div>
                <motion.div whileHover={{ x: 5 }} className="mt-4">
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-500 font-medium"
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
          className="mt-12 text-center"
        >
          <p className="text-base text-gray-600">
            Want to read more?{' '}
            <Link to="/blog" className="text-yellow-600 hover:text-yellow-500 font-medium">
              Explore All Posts
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;