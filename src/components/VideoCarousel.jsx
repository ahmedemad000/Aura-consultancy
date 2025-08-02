import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Updated video data with reliable, CORS-enabled video sources
const slides = [
  {
    id: 1,
    video: 'https://videos.pexels.com/video-files/1197802/1197802-sd_640_360_25fps.mp4',
    headline: 'Innovate with Us',
    description: 'Discover cutting-edge solutions that transform industries.',
  },
  {
    id: 2,
    video: 'https://videos.pexels.com/video-files/1817871/1817871-sd_640_360_30fps.mp4',
    headline: 'Empower Your Future',
    description: 'Join us in building a world of limitless possibilities.',
  },
  {
    id: 3,
    video: 'https://videos.pexels.com/video-files/2835998/2835998-sd_640_360_24fps.mp4',
    headline: 'Drive Success',
    description: 'Partner with us to achieve unparalleled results.',
  },
];

const VideoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);

  // Framer Motion variants for text animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Custom arrow components for react-slick
  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors duration-300"
      onClick={onClick}
    >
      <FaArrowLeft />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors duration-300"
      onClick={onClick}
    >
      <FaArrowRight />
    </button>
  );

  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    appendDots: dots => (
      <div className="absolute bottom-8 left-0 right-0">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"></div>
    ),
  };

  // Handle video errors
  const handleVideoError = (e, slideId) => {
    console.error(`Error loading video ${slideId}:`, e);
    setError(`Failed to load video for slide ${slideId}`);
  };

  // Preload videos
  useEffect(() => {
    slides.forEach(slide => {
      const video = document.createElement('video');
      video.src = slide.video;
      video.preload = 'auto';
    });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {error && (
        <div className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded">
          {error}
        </div>
      )}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative w-full h-screen">
            {/* Background Video */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay={currentSlide === index}
              loop
              muted
              playsInline
              preload="auto"
              onError={(e) => handleVideoError(e, slide.id)}
            >
              <source src={slide.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay for text readability */}
            <div className="absolute inset-0  bg-opacity-50"></div>
            {/* Text Content */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
              initial="hidden"
              animate={currentSlide === index ? "visible" : "hidden"}
              variants={textVariants}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight"
                variants={textVariants}
              >
                {slide.headline}
              </motion.h1>
              <motion.p
                className="text-lg md:text-2xl text-gray-200 max-w-2xl"
                variants={textVariants}
              >
                {slide.description}
              </motion.p>
              <motion.a
                href="#learn-more"
                className="mt-6 inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
                variants={textVariants}
              >
                Learn More
                <FaArrowRight className="ml-2" />
              </motion.a>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;