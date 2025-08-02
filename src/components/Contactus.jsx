import { useState, useRef, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSend, FiUser, FiMail, FiPhone, 
  FiMessageSquare, FiChevronDown, FiX, 
  FiMapPin, FiGlobe, FiCheckCircle 
} from 'react-icons/fi';
import { FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { services } from '../data/services';

const ContactUs = () => {
  // Form state
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: services.some(s => s.title === initialService) ? initialService : '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const formRef = useRef();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('R2Amgzf7nC3Qv450R');
  }, []);

  // Form handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

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
        'service_vimsn87',
        'template_qfjuqt3',
        formData
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
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
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Hero Section */}
      <motion.div 
        variants={itemVariants}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Let's Build Something Great
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with our team to discuss your construction project needs.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 sm:p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
          
          <AnimatePresence>
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-6 p-4 bg-green-50 rounded-lg flex items-start"
              >
                <FiCheckCircle className="text-green-500 text-xl mt-0.5 mr-3" />
                <div>
                  <h3 className="font-medium text-green-800">Message sent successfully!</h3>
                  <p className="text-green-700">We'll get back to you within 24 hours.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service Needed *
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full px-4 py-3 text-left rounded-lg border ${
                    errors.service ? 'border-red-500' : 'border-gray-300'
                  } flex items-center justify-between`}
                >
                  <span>{formData.service || 'Select a service'}</span>
                  <FiChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-60 overflow-auto">
                    {services.map((service) => (
                      <div
                        key={service.title}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, service: service.title }));
                          setIsDropdownOpen(false);
                          setErrors(prev => ({ ...prev, service: '' }));
                        }}
                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                      >
                        {service.title}
                      </div>
                    ))}
                  </div>
                )}
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600">{errors.service}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-lg p-6 sm:p-8 sticky top-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                <FiMail className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Email Us</h3>
                <a href="mailto:contact@auraconsultancy.com" className="text-blue-600 hover:underline">
                  contact@auraconsultancy.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                <FiPhone className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Call Us</h3>
                <a href="tel:+201234567890" className="text-blue-600 hover:underline">
                  +20 123 456 7890
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                <FaWhatsapp className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">WhatsApp</h3>
                <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Chat with us
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                <FiMapPin className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Our Office</h3>
                <p className="text-gray-600">123 Construction St, Cairo, Egypt</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-medium text-gray-900 mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;