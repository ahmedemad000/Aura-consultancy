import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Added missing import

const blogPosts = [
  {
    id: 1,
    title: 'Home, Buildings and Architecture',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis dui ante. Suspendisse mollis consectetur hendrerit. Proin luctus eros lacus, in sagittis risus porta sed.',
    image: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'NEWS',
    date: 'February 15, 2022',
    comments: 'No Comments',
    content: 'This is the full content of the blog post about Home, Buildings and Architecture. Here you can include detailed information, images, and additional text to provide a comprehensive view of the topic. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 2,
    title: '7 Decoration Idea to Bring Elegance to Your Bedroom',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis dui ante. Suspendisse mollis consectetur hendrerit. Proin luctus eros lacus, in sagittis risus porta sed.',
    image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'NEWS',
    date: 'February 15, 2022',
    comments: 'No Comments',
    content: 'This is the full content of the blog post about 7 Decoration Ideas to Bring Elegance to Your Bedroom. Detailed tips and ideas can be expanded here, including design inspirations and practical advice. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3,
    title: 'Tips From an Interior Designer: How to Maximize Small Interior',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis dui ante. Suspendisse mollis consectetur hendrerit. Proin luctus eros lacus, in sagittis risus porta sed.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'TIPS AND TRICK',
    date: 'February 15, 2022',
    comments: 'No Comments',
    content: 'This is the full content of the blog post about Tips From an Interior Designer: How to Maximize Small Interior. Expand with expert advice, images, and examples here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="text-center py-10 text-gray-600">Post not found</div>;
  }

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

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.div variants={item}>
            <Link
              to="/blog"
              className="inline-flex items-center text-yellow-600 hover:text-yellow-500 font-medium mb-4"
            >
              <FaArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </motion.div>
          <motion.div variants={item}>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
              loading="lazy"
            />
          </motion.div>
          <motion.div variants={item}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 mb-4">
              {post.category}
            </span>
          </motion.div>
          <motion.h1 variants={item} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </motion.h1>
          <motion.div variants={item} className="flex justify-between items-center text-xs text-gray-500 mb-6">
            <span>{post.date}</span>
            <span>{post.comments}</span>
          </motion.div>
          <motion.p variants={item} className="text-gray-600 text-base leading-relaxed mb-6">
            {post.content}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;