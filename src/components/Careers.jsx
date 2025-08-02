import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiBriefcase, FiUpload, FiArrowRight } from 'react-icons/fi';

const Careers = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    cv: null,
    coverLetter: null
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS
  emailjs.init('R2Amgzf7nC3Qv450R');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    if (!formData.cv) newErrors.cv = 'CV is required';
    
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
        {
          name: formData.name,
          email: formData.email,
          position: formData.position,
          message: `Application for ${formData.position}`
        }
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', position: '', cv: null, coverLetter: null });
      formRef.current.reset();
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative bg-gray-900 py-24"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={item} className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Build Your Career With <span className="text-[#C42126]">AURA</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join our team of construction consultancy experts working on landmark projects across the MENA region.
            </p>
            <motion.a
              href="#open-positions"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 bg-[#C42126] text-white font-medium rounded-md shadow-sm"
            >
              View Open Positions <FiArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Our Team?</h2>
            <div className="w-20 h-1 bg-[#C42126] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At AURA, we foster an environment of professional growth and excellence in construction consultancy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Development",
                description: "Continuous learning opportunities and career advancement programs",
                icon: "📈"
              },
              {
                title: "Impactful Projects",
                description: "Work on high-profile construction projects across the region",
                icon: "🏗️"
              },
              {
                title: "Competitive Benefits",
                description: "Comprehensive compensation and benefits package",
                icon: "💼"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

     

      {/* Application Form */}
      <motion.section 
        id="apply"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={item} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Form</h2>
            <div className="w-20 h-1 bg-[#C42126] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete this form to apply for positions at AURA Consultancy. We'll review your application and contact qualified candidates.
            </p>
          </motion.div>

          <motion.div variants={item} className="bg-white rounded-xl shadow-md border border-gray-200">
            <div className="p-8 md:p-10">
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-8 p-4 rounded-md ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <h4 className="font-medium mb-1">Application Submitted</h4>
                      <p>Thank you for your interest in AURA. We've received your application and will contact you if your qualifications match our needs.</p>
                    </>
                  ) : (
                    <>
                      <h4 className="font-medium mb-1">Submission Error</h4>
                      <p>There was an error submitting your application. Please try again or email careers@auraconsultancy.net directly.</p>
                    </>
                  )}
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
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
                        className={`pl-10 block w-full rounded-md border ${
                          errors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#C42126] focus:border-[#C42126]'
                        } shadow-sm py-2.5 px-3 focus:outline-none`}
                        placeholder="John Smith"
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
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
                        className={`pl-10 block w-full rounded-md border ${
                          errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#C42126] focus:border-[#C42126]'
                        } shadow-sm py-2.5 px-3 focus:outline-none`}
                        placeholder="john.smith@example.com"
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Position Applying For *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiBriefcase className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className={`pl-10 block w-full rounded-md border ${
                        errors.position ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#C42126] focus:border-[#C42126]'
                      } shadow-sm py-2.5 px-3 focus:outline-none`}
                      placeholder="Senior Cost Consultant"
                    />
                  </div>
                  {errors.position && <p className="mt-1 text-sm text-red-600">{errors.position}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                      Upload CV/Resume *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUpload className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="file"
                        id="cv"
                        name="cv"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        className={`pl-10 block w-full rounded-md border ${
                          errors.cv ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#C42126] focus:border-[#C42126]'
                        } shadow-sm py-2.5 px-3 focus:outline-none file:border-0 file:bg-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-md file:text-sm file:font-medium`}
                      />
                    </div>
                    {errors.cv && <p className="mt-1 text-sm text-red-600">{errors.cv}</p>}
                    <p className="mt-2 text-xs text-gray-500">PDF, DOC, or DOCX (Max 5MB)</p>
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                      Cover Letter (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUpload className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="file"
                        id="coverLetter"
                        name="coverLetter"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2.5 px-3 focus:outline-none focus:ring-[#C42126] focus:border-[#C42126] file:border-0 file:bg-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-md file:text-sm file:font-medium"
                      />
                    </div>
                    <p className="mt-2 text-xs text-gray-500">PDF, DOC, or DOCX (Max 5MB)</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center py-3 px-6 rounded-md font-medium text-white ${
                      isSubmitting ? 'bg-[#C42126]/90 cursor-not-allowed' : 'bg-[#C42126] hover:bg-[#A01B1F]'
                    } shadow-sm transition-colors`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <FiArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Careers;