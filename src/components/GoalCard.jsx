import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Dumbbell, Target, TrendingUp, Zap, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Flame,
  Dumbbell,
  Target,
  TrendingUp,
  Zap,
  Heart,
};

export const GoalCard = ({ goal, index = 0 }) => {
  const IconComponent = iconMap[goal.icon] || Target;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
    >
      {/* Background Image with Light Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={goal.image}
          alt={goal.title}
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div>
          {/* Top Badge & Icon */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <IconComponent className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              Goal
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
            {goal.title}
          </h3>
          <p className="text-xs font-bold text-emerald-600 mb-3">{goal.subtitle}</p>
          <p className="text-slate-600 text-xs leading-relaxed mb-6 font-medium">{goal.description}</p>
          
          {/* Key Benefits */}
          <div className="space-y-1.5 mb-6">
            {goal.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center text-xs text-slate-700 gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Link */}
        <Link
          to={`/workouts/${goal.recommendedWorkout}`}
          className="inline-flex items-center justify-between text-xs font-extrabold text-emerald-600 hover:text-emerald-700 pt-4 border-t border-slate-200"
        >
          <span>View Recommended Plan</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
