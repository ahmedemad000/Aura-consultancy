import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';

const ContactUs = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Initialize EmailJS with your public key
  emailjs.init('R2Amgzf7nC3Qv450R');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, email, message } = formData;
    
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_vimsn87', // Your service ID
        'template_qfjuqt3', // Your template ID
        formData
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      formRef.current.reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-8 md:p-10">
            {submitStatus && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus === 'success' 
                    ? 'bg-emerald-50 text-emerald-800' 
                    : 'bg-rose-50 text-rose-800'
                }`}
              >
                {submitStatus === 'success' 
                  ? 'Thank you! Your message has been sent successfully.'
                  : 'Oops! Something went wrong. Please try again later.'}
              </motion.div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`pl-10 block w-full rounded-lg border ${
                      errors.name ? 'border-rose-300 focus:ring-rose-500 focus:border-rose-500' 
                      : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                    } shadow-sm py-3 px-4 focus:outline-none`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && <p className="mt-1 text-sm text-rose-600">{errors.name}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`pl-10 block w-full rounded-lg border ${
                      errors.email ? 'border-rose-300 focus:ring-rose-500 focus:border-rose-500' 
                      : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                    } shadow-sm py-3 px-4 focus:outline-none`}
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-rose-600">{errors.email}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-gray-500">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10 block w-full rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm py-3 px-4 focus:outline-none"
                    placeholder="+20 123 456 7890"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <FiMessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`pl-10 block w-full rounded-lg border ${
                      errors.message ? 'border-rose-300 focus:ring-rose-500 focus:border-rose-500' 
                      : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                    } shadow-sm py-3 px-4 focus:outline-none`}
                    placeholder="How can I help you?"
                  />
                </div>
                {errors.message && <p className="mt-1 text-sm text-rose-600">{errors.message}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`cursor-pointer w-full flex justify-center items-center gap-2 py-3 px-6 rounded-lg font-medium text-white ${
                    isSubmitting 
                      ? 'bg-indigo-400 cursor-not-allowed' 
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  } transition-colors shadow-md`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          <p>Alternatively, you can email me directly at <a href="mailto:ahmedemad0546@gmail.com" className="text-indigo-600 hover:underline">ahmedemad0546@gmail.com</a></p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;