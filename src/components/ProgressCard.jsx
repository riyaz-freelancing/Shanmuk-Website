import React from 'react';
import { motion } from 'framer-motion';

export const ProgressCard = ({ icon: Icon, title, value, unit, change, trend = 'up', description, accentColor = 'emerald' }) => {
  const accentClasses = {
    emerald: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    cyan: 'text-cyan-700 bg-cyan-50 border-cyan-200',
    amber: 'text-amber-700 bg-amber-50 border-amber-200',
    purple: 'text-purple-700 bg-purple-50 border-purple-200',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-md transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-black uppercase tracking-wider text-slate-500">
          {title}
        </span>
        <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center ${accentClasses[accentColor] || accentClasses.emerald}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="space-y-1 mb-3">
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl font-black text-slate-900 font-sans">{value}</span>
          {unit && <span className="text-sm font-bold text-slate-600">{unit}</span>}
        </div>
        
        {change && (
          <div className="flex items-center gap-1.5 text-xs font-extrabold">
            <span className={trend === 'up' ? 'text-emerald-700' : 'text-cyan-700'}>
              {change}
            </span>
            <span className="text-slate-500">vs initial baseline</span>
          </div>
        )}
      </div>

      {description && (
        <p className="text-xs text-slate-600 font-semibold pt-3 border-t border-slate-200">
          {description}
        </p>
      )}
    </motion.div>
  );
};
