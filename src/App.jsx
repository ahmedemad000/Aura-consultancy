import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ContactUs from './components/Contactus';
import FAQ from './components/Faq';
import HomePage from './components/HomePage';
import Service from './components/Services';
import Projects from './components/Projects';
import AboutUs from './components/Aboutus';
import VideoCarousel from './components/VideoCarousel';
import ProjectShowcase from './components/ProjectShowcase';
import PageNotFound from './components/PageNotFound';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Service />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-showcase" element={<ProjectShowcase />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/video-carousel" element={<VideoCarousel />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;