import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/constants';
import { DIET_DISCLAIMER } from '../data/diets';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-20 sm:pb-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Shanmuk Fitness Logo"
                className="w-10 h-10 rounded-xl object-cover border border-emerald-500/30"
              />
              <span className="font-extrabold text-xl tracking-tight text-white">
                SHANMUK <span className="text-emerald-400">FITNESS</span>
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Personalized workout routines, science-backed nutrition plans, and 1-on-1 coaching designed to help you transform your physique, build strength, and maintain long-term discipline.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-red-500/50 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest text-emerald-400 mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/workouts" className="hover:text-emerald-400 transition-colors">Workout Plans</Link></li>
              <li><Link to="/diet" className="hover:text-emerald-400 transition-colors">Diet Plans</Link></li>
              <li><Link to="/goals" className="hover:text-emerald-400 transition-colors">Fitness Goals</Link></li>
              <li><Link to="/progress" className="hover:text-emerald-400 transition-colors">Progress Dashboard</Link></li>
              <li><Link to="/tips" className="hover:text-emerald-400 transition-colors">Fitness Tips</Link></li>
            </ul>
          </div>

          {/* Direct Training Options */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest text-emerald-400 mb-4">Coaching</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Shanmuk</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Coach</Link></li>
              <li>
                <a
                  href={getWhatsAppUrl("Hi Shanmuk, I want to inquire about 1-on-1 personal coaching.")}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 flex items-center gap-1.5 text-emerald-400 font-bold"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Coaching</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest text-emerald-400 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-emerald-400 transition-colors">{SITE_CONFIG.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">+{SITE_CONFIG.whatsappNumber}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright Bar (with right padding pr-16 sm:pr-24 to avoid WhatsApp button overlap) */}
        <div className="pt-8 text-xs space-y-4 pr-16 sm:pr-24">
          <p className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-slate-300 leading-relaxed">
            <strong className="text-white">Disclaimer:</strong> {DIET_DISCLAIMER}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 text-slate-400">
            <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
            <p className="flex items-center gap-1.5 font-bold text-slate-200 bg-slate-800/90 px-3.5 py-1.5 rounded-xl border border-slate-700">
              Designed and Developed by <span className="text-emerald-400 font-extrabold">Inaya Web Digitals</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
