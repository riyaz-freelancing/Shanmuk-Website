import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Utensils, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const DietCard = ({ diet, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div>
        {/* Banner Image */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={diet.image}
            alt={diet.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
          
          <span className="absolute top-4 left-4 text-xs font-extrabold px-3 py-1 rounded-full bg-white/90 text-emerald-700 border border-emerald-300 backdrop-blur-md">
            {diet.category}
          </span>
          <span className="absolute bottom-3 right-4 text-xs font-extrabold text-amber-300 bg-slate-900/90 px-3 py-1 rounded-lg backdrop-blur-md border border-amber-500/40 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 fill-current" />
            {diet.calories}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
            {diet.title}
          </h3>

          <p className="text-slate-600 text-xs leading-relaxed mb-5 line-clamp-2 font-medium">
            {diet.summary}
          </p>

          {/* Macro Breakdown Chips */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            <div className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
              <div className="text-[10px] uppercase font-bold text-slate-500">Protein</div>
              <div className="text-sm font-black text-emerald-700">{diet.protein}</div>
            </div>
            <div className="p-2.5 rounded-2xl bg-cyan-50 border border-cyan-200 text-center">
              <div className="text-[10px] uppercase font-bold text-slate-500">Carbs</div>
              <div className="text-sm font-black text-cyan-700">{diet.carbs}</div>
            </div>
            <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-200 text-center">
              <div className="text-[10px] uppercase font-bold text-slate-500">Fats</div>
              <div className="text-sm font-black text-amber-700">{diet.fats}</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-600 mb-2 font-medium">
            <span className="flex items-center gap-1.5 text-slate-800 font-bold">
              <Utensils className="w-4 h-4 text-emerald-600" />
              {diet.mealsPerDay} Daily Meals
            </span>
            <span className="flex items-center gap-1 text-emerald-700 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" /> Macro-Verified
            </span>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6 pt-0">
        <Link
          to={`/diet/${diet.id}`}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white font-extrabold text-xs transition-all duration-300 border border-emerald-200 hover:border-emerald-600"
        >
          <span>View Meal Breakdown</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};
