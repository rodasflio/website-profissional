import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services'; 
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact'; 
import About from './pages/About/About';
import FAQ from './pages/FAQ/FAQ';
import Blog from './components/Blog/Blog';
import Post from './components/Blog/Post';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100%",
  },
};

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              key="home"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              className="main-content"
            >
              <Home />
            </motion.div>
          } />
          <Route path="/sobre" element={
            <motion.div
              key="about"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              className="main-content"
            >
              <About />
            </motion.div>
          } />
          <Route path="/servicos" element={
            <motion.div
              key="services"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              className="main-content"
            >
              <Services />
            </motion.div>
          } />
          <Route path="/portfolio" element={
            <motion.div
              key="portfolio"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              className="main-content"
            >
              <Portfolio />
            </motion.div>
          } />
          <Route path="/blog" element={
            <motion.div
              key="blog"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              className="main-content"
            >
              <Blog />
            </motion.div>
          } />
          <Route path="/blog/:postId" element={
            <motion.div
              key="post"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              className="main-content"
            >
              <Post />
            </motion.div>
          } />
          <Route path="/faq" element={
            <motion.div
              key="faq"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              className="main-content"
            >
              <FAQ />
            </motion.div>
          } />
          <Route path="/contato" element={
            <motion.div
              key="contact"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              className="main-content"
            >
              <Contact />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;