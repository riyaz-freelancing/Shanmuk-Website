import React from 'react';
import { motion } from 'framer-motion';

export const ProgressCard = ({ icon: Icon, title, value, unit, change, trend = 'up', description, accentColor = 'emerald' }) => {
  const accentClasses = {
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    amber: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    purple: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl glass-card border border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
          {title}
        </span>
        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${accentClasses[accentColor] || accentClasses.emerald}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="space-y-1 mb-3">
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl font-black text-white font-sans">{value}</span>
          {unit && <span className="text-sm font-semibold text-gray-400">{unit}</span>}
        </div>
        
        {change && (
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <span className={trend === 'up' ? 'text-emerald-400' : 'text-cyan-400'}>
              {change}
            </span>
            <span className="text-gray-500">vs initial baseline</span>
          </div>
        )}
      </div>

      {description && (
        <p className="text-xs text-gray-400 pt-3 border-t border-gray-800/80">
          {description}
        </p>
      )}
    </motion.div>
  );
};
