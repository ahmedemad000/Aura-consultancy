import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUs from './components/Aboutus';
import Service from './components/Services';
import Projects from './components/Projects';
import ProjectShowcase from './components/ProjectShowcase';
import FAQ from './components/FAQ';
import ContactUs from './components/Contactus';
import Careers from './components/Careers';
import VideoCarousel from './components/VideoCarousel';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import PageNotFound from './components/PageNotFound';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <AboutUs /> },
    { path: '/services', element: <Service /> },
    { path: '/projects', element: <Projects /> },
    { path: '/project-showcase', element: <ProjectShowcase /> },
    { path: '/faq', element: <FAQ /> },
    { path: '/contact', element: <ContactUs /> },
    { path: '/careers', element: <Careers /> },
    { path: '/video-carousel', element: <VideoCarousel /> },
    { path: '/blog', element: <Blog /> },
    { path: '/blog/:id', element: <BlogPost /> },
    { path: '*', element: <PageNotFound /> },
  ];

  return (
    <Router basename="/Aura-consultancy">
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;