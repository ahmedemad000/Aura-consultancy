import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiBriefcase, FiUpload } from 'react-icons/fi';

const Careers = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobTitle: '',
    cv: null,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS with your public key (same as ContactUs)
  emailjs.init('R2Amgzf7nC3Qv450R');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, email, jobTitle, cv } = formData;

    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!cv) newErrors.cv = 'CV is required';

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
          jobTitle: formData.jobTitle,
          message: `Application for ${formData.jobTitle}`,
        }
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', jobTitle: '', cv: null });
      formRef.current.reset();
    } catch (error) {
      console.error('Failed to send application:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants (same as ContactUs)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-[#C42126] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1512403754473-27835f7b9984?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#C42126]/80 z-0"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Hero Image Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Careers at AURA"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Join Our Team</h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            We’re always open to passionate professionals who want to redefine construction consultancy. If you’re interested in joining the AURA team, please send your CV and desired job title to:{' '}
            <a href="mailto:careers@auraconsultancy.net" className="text-white hover:underline">
              careers@auraconsultancy.net
            </a>
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-10">
            {submitStatus && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'
                }`}
              >
                {submitStatus === 'success'
                  ? 'Thank you! Your application has been sent successfully. Please email your CV separately to careers@auraconsultancy.net.'
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
                      errors.name ? 'border-rose-300 focus:ring-rose-500 focus:border-rose-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
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
                      errors.email ? 'border-rose-300 focus:ring-rose-500 focus:border-rose-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                    } shadow-sm py-3 px-4 focus:outline-none`}
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-rose-600">{errors.email}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiBriefcase className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className={`pl-10 block w-full rounded-lg border ${
                      errors.jobTitle ? 'border-rose-300 focus:ring-rose-500 focus:border-rose-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                    } shadow-sm py-3 px-4 focus:outline-none`}
                    placeholder="Desired Position"
                  />
                </div>
                {errors.jobTitle && <p className="mt-1 text-sm text-rose-600">{errors.jobTitle}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                  Upload CV
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
                    className={`pl-10 block w-full rounded-lg border ${
                      errors.cv ? 'border-rose-300 focus:ring-rose-500 focus:border-rose-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                    } shadow-sm py-3 px-4 focus:outline-none`}
                  />
                </div>
                {errors.cv && <p className="mt-1 text-sm text-rose-600">{errors.cv}</p>}
                <p className="mt-2 text-sm text-gray-500">Accepted formats: PDF, DOC, DOCX</p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`cursor-pointer w-full flex justify-center items-center gap-2 py-3 px-6 rounded-lg font-medium text-white ${
                    isSubmitting ? 'bg-[#C42126]/70 cursor-not-allowed' : 'bg-[#C42126] hover:bg-[#A01B1F]'
                  } transition-colors shadow-md`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FiUpload className="h-5 w-5" />
                      Submit Application
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Careers;