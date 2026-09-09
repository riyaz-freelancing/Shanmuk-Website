import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Workout Plans', path: '/workouts' },
    { name: 'Diet Plans', path: '/diet' },
    { name: 'Goals', path: '/goals' },
    { name: 'Progress', path: '/progress' },
    { name: 'Tips', path: '/tips' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/90 py-2.5 shadow-sm' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Generated Brand Logo Image */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.jpg"
              alt="Shanmuk Fitness Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover border border-emerald-500/30 shadow-md group-hover:scale-105 transition-transform"
              onError={(e) => {
                // Fallback if image path fails
                e.target.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 font-sans flex items-center gap-1">
                SHANMUK <span className="text-emerald-600">FITNESS</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-500 uppercase font-extrabold">
                Gym & Nutrition Coaching
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-bold rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-600 bg-emerald-50 font-extrabold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Button (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={getWhatsAppUrl("Hi Shanmuk, I would like to get started with a customized fitness program.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>WhatsApp Coach</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-emerald-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 text-base font-bold rounded-xl transition-all ${
                      isActive
                        ? 'text-emerald-600 bg-emerald-50 border-l-4 border-emerald-600'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}
              
              <div className="pt-4 mt-2 border-t border-slate-200 space-y-2">
                <a
                  href={getWhatsAppUrl("Hi Shanmuk, I would like to start my fitness journey today!")}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-md"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
