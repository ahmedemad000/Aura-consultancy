import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load components
const HomePage = lazy(() => import('./components/HomePage'));
const AboutUs = lazy(() => import('./components/Aboutus'));
const Service = lazy(() => import('./components/Services'));
const ProjectShowcase = lazy(() => import('./components/ProjectShowcase'));
const FAQ = lazy(() => import('./components/FAQ'));
const ContactUs = lazy(() => import('./components/Contactus'));
const Careers = lazy(() => import('./components/Careers'));
const Blog = lazy(() => import('./components/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));

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
    { path: '/project-showcase', element: <ProjectShowcase /> },
    { path: '/faq', element: <FAQ /> },
    { path: '/contact', element: <ContactUs /> },
    { path: '/careers', element: <Careers /> },
    { path: '/blog', element: <Blog /> },
    { path: '/blog/:id', element: <BlogPost /> },
    { path: '*', element: <PageNotFound /> },
  ];

  return (
    <Router basename={import.meta.env.BASE_URL || '/Aura-consultancy'}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse text-xl">Loading...</div>
            </div>
          }>
            <Routes>
              {routes.map(({ path, element }) => (
                <Route 
                  key={path} 
                  path={path.startsWith('/') ? path : `/${path}`} 
                  element={element} 
                />
              ))}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;