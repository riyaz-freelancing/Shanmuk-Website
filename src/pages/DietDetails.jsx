import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Flame, Utensils, ShieldCheck, Clock, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { DIET_PLANS, DIET_DISCLAIMER } from '../data/diets';
import { Button } from '../components/Button';
import { getWhatsAppUrl } from '../config/constants';

export const DietDetails = () => {
  const { id } = useParams();
  const diet = DIET_PLANS.find((d) => d.id === id) || DIET_PLANS[0];

  if (!diet) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center space-y-4">
        <h2 className="text-3xl font-bold text-white">Diet Plan Not Found</h2>
        <Link to="/diet">
          <Button variant="primary">Back to Diet Plans</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 space-y-10">
      
      {/* Back Link */}
      <Link
        to="/diet"
        className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-emerald-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to All Diet Plans
      </Link>

      {/* Plan Header Card */}
      <div className="p-6 sm:p-10 rounded-3xl glass-card border border-gray-800 relative overflow-hidden space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {diet.category} Plan
              </span>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 fill-current" /> {diet.calories}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              {diet.title}
            </h1>
            <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
              {diet.summary}
            </p>
          </div>

          <div className="shrink-0">
            <Button
              href={getWhatsAppUrl(`Hi Shanmuk, I want to get customized meal adjustments for the ${diet.title} plan.`)}
              external
              variant="whatsapp"
              size="lg"
              icon={MessageSquare}
            >
              Customize Meal Plan
            </Button>
          </div>
        </div>

        {/* Macro Distribution Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-gray-800">
          <div className="p-4 rounded-2xl bg-dark-800/80 border border-emerald-500/30 text-center">
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Total Protein</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400">{diet.protein}</div>
          </div>

          <div className="p-4 rounded-2xl bg-dark-800/80 border border-cyan-500/30 text-center">
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Carbohydrates</div>
            <div className="text-xl sm:text-2xl font-black text-cyan-400">{diet.carbs}</div>
          </div>

          <div className="p-4 rounded-2xl bg-dark-800/80 border border-amber-500/30 text-center">
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Healthy Fats</div>
            <div className="text-xl sm:text-2xl font-black text-amber-400">{diet.fats}</div>
          </div>

          <div className="p-4 rounded-2xl bg-dark-800/80 border border-purple-500/30 text-center">
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Meals / Day</div>
            <div className="text-xl sm:text-2xl font-black text-purple-400">{diet.mealsPerDay} Meals</div>
          </div>
        </div>
      </div>

      {/* Daily Meal Schedule Breakdown */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Utensils className="w-6 h-6 text-emerald-400" />
          Daily Meal Timeline & Preparation
        </h2>

        <div className="space-y-4">
          {diet.meals.map((meal, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass-card border border-gray-800 hover:border-emerald-500/30 transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold text-xs flex items-center justify-center border border-emerald-500/30">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-bold text-white">{meal.title}</h3>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-gray-400 flex items-center gap-1 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" /> {meal.time}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-dark-700 text-emerald-400 font-extrabold border border-gray-700">
                    {meal.macros}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 pt-1">
                {meal.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REQUIRED DISCLAIMER BOX */}
      <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-300/90 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-amber-400 font-bold">Important Nutritional Disclaimer:</strong>
          <p className="leading-relaxed">
            {DIET_DISCLAIMER}
          </p>
        </div>
      </div>

    </div>
  );
};
