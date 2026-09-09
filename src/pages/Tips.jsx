import React, { useState } from 'react';
import { BookOpen, Clock, User, ArrowRight, X, Sparkles } from 'lucide-react';
import { FITNESS_TIPS } from '../data/tips';
import { Button } from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Tips = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          Knowledge Base & Insights
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          Fitness <span className="text-gradient-brand">Tips & Articles</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Master the principles of muscle hypertrophy, fat loss science, protein nutrition, joint safety, and recovery protocols.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FITNESS_TIPS.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group rounded-2xl overflow-hidden glass-card glass-card-hover border border-gray-800 flex flex-col justify-between h-full"
          >
            <div>
              {/* Image Banner */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
                
                <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 backdrop-blur-md">
                  {tip.category}
                </span>
              </div>

              {/* Text Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" /> {tip.readTime}
                  </span>
                  <span>•</span>
                  <span>{tip.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                  {tip.title}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                  {tip.excerpt}
                </p>
              </div>
            </div>

            {/* Read Article Trigger */}
            <div className="px-6 pb-6 pt-0">
              <button
                onClick={() => setActiveArticle(tip)}
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-dark-800 hover:bg-emerald-500 hover:text-white text-emerald-400 font-semibold text-xs transition-all duration-300 border border-gray-700/80 hover:border-emerald-400"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ARTICLE MODAL POPUP */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-dark-900 border border-gray-800 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {activeArticle.category}
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {activeArticle.title}
                </h2>

                <div className="flex items-center gap-3 text-xs text-gray-400 pt-1">
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <User className="w-3.5 h-3.5" /> Coach {activeArticle.author}
                  </span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>

              <div className="h-56 rounded-2xl overflow-hidden">
                <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
              </div>

              {/* Body Content */}
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                {activeArticle.content.map((paragraph, i) => (
                  <p key={i} className="text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-800">
                <Button onClick={() => setActiveArticle(null)} variant="secondary" fullWidth>
                  Close Article
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
