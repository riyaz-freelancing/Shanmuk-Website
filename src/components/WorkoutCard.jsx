import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Dumbbell, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const WorkoutCard = ({ plan, index = 0 }) => {
  const levelColors = {
    Beginner: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    Intermediate: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    Advanced: 'bg-amber-100 text-amber-800 border-amber-300',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div>
        {/* Banner Image & Level Badge */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={plan.image}
            alt={plan.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
          
          <span className={`absolute top-4 left-4 text-xs font-extrabold px-3 py-1 rounded-full border backdrop-blur-md ${levelColors[plan.level] || levelColors.Beginner}`}>
            {plan.level}
          </span>
          <span className="absolute bottom-3 right-4 text-xs font-bold text-white bg-slate-900/80 px-2.5 py-1 rounded-lg backdrop-blur-md border border-slate-700 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            {plan.duration}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
            {plan.title}
          </h3>

          <p className="text-slate-600 text-xs leading-relaxed mb-5 line-clamp-2 font-medium">
            {plan.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 mb-6 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
            <div className="flex items-center gap-2 text-slate-800">
              <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <div className="text-slate-500 text-[10px] uppercase font-bold">Frequency</div>
                <div className="font-extrabold text-slate-900">{plan.frequency}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-800">
              <Dumbbell className="w-4 h-4 text-cyan-600 shrink-0" />
              <div>
                <div className="text-slate-500 text-[10px] uppercase font-bold">Split</div>
                <div className="font-extrabold text-slate-900">{plan.split}</div>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-600 space-y-1 mb-6 font-medium">
            <div><strong className="text-slate-900 font-bold">Goal:</strong> {plan.goal}</div>
            <div><strong className="text-slate-900 font-bold">Equipment:</strong> {plan.equipment}</div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6 pt-0">
        <Link
          to={`/workouts/${plan.id}`}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white font-extrabold text-xs transition-all duration-300 border border-emerald-200 hover:border-emerald-600"
        >
          <span>View Detailed Routine</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};
